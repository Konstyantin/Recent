<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServicePost;
use App\Http\Requests\UpdatedServicePost;
use App\Http\Traits\UploadServiceImages;
use App\Service;
use Illuminate\Support\Facades\Response;

/**
 * Class ServiceController
 * @package App\Http\Controllers
 */
class ServiceController extends Controller
{
    use UploadServiceImages;

    /**
     * Index action method
     *
     * The method is responsible for getting list of service as paginate list
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $list = Service::paginate(10) ?? [];

        return Response::json($list, 200);
    }

    /**
     * Show action method
     *
     * The method is responsible for getting service item by the passed id param value
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $service = Service::where('id', $id);

        if (!$service) {
            return Response::json(['message' => 'Service item not found']);
        }

        return Response::json($service->with('benefits')->get()->toArray(), 200);
    }

    /**
     * Store action method
     *
     * The method responsible for create new service item
     *
     * @param StoreServicePost $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreServicePost $request)
    {
        $input = $request->all();

        $input['icon'] = $this->uploadIcon($request);

        $input['image'] = $this->uploadImage($request);

        $service = Service::create($input)->toArray();

        return Response::json($service, 201);
    }

    /**
     * Update action method
     *
     * The method is responsible for update a service item data
     *
     * @param UpdatedServicePost $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdatedServicePost $request, $id)
    {
        $input = $request->except(['id', '_method']);

        $service = Service::find($id);

        if (!$service) {
            return Response::json(['message' => 'Service item not found'], 404);
        }

        $input['icon'] = $this->uploadIcon($request);

        $input['image'] = $this->uploadImage($request);

        $service->update($input);

        return Response::json(['updated' => $service], 204);
    }

    /**
     * Delete action method
     *
     * The method is responsible for delete a service item by passed id param value
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return Response::json(['message' => 'Service item not found'], 404);
        }

        $service->delete();

        return Response::json(['id' => $id], 200);
    }
}
