import Form from '.core/Form';
import axios from 'axios';
import Vue from 'vue';

window.axios = axios;
window.Form = Form;

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
