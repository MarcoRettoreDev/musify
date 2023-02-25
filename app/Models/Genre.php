<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\Track;
use App\Models\Album;

class Genre extends BaseModel
{
    protected $fillable = [
        'name',
        'slug',
        'expires_at',
    ];

    protected $casts = [
        'name' => 'string',
        'slug' => 'string',
        'expires_at' => 'datetime',
    ];

    // Relations
    public function albums()
    {
        return $this->belongsToMany(Album::class);
    }

    public function tracks()
    {
        return $this->belongsToMany(Track::class);
    }
}
