import route from '@/Composables/Route';

export const convertHexToRgba = (color, opacity = 0.5) => {
    color = color.replace('#', '');

    const red = parseInt(color.substring(0, 2), 16);
    const green = parseInt(color.substring(2, 4), 16);
    const blue = parseInt(color.substring(4, 6), 16);

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const isActiveRoute = routeName => {
    return (
        route().has(routeName) &&
        location.pathname == new URL(route(routeName)).pathname
    );
};
