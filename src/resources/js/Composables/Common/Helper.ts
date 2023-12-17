import route from '@/Composables/Common/Route';

export const convertHexToRgba = (color: string, opacity: number = 0.5) : string => {
    color = color.replace('#', '');

    const red = parseInt(color.substring(0, 2), 16);
    const green = parseInt(color.substring(2, 4), 16);
    const blue = parseInt(color.substring(4, 6), 16);

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const isLightColor = (color: string) : boolean => {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substring(0, 0 + 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;

    return brightness > 155;
};

export const isActiveRoute = (routeName: string) : boolean => {
    return (
        route().has(routeName) &&
        location.pathname == new URL(route(routeName)).pathname
    );
};

export const getDate = (date: string) : string => {
    return moment(date).format('ll');
};
