/* Form Class */

import Errors from './Errors';

class Form {
    constructor (data){
        this.originalData = data;
        for (let field in data ){
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    data () {
        let data = {};

        // Clone the form data
        for (let property in this.originalData){
            data[property] = this[property];
        }
        return data;
    }

    submit (requestMethod, theUrl) {
        return new Promise( (resolve, reject ) => {
            axios({
                    method: requestMethod,
                    url: theUrl,
                    data: this.data()
             })
             .then( response => {
                 this.onSuccess(response.data);
                 resolve(response.data);
             })
             .catch( error => {
                    this.onFail(error.response.data);
                    reject(error.response.data);
             });
        });
    }

    onSuccess (data) {
        console.log("Success,'data.projects': ", data.projects);
        this.reset();
    }

    onFail (errors) {
        console.log("Fail, 'errors', ", errors);
        this.errors.record(errors);
    }

    reset () {
        for (let field in this.originalData){
            this[field] = '';
        }
        this.errors.clear();
    }
}


export default Form;
