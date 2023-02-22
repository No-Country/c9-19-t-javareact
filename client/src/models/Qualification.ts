import {Period} from './Period';
import {ScaleQualification} from './ScaleQualification';
import {TypeQualification} from './TypeQualification';

export class Qualification {
    id?: number;
    message?: string;
    numerical_qualification?: number;
    commission_subject_id?: number;
    subject_name?: string;
    period_id?: number; 
    period?: Period; 
    scale_qualification_id?: number;
    scale_qualification?: ScaleQualification;
    student_id?: number;
    type_qualification_id?: number;
    type_qualification?: TypeQualification;

    static parseItem(raw: any): Qualification {
        const qualification = new Qualification();
        qualification.id = raw.id ? raw.id : undefined;
        qualification.message = raw.message ? raw.message : undefined;
        qualification.subject_name = raw.subject_name ? raw.subject_name : undefined;
        qualification.numerical_qualification = raw.numerical_qualification ? raw.numerical_qualification : undefined;
        qualification.commission_subject_id = raw.commission_subject_id ? raw.commission_subject_id : undefined;  
        qualification.period_id = raw.period_id ? raw.period_id : undefined;  
        qualification.period = raw.period ? raw.period : undefined;  
        qualification.scale_qualification = raw.scale_qualification ? raw.scale_qualification : undefined;  
        qualification.student_id = raw.student_id ? raw.student_id : undefined;  
        qualification.scale_qualification_id = raw.scale_qualification_id ? raw.scale_qualification_id : undefined;  
        qualification.type_qualification_id = raw.type_qualification_id ? raw.type_qualification_id : undefined;  
        qualification.type_qualification = raw.type_qualification ? raw.type_qualification : undefined; 
        return qualification;
    }
 
    static parseArray(raws: any): Qualification[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => Qualification.parseItem(raw));
    }

}