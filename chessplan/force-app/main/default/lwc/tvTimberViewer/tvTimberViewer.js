import { LightningElement,track } from 'lwc';

export default class tV_TimberViewer extends LightningElement {

    handleInputChange(event){
        if(event.target.files.length > 0){
            const file = event.target.files[0];
            this.loading = true;
            console.log(file);
            console.log('>>>' + file);
            console.log(JSON.stringify(file));
            const fr = new FileReader();
        }
    }
}