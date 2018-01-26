import * as firebase from 'firebase';
import config from '../constants/app/firebase';

firebase.initializeApp(config);
const database = firebase.database();
class FirebaseApi {
    static get firebase() {
        return firebase;
    }
    static get database() {
        return database;
    }
    constructor(route) {
        this.route = route;
    }

    // customRoute ="/mycustom/route"
    get(id, customRoute = '') {
        const url = this.getUrl(this.route, customRoute, id);
        return database.ref(url).once('value');
    }
    post(data, next, customRoute = '', useParamId = false) {
        const newData = { ...data };
        const url = this.getUrl(this.route, customRoute);
        const newKey = (useParamId) ? data.id : database.ref().child(url).push().key;
        newData.createdAt = firebase.database.ServerValue.TIMESTAMP;
        newData.id = newKey;
        database.ref(this.getUrl(this.route, customRoute, newKey)).set(newData);
    }
    update(id, data, next, customRoute = '', updates = {}) {
        const newData = { ...data };
        const url = this.getUrl(this.route, customRoute, id);
        newData.updatedAt = firebase.database.ServerValue.TIMESTAMP;
        updates[url] = data;
        database.ref().update(updates);
        next(null, data);
    }
    delete(id, next, customRoute = '') {
        const url = this.getUrl(this.route, customRoute);
        database.ref(url).child(id).remove();
    }

    on(next, customRoute = '') {
        const url = this.getUrl(this.route, customRoute);
        database.ref(url).on('value', (snapshot) => {
            next(null, snapshot.val());
        });
    }
    off(next, customRoute = '') {
        const url = this.getUrl(this.route, customRoute);
        database.ref(url).off();
    }
}

export default FirebaseApi;
