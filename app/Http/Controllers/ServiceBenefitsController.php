<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServiceBenefitsPost;
use App\ServiceBenefits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ServiceBenefitsController extends Controller
{
    public function index()
    {
        dd('service benefit index action');
    }

    public function show($id)
    {
        dd('service benefit show action');
    }

    /**
     * Store action method
     *
     * The method is responsible for create a new service benefit item record
     *
     * @param StoreServiceBenefitsPost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreServiceBenefitsPost $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $input = $request->all();

        $benefit = ServiceBenefits::create($input)->toArray();

        return Response::json($benefit, 201);
    }

    public function update(Request $request, $id)
    {
        dd('service benefit update action');
    }

    public function delete($id)
    {
        dd('service benefit delete action');
    }
}
