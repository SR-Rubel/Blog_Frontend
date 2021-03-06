import React,{useState} from 'react'
import './Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Login(props) {

    const [login,setLogin]=useState({})
    const navigate=useNavigate()
    // console.log(na)
    const submitHandler=async(e)=>{
        e.preventDefault()
        await axios.post('/login',login)
        .then(response=>{
            localStorage.setItem('token',response.data.token);
            if(response.status === 200) navigate("/", { replace: true });
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        })

    }
    console.log(login)

    return (
        <>
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input 
                            onChange={e=>setLogin({...login,email:e.target.value})} type="text" className="login__input" placeholder="Email" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                            onChange={e=>setLogin({...login,password:e.target.value})}
                            type="password" className="login__input" placeholder="Password" />
                        </div>
                        <button onClick={e=>submitHandler(e)} className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                    <div className="form_text">
                        test with<br/>
                        email: test@mail.com
                        password: password
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
        </>
    )
}

export default Login
