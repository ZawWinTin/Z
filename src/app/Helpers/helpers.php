<?php

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

if (!function_exists('format_date')) {
    /**
     * Format date format [Eg. December 11th (Mon)].
     *
     * @param  string  $date
     */
    function format_date($date): string
    {
        $date = new Carbon($date);

        return $date->isoFormat('MMMM Do (ddd)');
    }
}

if (!function_exists('save_permanent_env')) {
    /**
     * update env
     */
    function save_permanent_env(string $envKey, string $configKey, mixed $value): void
    {
        $path = app()->environmentFilePath();
        $content = file_get_contents($path);
        $isExistKey = preg_match("/^{$envKey}/m", $content);

        if (is_bool($value)) {
            $value = ($value) ? 'true' : 'false';
        } else {
            $value = "\"$value\"";
        }

        if ($isExistKey) {
            // check env old value for boolean type
            if (is_bool(config($configKey))) {
                $oldValue = config($configKey) ? 'true' : 'false';
            } else {
                $oldValue = config($configKey);
            }

            $replaceContent = preg_replace("/^{$envKey}\=\"?{$oldValue}\"?/im", "{$envKey}={$value}", $content);
            file_put_contents($path, $replaceContent);
        } else {
            file_put_contents($path, "\n{$envKey}={$value}", FILE_APPEND);
        }

        app()->loadEnvironmentFrom($path);
        Artisan::call('optimize:clear');
    }
}

if (!function_exists('is_previous_route')) {
    /**
     * Return whether previous route name is equal to a given route name.
     */
    function is_previous_route(string $routeName): bool
    {
        $previousRequest = url()->previous();

        try {
            $previousRouteName = app('router')->getRoutes()->match(app('request')->create($previousRequest))->getName();
        } catch (NotFoundHttpException $exception) {
            // Exception is thrown if no mathing route found.
            // This will happen for example when comming from outside of this app.
            return false;
        }

        return Str::is($routeName, $previousRouteName);
    }
}
