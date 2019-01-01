import './assets/style/index.less';
import './assets/style/index.css';
import './assets/style/bootstrap.css';

import Vue from 'vue';
import App from './App';

new Vue({
    el:'#app',
    components:{
        App
    },
    template:`
     <App/>
    `
})

// alert(1)