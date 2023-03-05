<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\User;
use App\Models\Track;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class Playlist extends BaseModel implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'name',
        'description',
        'slug',
        'expires_at',
        'user_id'
    ];

    protected $casts = [
        'name' => 'string',
        'description' => 'string',
        'slug' => 'string',
        'expires_at' => 'datetime',
        'user_id' => 'integer'
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
    public function tracks()
    {
        return $this->belongsToMany(Track::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
