const SERVER_URL = process.env.SERVER_URL;
class CustomUrl {
    static getURL = (url, params, server = true) => {
        const fullURL = server ? `${SERVER_URL}${url}` : url;
        if (params && Object.keys(params) && Object.keys(params).length) {
            const mapObj = {};
            Object.keys(params).forEach((par) => {
                mapObj[`:${par}`] = params[par];
            });
            const regexp = new RegExp(Object.keys(mapObj).join('|'), 'gi');
            return fullURL.replace(regexp, matched => mapObj[matched]);
        }
        return fullURL;
    };
}
export default CustomUrl;
