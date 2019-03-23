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
        'short_description',
        'description',
        'icon',
        'image'
    ];

    /**
     * @return Service
     */
    public static function getInstance()
    {
        return new self();
    }

    /**
     * Define relation between Service and ServiceBenefits entities
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function benefits()
    {
        return $this->hasMany(ServiceBenefits::class);
    }
}
