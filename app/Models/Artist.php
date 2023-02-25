<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\Album;
use App\Models\Track;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Artist extends BaseModel implements InteractsWithMedia
{
    use HasMedia;

    protected $fillable = [
        'name',
        'slug',
        'birthdate',
        'country',
        'expires_at',
    ];

    protected $casts = [
        'name' => 'string',
        'slug' => 'string',
        'birthdate' => 'datetime',
        'country' => 'string',
        'expires_at' => 'datetime',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR)
            ->singleFile();
    }

    // Relations
    public function albums()
    {
        return $this->hasMany(Album::class);
    }

    public function tracks()
    {
        return $this->belongsToMany(Track::class);
    }
}
