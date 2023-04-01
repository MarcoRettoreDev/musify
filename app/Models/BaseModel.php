<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    public const MEDIA_COLLECTION_AUDIO = 'audio';
    public const MEDIA_COLLECTION_IMAGE = 'image';
    public const MEDIA_CONVERSION_THUMBNAIL = 'thumbnail';
    public const MEDIA_CONVERSION_AVATAR = 'avatar';

    /**
     * Add an image as avatar to the model.
     *
     * @param \App\Models\BaseModel $model
     */
    public static function addImage($model, $image)
    {
        if ($model->hasMedia(self::MEDIA_COLLECTION_IMAGE)) {
            $model->clearMediaCollection(self::MEDIA_COLLECTION_IMAGE);
        } else {
            $model->addMedia($image)->toMediaCollection(self::MEDIA_COLLECTION_IMAGE);
        }
    }
}
