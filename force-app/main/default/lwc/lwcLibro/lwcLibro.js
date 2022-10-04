import { LightningElement } from 'lwc';

export default class LwcLibro extends LightningElement {
    /*Creamos el objeto y sus propiedades*/
    libro = {
        name:"Tom Sawyer",
        editorial:"Alma",
        imagen_url:"https://www.poemas-del-alma.com/blog/wp-content/uploads/2020/07/tom-swayer.jpg",
        resena:"Este libro es una nota."
    };
}