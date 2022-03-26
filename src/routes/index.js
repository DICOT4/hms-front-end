import routes from './routes';

const getRoutes = (_role) => {
    return routes.filter(_route => _route.allowedRoles.includes(_role));
};

const _exports = {
    getRoutes: getRoutes
};

export default _exports;