type DataModeType = {
    icon: string;
    label: string;
    outlined: boolean;
};

export class DataMode {
    static 0: DataModeType = {
        icon: 'pi pi-check',
        label: 'Active',
        outlined: false,
    };
    static 1: DataModeType = {
        icon: 'pi pi-trash',
        label: 'Trash',
        outlined: true,
    };
    static 2: DataModeType = {
        icon: 'pi pi-th-large',
        label: 'All',
        outlined: false,
    };
}
