import {
    BooleanOption,
    DropdownOption,
    NumberOption,
} from '@/Interfaces/SettingOptions';

export default interface SystemSetting {
    id: number;
    name: string;
    value: number | string | boolean | null;
    type: string;
    label: string;
    description: string;
    icon_name: string;
    options: NumberOption | BooleanOption | Array<DropdownOption>;
}
