<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\Album;
use App\Models\Track;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Artist extends BaseModel implements HasMedia
{
    use InteractsWithMedia;

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
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE)
            ->singleFile();
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(BaseModel::MEDIA_CONVERSION_THUMBNAIL)
            ->fit(Manipulations::FIT_CROP, 100, 100)
            ->optimize()
            ->performOnCollections(BaseModel::MEDIA_COLLECTION_IMAGE);

        $this->addMediaConversion(BaseModel::MEDIA_CONVERSION_AVATAR)
            ->fit(Manipulations::FIT_CROP, 500, 500)
            ->background('151513')
            ->optimize()
            ->performOnCollections(BaseModel::MEDIA_COLLECTION_IMAGE);
    }

    // Relations
    // public function albums()
    // {
    //     return $this->belongsToMany(Album::class);
    // }

    public function getAvatar()
    {
        return $this->getMedia(BaseModel::MEDIA_COLLECTION_IMAGE)->first()->getUrl(BaseModel::MEDIA_CONVERSION_AVATAR);
    }

    public function getImages()
    {
        return $this->getFirstMediaUrl(BaseModel::MEDIA_COLLECTION_IMAGE);
    }


    // Relations
    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
}
