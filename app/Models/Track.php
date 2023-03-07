<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\Artist;
use App\Models\Album;
use App\Models\Playlist;
use App\Models\Genre;
use Spatie\Image\Manipulations;
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
        'artist_id',
        'album_id',
    ];

    protected $casts = [
        'title' => 'string',
        'artist' => 'string',
        'duration' => 'datetime',
        'release' => 'datetime',
        'expires_at' => 'datetime',
        'artist_id' => 'integer',
        'album_id' => 'integer',
    ];

    // appends
    protected $appends = [
        'avatar',
        'image'
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO)->singleFile();
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE)->singleFile();
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(BaseModel::MEDIA_CONVERSION_AVATAR)
            ->performOnCollections(BaseModel::MEDIA_COLLECTION_IMAGE)
            ->fit(Manipulations::FIT_FILL, 500, 500)
            ->background('151513');
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

    public function playlists()
    {
        return $this->belongsToMany(Playlist::class);
    }

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function getAvatar()
    {
        return $this->getMedia(BaseModel::MEDIA_COLLECTION_IMAGE)->first()->getUrl(BaseModel::MEDIA_CONVERSION_AVATAR);
    }

    public function getImages()
    {
        return $this->getFirstMediaUrl(BaseModel::MEDIA_COLLECTION_IMAGE);
    }

    public function getAudio()
    {
        return $this->getFirstMediaUrl(BaseModel::MEDIA_COLLECTION_AUDIO);
    }

    public function getAvatarAttribute()
    {
        return $this->getAvatar();
    }

    public function getImageAttribute()
    {
        return $this->getImages();
    }
}
