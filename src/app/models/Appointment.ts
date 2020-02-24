var id = 1000;

export class Appointment {

    id: number;

    constructor(
        public date: string = "",
        public time: string = "",
        public location: string = "",
        public description: string = ""
    ) {
        this.id = id++;
    }

}