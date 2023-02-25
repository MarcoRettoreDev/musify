<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    public const MEDIA_COLLECTION_AUDIO = 'audio';
    public const MEDIA_COLLECTION_IMAGE = 'image';
    public const MEDIA_COLLECTION_AVATAR = 'avatar';

    /**
     * Add an audio to the model.
     *
     * @param \App\Models\BaseModel $model
     */
    public static function addAudio($model)
    {
        if ($model->hasMedia(self::MEDIA_COLLECTION_AUDIO)) {
            $model->clearMediaCollection(self::MEDIA_COLLECTION_AUDIO);
        } else {
            $model->addMedia()->toMediaCollection(self::MEDIA_COLLECTION_AUDIO);
        }
    }

    /**
     * Add an image as avatar to the model.
     *
     * @param \App\Models\BaseModel $model
     */
    public static function addImage($model)
    {
        if ($model->hasMedia(self::MEDIA_COLLECTION_IMAGE)) {
            $model->clearMediaCollection(self::MEDIA_COLLECTION_IMAGE);
        } else {
            $model->addMedia()->toMediaCollection(self::MEDIA_COLLECTION_IMAGE);
        }
    }
}
