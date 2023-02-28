export class Teacher {
    idPerson?: number;
    firstName?: string;
    lastName?: string;
    document?: string;
    birthDate?: string;
    email?: string;
    timeStamp?: string;
    phone?: string;

    static parseItem(raw: any): Teacher {
        const teacher = new Teacher();
            teacher.idPerson = raw.idPerson ? raw.idPerson : undefined;
            teacher.firstName = raw.firstName ? raw.firstName : undefined;
            teacher.lastName = raw.lastName ? raw.lastName : undefined;
            teacher.document = raw.document ? raw.document : undefined;
            teacher.birthDate = raw.birthDate ? raw.birthDate : undefined;
            teacher.email = raw.email ? raw.email : undefined;
            teacher.timeStamp = raw.timeStamp ? raw.timeStamp : undefined;
            teacher.phone = raw.phone ? raw.phone : undefined;
        return teacher;
    }
}