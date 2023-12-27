import {
    BooleanOption,
    NumberOption,
    DropdownOption,
} from '@/Interfaces/SettingOptions';

export default interface SystemSetting {
    id: number;
    name: string;
    value: any;
    type: string;
    label: string;
    description: string;
    icon_name: string;
    options: NumberOption | BooleanOption | Array<DropdownOption>;
}
