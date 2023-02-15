import {User} from './User';

export class Subject {
    id?: number;
    // commission_id?: number;
    teacher_id?: number;
    teacher?: User;
    subject_name?: string;

    static parseItem(raw: any): Subject {
        const subject = new Subject();
        subject.id = raw.id ? raw.id : undefined;
        // subject.commission_id = raw.commission_id ? raw.commission_id : undefined;
        subject.teacher_id = raw.teacher_id ? raw.teacher_id : undefined;
        subject.teacher = raw.teacher ? raw.teacher : undefined;  
        subject.subject_name = raw.subject_name ? raw.subject_name : undefined;  
        return subject;
    }
 
    static parseArray(raws: any): Subject[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => Subject.parseItem(raw));
    }

}