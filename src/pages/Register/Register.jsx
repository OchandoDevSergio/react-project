
import { MyInput } from '../../common/MyInput/MyInput';
import './Register.css';

export const Register = () => {

    return(
        <div className="registerDesign">
           <div className='upperColumn'>
             <div className='row'>
              <MyInput 
                  name={"name"}
                  placeholder={"escribe un nombre"}
                  type={"text"}           
              />
              <MyInput 
                  name={"surname"}
                  placeholder={"escribe un apellido"}
                  type={"text"}           
              />
              <MyInput 
                  name={"email"}
                  placeholder={"escribe un email"}
                  type={"email"}           
              />
             </div>
             <div className='row'>
               <MyInput 
                  name={"phone"}
                  placeholder={"escribe un telefono"}
                  type={"text"}           
               />
               <MyInput 
                  name={"password"}
                  placeholder={"escribe un password"}
                  type={"password"}           
               />
               <MyInput 
                  name={"password2"}
                  placeholder={"escribe el password de nuevo"}
                  type={"password"}           
               />
             </div>
           </div>
           <div className='lowerColumn'>
               <MyInput 
                  name={"report"}
                  placeholder={"escribe cualquier problema a reportar"}
                  type={"text"}           
               />
           </div>
        </div>
    )
}
