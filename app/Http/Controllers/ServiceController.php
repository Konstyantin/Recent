<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;

/**
 * Class ServiceController
 * @package App\Http\Controllers
 */
class ServiceController extends Controller
{
    /**
     * Index action method
     *
     * The method is responsible for getting list of service as paginate list
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $list = Service::paginate(10);

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
        $service = Service::find($id)->toArray();

        return Response::json($service, 200);
    }

    /**
     * Store action method
     *
     * The method responsible for create new service item
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $baseImageFolder = public_path() . '/images/vendor/services/';

        $iconImage = $request->file('icon');
        $iconName = $iconImage->getClientOriginalName();
        $iconImage->move($baseImageFolder . 'icon/', $iconName);
        $input['icon'] = $iconName;

        $serviceImage = $request->file('image');
        $imageName = $serviceImage->getClientOriginalName();
        $serviceImage->move($baseImageFolder . 'image/', $imageName);
        $input['image'] = $imageName;

        $service = Service::create($input)->toArray();

        return Response::json($service, 201);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $input = $request->except(['id', '_method']);

        $baseImageFolder = public_path() . '/images/vendor/services/';

        $iconImage = $request->file('icon');
        $iconName = $iconImage->getClientOriginalName();
        $iconImage->move($baseImageFolder . 'icon/', $iconName);
        $input['icon'] = $iconName;

        $serviceImage = $request->file('image');
        $imageName = $serviceImage->getClientOriginalName();
        $serviceImage->move($baseImageFolder . 'image/', $imageName);
        $input['image'] = $imageName;

        $service = Service::find($id)->update($input);

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

        if ($service) {
            $service->delete();
            return Response::json(['id' => $id], 200);
        }

        return Response::json([], 404);
    }
}
