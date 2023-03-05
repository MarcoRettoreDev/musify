<?php

namespace App\Models;

use App\Models\BaseModel;
use App\Models\User;
use App\Models\Track;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Playlist extends BaseModel implements HasMediaWithMedia
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
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR)
            ->singleFile();
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
