import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;
console.log(import.meta.env.MIX_PUSHER_APP_CLUSTER)
window.echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.MIX_PUSHER_APP_KEY,
    cluster: import.meta.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: true,
});

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
