import React, {FC, useContext, useState} from 'react'
import {Context} from "../index"

const LoginForm: FC = () => {

    const [email, setIsEmail] = useState<string>()
    const [password, setIsPassword] = useState<string>()
    const {store} = useContext(Context)

    return (
        <div>

            <input
                onChange={event => setIsEmail(event.target.value)}
                value={email}
                type='text'
                placeholder='Enter your email'
            />
            <input
                onChange={event => setIsEmail(event.target.value)}
                value={password}
                type='text'
                placeholder='Enter your email'
            />

            <button
                onClick={() => store.login(email, password)}
            >
                Sign in
            </button>
            <button
                onClick={() => store.login(email, password)}
            >
                Sign up
            </button>


        </div>
    );
};

export default LoginForm