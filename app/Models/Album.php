<?php

namespace App\Models;

use App\Models\BaseModel;

use App\Models\Artist;
use App\Models\Genre;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Album extends BaseModel implements InteractsWithMedia
{
    use HasMedia;

    protected $fillable = [
        'artist_id',
        'name',
        'year',
        'description',
        'cover',
    ];

    protected $casts = [
        'artist_id' => 'integer',
        'name' => 'string',
        'year' => 'integer',
        'description' => 'string',
        'cover' => 'string',
    ];

    // Relations
    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function tracks()
    {
        return $this->hasMany(Track::class);
    }

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }
}
