export class Subject {
    subjectId?: number;
    subjectName?: string;
    commissionSubjectId?: number;

    static parseItem(raw: any): Subject {
        const subject = new Subject();
        subject.subjectId = raw.subjectId ? raw.subjectId : undefined;
        subject.subjectName = raw.subjectName ? raw.subjectName : undefined;  
        subject.commissionSubjectId = raw.commissionSubjectId ? raw.commissionSubjectId : undefined;  
        return subject;
    }
 
    static parseArray(raws: any): Subject[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => Subject.parseItem(raw));
    }

}