<?php

namespace App\Services;

use App\Models\Image;
use InterventionImage;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImageService
{
    /**
     * Upload multiple images
     */
    public function uploadMany(array $files): array
    {
        $images = [];

        if (count($files)) {
            foreach ($files as $file) {
                $images[] = $this->upload($file);
            }
        }

        return $images;
    }

    /**
     * Upload image
     */
    public function upload(UploadedFile $file): Image
    {
        $name = $this->generateName($file);
        $path = "image/$name";

        $image = InterventionImage::make($file->getRealPath());

        // Resize Image
        $imageFile = $image->resize(1000, null, function ($constraint) {
            $constraint->aspectRatio();
        })->stream();

        Storage::put($path, $imageFile);

        return new Image([
            'name' => $name,
            'path' => $path,
            'url' => Storage::url($path),
            'mime_type' => $image->mime(),
            'file_size' => $image->filesize(),
        ]);
    }

    /**
     * delete multiple images
     */
    public function deleteMany(array $ids, string $type): void
    {
        if (count($ids)) {
            $images = Image::where('imageable_type', $type)->whereIn('id', $ids);
            foreach ($images->get() as $image) {
                Storage::delete($image->path);
            }
            $images->delete();
        }
    }

    /**
     * delete image
     */
    public function delete(int $id, string $type): void
    {
        $image = Image::where('imageable_type', $type)->where('id', $id)->first();
        Storage::delete($image->path);
        $image->delete();
    }

    /**
     * Generate Name
     *
     * @return string $name
     */
    protected function generateName(UploadedFile $file): string
    {
        return time() . Str::random() . '.' . $file->getClientOriginalExtension();
    }
}
