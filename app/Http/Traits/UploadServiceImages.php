<?php
/**
 * Created by PhpStorm.
 * User: kostia
 * Date: 23.03.19
 * Time: 17:36
 */

namespace App\Http\Traits;

use Illuminate\Http\Request;

/**
 * Trait UploadServiceImages
 * @package App\Http\Traits
 */
trait UploadServiceImages
{
    /**
     * Get base image folder path
     *
     * @return string
     */
    protected function getBaseImageFolder()
    {
        return public_path() . '/images/vendor/services/';
    }

    /**
     * Upload icon method
     *
     * @param Request $request
     * @return null|string
     */
    public function uploadIcon(Request $request)
    {
        $iconImage = $request->file('icon');
        $iconName = $iconImage->getClientOriginalName();
        $iconImage->move($this->getBaseImageFolder() . 'icon/', $iconName);
        return $iconName;
    }

    /**
     * Upload image method
     *
     * @param Request $request
     * @return null|string
     */
    public function uploadImage(Request $request)
    {
        $serviceImage = $request->file('image');
        $imageName = $serviceImage->getClientOriginalName();
        $serviceImage->move($this->getBaseImageFolder() . 'image/', $imageName);
        return $imageName;
    }
}