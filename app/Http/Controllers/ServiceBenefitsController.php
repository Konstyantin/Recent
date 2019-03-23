<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

    public function store()
    {
        dd('service benefit store action');
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
