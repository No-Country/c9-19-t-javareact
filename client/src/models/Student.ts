
export class Student {
    id?: number
    idInscription?: number;
    firstName?: string;
    lastName?: string;
    document?: string;
    isRegular?: boolean;


    static parseItem(raw: any): Student {
        const student = new Student();
        student.id = raw.id ? raw.id : undefined;
        student.idInscription = raw.idInscription ? raw.idInscription : undefined;
        student.firstName = raw.firstName ? raw.firstName : undefined;  
        student.lastName = raw.lastName ? raw.lastName : undefined;  
        student.document = raw.document ? raw.document : undefined;  
        student.isRegular = raw.isRegular ? raw.isRegular : undefined;  
        return student;
    }
 
    static parseArray(raws: any): Student[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => Student.parseItem(raw));
    }
}