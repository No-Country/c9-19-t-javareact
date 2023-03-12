
import { useAppSelector } from '../app/hooks';
import { selectRol } from '../app/states/user';
import { LinkStudent } from './UI/LinkStudent';
import { LinkTutor } from './UI/LinkTutor';
import { LinkAdmin } from './UI/LinkAdmin';
import { LinkTeacher } from './UI/LinkTeacher';

export const SideNav = () => {
  const useRol = useAppSelector(selectRol)
  return (
    <div className="bg-blue sidebar-on animate__animated animate__slideInLeft animate__delay-0.5s" id="sidebar-wrapper" >
      <div className="sidebar-heading bg-red">
        <img src="https://media.discordapp.net/attachments/1071146886603489310/1072642125201674350/GoodLearner3.png" width="195" alt="" />
        </div>

      { useRol ==='ADMINISTRATOR' ? (
         <LinkAdmin/>
      ) : (
        useRol ==='TEACHER' ? 
       ( <LinkTeacher/>
       ) : 
       useRol ==='STUDENT' ? 
       ( <LinkStudent/>
       )
       : 
       ( <LinkTutor/>
       )
      )}
      </div>
  )
}
