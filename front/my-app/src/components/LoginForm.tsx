import React, {FC, useContext, useState} from 'react'
import {type} from "os";

const LoginForm: FC = () => {

    const [email, setIsEmail] = useState<string>()
    const [password, setIsPassword] = useState<string>()

    return (
        <div className='fixed top-0 z-[100]'
        >
            <div
                className='
                    h-[100vh]
                    w-[100vw]
                    backdrop-blur-md
                    fixed top-0'

                id='blur-div'
            >

            </div>
            <div className='
                    h-[100vh]
                    w-[100vw]
                    flex
                    flex-col
                    justify-center
                    items-center'
            >
                <div
                    className='
                        fixed
                        z-[101]
                        h-max
                        w-max
                        bg-white
                        flex
                        flex-col
                        justify-center
                        items-center'

                    id='auth-modal'
                >
                    <div className='
                            flex
                            flex-col
                            justify-center
                            items-center
                            p-8
                            gap-7'
                    >
                        <h3 className='text-2xl font-semibold text-slate-700'>
                            login
                        </h3>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm