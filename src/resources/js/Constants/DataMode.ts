type DataModeType = {
    icon: string;
    label: string;
    outlined: boolean;
};

export class DataMode {
    static modes: Record<number, DataModeType> = {
        0: {
            icon: 'pi pi-check',
            label: 'Active',
            outlined: false,
        },
        1: {
            icon: 'pi pi-trash',
            label: 'Trash',
            outlined: true,
        },
        2: {
            icon: 'pi pi-th-large',
            label: 'All',
            outlined: false,
        },
    };
}
