import {User} from './User';
import {CommissionSubject} from './CommissionSubject';

export class Commission {
    commissionId?: number;
    course?: string;
    division?: string;
    schoolYear?: number;
    shiftName?: string;
    subjects?: Array<CommissionSubject>; 
    students?: Array<User>;

    static parseItem(raw: any): Commission {
        const commission = new Commission();
        commission.commissionId = raw.commissionId ? raw.commissionId : undefined;
        commission.course = raw.course ? raw.course : undefined;
        commission.division = raw.division ? raw.division : undefined;
        commission.schoolYear = raw.schoolYear ? raw.schoolYear : undefined;  
        commission.subjects = raw.subjects ? CommissionSubject.parseArray(raw.subjects) : [];  
        commission.students = raw.students ? raw.students : [];  
        return commission;
    }
 
    static parseArray(raws: any): Commission[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => Commission.parseItem(raw));
    }

}