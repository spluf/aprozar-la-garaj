import React from 'react'
import SignIn from '../../components/sign-in/signin.component'
import SignUp from '../../components/signup/signup.component'

import './login-register.styles.scss';

export default function LoginRegisterPage() {
    return (
        <div className='main login-register'>
            <SignIn />
            <SignUp />
        </div>
    )
}
