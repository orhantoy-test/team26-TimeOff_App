export function apiPath(route) {
    const host = process.env.REACT_APP_API_HOST || 'http://localhost';
    const port = process.env.REACT_APP_API_PORT || 4051;
    const basePath = process.env.REACT_APP_BASE_PATH || '/api';

    return `${host}:${port}${basePath}${route}`;
}
