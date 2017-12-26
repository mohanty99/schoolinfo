export class School {
    id: number;
    instituteName: string;
    instituteAddress: string;
    constructor(public _id: number,
       public _instituteName: string,
       public _instituteAddress: string) {
           this.id =_id;
           this.instituteName = _instituteName;
           this.instituteAddress = _instituteAddress;
    }
} 