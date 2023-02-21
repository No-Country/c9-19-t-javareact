import Swal from 'sweetalert2';
import { apiProps, useApi } from '../hooks/useApi';
/* 
{
    "firstName": "Martin",
    "lastName" : "Gomez",
    "birthDate": "1980-07-25",
    "document": "99999999",
    "email": "martin@gmail.com",
    "phone": "4527-0000",
    "roleName": "ADMINISTRATOR"

    http://127.0.0.1:8080/api/admin/register
  }
 */

export interface Props {
firstName?:string,
lastName?:string,
birthDate?:Date,
document?: number,
email?: string,
phone?: number,
roleName?: "ADMINISTRATOR" | "TEACHER" | "STUDENT" | "TUTOR" | undefined,
token?:string
}
export const postCrud = ({firstName,lastName,birthDate,document,email,phone,roleName,token}:Props) => {
        return async(dispatch:any) => {
            const apiPropertyes:apiProps = {
              token:token,
              path:'admin/register',
              method:'post',
              body:{
                firstName:firstName,
                lastName:lastName,
                birthDate:'1989-09-09',
                document:document,
                email:email,
                phone:'213123123213',
                roleName:roleName
              }
            };
            const res = await useApi(apiPropertyes)
            res.status !==200 ? 
            Swal.fire('Error','Usuario Incorrecto','error') : Swal.fire('Exitoso','Usuario Creado','success')
            return 'error no manejado'
    }
}

