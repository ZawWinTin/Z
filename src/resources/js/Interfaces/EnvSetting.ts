export default interface EnvSetting {
    name: string;
    value: any;
    type: string;
    label: string;
    description: string;
    icon_name: string;
    options: Array<any> | [];
}
