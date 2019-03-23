<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

    public function show($id)
    {
        dd('service show action');
    }

    public function store(Request $request)
    {
        dd('service store action');
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
