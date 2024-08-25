import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import 'material-icons/iconfont/material-icons.css';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import {createPinia} from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"



window.jQuery = $;
window.$ = $;
const pinia = createPinia().use(piniaPluginPersistedState)
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(pinia)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
