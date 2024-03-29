<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserPut;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * Authenticate action
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticate(Request $request)
    {
        $credential = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credential)) {
                return response()->json(['errors' => 'Invalid credential'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['errors' => 'cloud_not_create_token'], 500);
        }

        $user = Auth::user();

        $user->hasRole('admin') ? $role = 'admin' : $role = 'user';

        return response()->json(['token' => $token, 'role' => $role]);
    }

    /**
     * Register action method
     *
     * @param StoreUserPut $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(StoreUserPut $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'first_name' => $request->get('firstName'),
            'last_name' => $request->get('lastName'),
            'email' => $request->get('email'),
            'phone' => $request->get('phone'),
            'password' => Hash::make($request->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user', 'token'), 201);
    }

    /**
     * Get authenticated user action
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAuthenticatedUser()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }

        $user->isAdmin = $user->hasRole('admin') ? true : false;

        return response()->json(compact('user'));
    }
}
