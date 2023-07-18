
import { MyInput } from '../../common/MyInput/MyInput';
import './Home.css';

export const Home = () => {

    return(
        <div className="homeDesign">
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
           <div className='column'>
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
                placeholder={"escribe un password de nuevo"}
                type={"password"}           
            />
           </div>
        </div>
    )
}
