import React from "react";
import {useForm} from "react-hook-form";

const LoginForm = (props) => {
   const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
       console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={'Login'} {...register('name')}/>
            </div>
            <div>
                <input placeholder={'********'} {...register('password')}/>
            </div>
            <div>
                <input type={'checkbox'} {...register('remember')}/> remember me
            </div>
            <div>
                <button type={'submit'}>Sign IN</button>
            </div>
        </form>
    )

}

const Login = (props) => {
    return <div>
        <h1>Sign IN</h1>
        <LoginForm />
    </div>
}
export default Login;


