import {User} from './User';
import {Subject} from './Subject';

export class Commission {
    commissionId?: number;
    course?: string;
    division?: string;
    school_year?: number;
    shiftName?: string;
    subjects?: Array<Subject>; 
    students?: Array<User>;

    static parseItem(raw: any): Commission {
        const commission = new Commission();
        commission.commissionId = raw.commissionId ? raw.commissionId : undefined;
        commission.course = raw.course ? raw.course : undefined;
        commission.division = raw.division ? raw.division : undefined;
        commission.school_year = raw.school_year ? raw.school_year : undefined;  
        commission.subjects = raw.subjects ? raw.subjects : [];  
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