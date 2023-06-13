import React, {FC, useState} from 'react';

const LoginForm :FC = () => {

    const [email, setIsEmail] = useState<string>()
    const [password, setIsPassword] = useState<string>()
    return (
        <div>
            <input
                onChange={event => setIsEmail(event.target.value)}
                value={email}
                type='text'
                placeholder=''
            />

        </div>
    );
};

export default LoginForm;