<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServiceBenefitsPost;
use App\ServiceBenefits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

/**
 * Class ServiceBenefitsController
 * @package App\Http\Controllers
 */
class ServiceBenefitsController extends Controller
{
    /**
     * Index action method
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $list = ServiceBenefits::paginate(10) ?? [];

        return Response::json($list, 200);
    }

    /**
     * Show action method
     *
     * The method is responsible for getting a service benefit item record by the passed  id param
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $benefit = ServiceBenefits::find($id);

        if (!$benefit) {
            return Response::json(['message' => 'Service benefit item not found']);
        }

        return Response::json($benefit->toArray(), 200);
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

    /**
     * Updated action method
     *
     * The method is responsible for update a service benefit item data
     *
     * @param StoreServiceBenefitsPost $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(StoreServiceBenefitsPost $request, $id)
    {
        $input = $request->except(['id', '_method']);

        $benefit = ServiceBenefits::find($id);

        if (!$benefit) {
            return Response::json(['message' => 'Service benefits item not found'], 404);
        }

        $benefit->update($input);

        return Response::json(['updated' => $benefit], 204);
    }

    /**
     * Delete action method
     *
     * The method is responsible for delete a service benefit item record by the passed id param
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $benefit = ServiceBenefits::find($id);

        if (!$benefit) {
            return Response::json(['message' => 'Service benefit item not found']);
        }

        $benefit->delete();

        return Response::json(['id' => $id], 200);
    }
}
