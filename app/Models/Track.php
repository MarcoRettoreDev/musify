<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\Artist;
use App\Models\Album;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Track extends BaseModel implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'title',
        'artist',
        'duration',
        'release',
        'expires_at',
    ];

    protected $casts = [
        'title' => 'string',
        'artist' => 'string',
        'duration' => 'datetime',
        'release' => 'datetime',
        'expires_at' => 'datetime',
    ];

    public function getDurationAttribute($value)
    {
        return gmdate('H:i:s', $value);
    }

    public function getReleaseAttribute($value)
    {
        return gmdate('Y-m-d', $value);
    }

    // public function registerMediaConversions(Media $media = null): void
    // {
    //     $this
    //         ->addMediaConversion('thumb')
    //         ->width(100)
    //         ->height(100)
    //         ->sharpen(10);
    // }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO)->singleFile();
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE)->singleFile();
    }

    // Relations
    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function album()
    {
        return $this->belongsTo(Album::class);
    }
}
