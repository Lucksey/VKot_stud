import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {withLoginNavigate} from "../../hoc/withLoginNavigate";


const LoginForm = (props) => {
    const {register, handleSubmit} = useForm()
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                <input placeholder={'Login'} {...register('email')}/>
            </div>
            <div>
                <input placeholder={'********'} {...register('password')}/>
            </div>
            <div>
                <input type={'checkbox'} {...register('rememberMe')}/> remember me
            </div>
            <div>
                <button type={'submit'}>Sign IN</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    const dispatch = useDispatch()
    const onSubmit = ({email, password, rememberMe}) => {
        try {
            dispatch(login(email, password, rememberMe));

        } catch (error) {
            console.error(error)
        }
    }
    return <div>
        <h1>Sign IN</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}
export default withLoginNavigate(Login);


