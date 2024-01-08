<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum DataMode: int
{
    use EnumToArray;

    case ACTIVE = 0;
    case TRASH = 1;
    case ALL = 2;
}
