import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

window.axios = axios;
window.Form = Form;

/* Set these to true to enable the View.js.devtools to work with Webpack */
Vue.config.debug = true;
Vue.config.devtools = true

new Vue({
    el: '#projects-app',
    data: {
        form: new Form({
            name: '',
            description: ''
        }),
    },
    methods: {
        onSubmit() {
            console.log("Submitting Stuff: ", this.form);
            this.form.submit('post', '/projects.json')
                .then(response => alert("Yeeehaaah"))
                .catch(errors => {
                    //alert("Errors... " +  JSON.stringify(errors))}
                    for (let e in errors) {
                        console.log("Error: ", e);
                    }
                });
        }
    }
});
