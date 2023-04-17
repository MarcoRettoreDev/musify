<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Playlist;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use App\Models\BaseModel;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, Notifiable, InteractsWithMedia;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'image'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function playlists()
    {
        return $this->hasMany(Playlist::class);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE)
            ->singleFile();
    }

    public function addImage($image)
    {
        if ($this->hasMedia(BaseModel::MEDIA_COLLECTION_IMAGE)) {
            $this->clearMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);
        }

        $this->addMedia($image)->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);
    }

    public function getImageAttribute()
    {
        return $this->getFirstMediaUrl(BaseModel::MEDIA_COLLECTION_IMAGE);
    }
}
