import { Qualification } from './Qualification';
import {User} from './User';

export class Subject {
    subjectId?: number;
    // commission_id?: number;
    teacher_id?: number;
    teacher?: User;
    subjectName?: string;
    qualifications?: Array<Qualification>

    static parseItem(raw: any): Subject {
        const subject = new Subject();
        subject.subjectId = raw.subjectId ? raw.subjectId : undefined;
        // subject.commission_id = raw.commission_id ? raw.commission_id : undefined;
        subject.teacher_id = raw.teacher_id ? raw.teacher_id : undefined;
        subject.teacher = raw.teacher ? raw.teacher : undefined;  
        subject.subjectName = raw.subjectName ? raw.subjectName : undefined;  
        subject.qualifications = raw.qualifications ? raw.qualifications : [];
        return subject;
    }
 
    static parseArray(raws: any): Subject[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => Subject.parseItem(raw));
    }

}