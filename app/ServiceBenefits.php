<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ServiceBenefits
 * @package App
 */
class ServiceBenefits extends Model
{
    /**
     * @var string $table
     */
    protected $table = 'service_benefits';

    /**
     * @var array $fillable
     */
    protected $fillable = [
        'title',
        'description',
        'service_id'
    ];

    /**
     * @return ServiceBenefits
     */
    public function getInstance()
    {
        return new self();
    }
}
