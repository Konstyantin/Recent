<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Service
 * @package App
 */
class Service extends Model
{
    /**
     * @var string $table
     */
    protected $table = 'services';

    /**
     * @var array $fillable
     */
    protected $fillable = [
        'title',
        'description',
        'image'
    ];
}
