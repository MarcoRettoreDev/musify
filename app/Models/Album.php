<?php

namespace App\Models;

use App\Models\BaseModel;

use App\Models\Artist;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Album extends BaseModel implements InteractsWithMedia
{
    use HasMedia;

    // Relations
    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
}
