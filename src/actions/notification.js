import axios from 'axios';
import Store from '../reducers/store';

const apiURL = 'https://temp.neargroup.me/ag'
export function showLoader() {
    return {
        type: 'LOADER_NOTIFICATION',
        payload: true
    };
}

export const getNotifications = (channelid = '2c4049be7a41473d8b743a816bed041b') => {
    Store.dispatch(showLoader());
    const data = { channelid };
    return axios({
      method: 'POST',
      url: `${apiURL}/myNotification`,
      data
    })
    .then( response => {
        return {
            type: 'NOTIFICATIONS',
            payload: response
        }
    })
    .catch( error => {
        return {
            type: 'NOTIFICATIONS',
            payload: { data: 0, error }
        }
    } );
}

export const getNotificationsCache = () => {
    return {
            type: 'NOTIFICATIONS_CACHE',
            payload: true
        }
}
