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
        'expires_at',
        'user_id'
    ];

    protected $casts = [
        'name' => 'string',
        'description' => 'string',
        'expires_at' => 'datetime',
        'user_id' => 'integer'
    ];

    protected $appends = [
        'image',
        'tracks'
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

    public function getTracksAttribute()
    {
        return $this->tracks()->get();
    }

    public function getImageAttribute()
    {
        return $this->getImages();
    }

    public function getImages()
    {
        return $this->getFirstMediaUrl(BaseModel::MEDIA_COLLECTION_IMAGE);
    }

    public function syncPlaylistTrack($data)
    {
        // Remove old relations
        $this->tracks()->sync([]);

        // Establish new relations
        if (isset($data)) {
            foreach ($data as $index => $track) {
                $this->tracks()->attach($track['id'], ['order' => $index + 1]);
            }
        }
    }

    // Relations
    public function tracks()
    {
        return $this->belongsToMany(Track::class)
            ->withPivot('order')
            ->orderByPivot('order', 'asc');;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
