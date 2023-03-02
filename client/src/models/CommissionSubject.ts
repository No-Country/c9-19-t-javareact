import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { User } from "./User";

export class CommissionSubject {
    idCommissionSubject?: number;
    subject?: Subject;
    teacher?: Teacher;
    subjectId?: Number;
    subjectName?: String;

    static parseItem(raw: any): CommissionSubject {
        const commissionSubject = new CommissionSubject();
        commissionSubject.idCommissionSubject = raw.idCommissionSubject ? raw.idCommissionSubject : undefined;
        commissionSubject.subject = raw.subject ? raw.subject : undefined;
        commissionSubject.teacher = raw.teacher ? raw.teacher : undefined;  
        return commissionSubject;
    }
 
    static parseArray(raws: any): CommissionSubject[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => CommissionSubject.parseItem(raw));
    }

}