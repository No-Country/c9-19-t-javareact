import { Qualification } from './Qualification';
import {User} from './User';

export class Subject {
    subjectId?: number;
    subjectName?: string;

    static parseItem(raw: any): Subject {
        const subject = new Subject();
        subject.subjectId = raw.subjectId ? raw.subjectId : undefined;
        subject.subjectName = raw.subjectName ? raw.subjectName : undefined;  
        return subject;
    }
 
    static parseArray(raws: any): Subject[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => Subject.parseItem(raw));
    }

}