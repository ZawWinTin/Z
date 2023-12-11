<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum DataType: string
{
    use EnumToArray;

    case NUMBER = 'number';
}
