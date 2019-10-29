export class Model {

    user;
    items; 

    constructor() {
        this.user = 'Turgut';
       
        this.items= [
            new TodoItem('Kahvaltı',true),
            new TodoItem('Sinema',false),
            new TodoItem('Spor',false),
            new TodoItem('Ders Çalışma',false)
        ];
    }

}

export class TodoItem{
    description;
    action; 

    constructor(description,action ){
       this.description = description; 
       this.action = action; 
    }
}