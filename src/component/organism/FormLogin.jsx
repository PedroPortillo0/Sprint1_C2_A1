import WrapperlInput from "../molecules/WrapperInput";
import Logo from "../atoms/Logo";

function FormLogin() {
    return (  
       <div>
    <Logo/>
         <div className="hijo1">
         <WrapperlInput 
                msn="correo:"
                type="text"
            />
                <WrapperlInput 
                msn="contraseña"
                type="password"
            />
            <div className="hijo2">

            </div>
         </div>
       </div>
    );
}

export default FormLogin;
