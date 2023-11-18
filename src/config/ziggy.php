<?php

return [
    'groups' => [
        'admin' => ['*'],
    ],
    'except' => ['admin.*', 'debugbar.*', 'ignition.*'],
];
