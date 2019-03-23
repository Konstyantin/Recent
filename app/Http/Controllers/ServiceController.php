<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

/**
 * Class ServiceController
 * @package App\Http\Controllers
 */
class ServiceController extends Controller
{
    public function index(Request $request)
    {
        dd('service index action');
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

    public function update(Request $request, $id)
    {
        dd('service update action');
    }

    public function delete($id)
    {
        dd('service delete action');
    }
}
