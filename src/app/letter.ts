export class Letter {

    constructor(id?, subject?, text?) {
        this.id = id;
        this.subject = subject;
        this.text = text;
    }

    id: number;
    subject: string;
    text: string;
}
