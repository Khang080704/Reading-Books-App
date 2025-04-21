'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

//import data
import { users } from '@/MockData/data';

function Login() {
    const router = useRouter();
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [remember, setRemember] = useState(false)
    const [name, setName] = useState('')
    


    function handleForm(): void {
        setLogin(!login);
    }

    async function handleLogin(e: any) {
        const type = e.target.innerHTML
        
        if(type == "Login"){
            const res = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ email, password, remember }),
            });
    
            if (res.ok) {
                router.push('/user/Home');
            } else {
                const data = await res.json();
                setError(data.message || 'Đăng nhập thất bại');
            }
        }
        else {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
            })

            console.log(res)

            if(res.ok) {
                router.push('/user/Home')
            }
        }
        
    }

    return (
        <div className="w-full h-full flex items-center justify-center sm:h-[60%] lg:h-full">
            <div
                className="flex flex-col justify-around py-5 px-8 h-full bg-transparent rounded-3xl border border-[#8C8C8C] backdrop-blur-lg 
            lg:w-[40%] max-md:h-[70%]"
            >
                <h1 className="text-white text-[1rem]">
                    Welcome to <span className="text-black">Booki</span>
                </h1>
                <p className="text-white text-[20px] text-center">
                    {login ? 'Welcome back. Please login to your account' : 'Create your account'}
                </p>

                <form className="flex flex-col">
                    <div className=" border-solid border-[#8C8C8C] border-[1px] py-3 px-5 shadow-md mb-2 focus-within:border-[#FF5585] rounded-3xl">
                        <input
                            placeholder="Email address"
                            className="outline-none w-full placeholder:text-white text-white focus:placeholder:text-[#aaa]"
                            onChange={(e) => {setEmail(e.target.value)}}
                            type='email'
                        />
                    </div>
                    <div className=" border-solid border-[#8C8C8C] border-[1px] py-3 px-5 shadow-md mb-2 focus-within:border-[#FF5585] rounded-3xl">
                        <input
                            type="password"
                            placeholder="Password"
                            className="outline-none w-full placeholder:text-white text-white focus:placeholder:text-[#aaa]"
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    {login ? (
                        ''
                    ) : (
                        <div className=" border-solid border-[#8C8C8C] border-[1px] py-3 px-5 shadow-md mb-4 focus-within:border-[#FF5585] rounded-3xl">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="outline-none w-full placeholder:text-white text-white focus:placeholder:text-[#aaa]"
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </div>
                    )}

                    {!login ? (
                        ''
                    ) : (
                        <div className="flex justify-between mb-3">
                            <div className="flex flex-row-reverse justify-between items-center ">
                                <label htmlFor="remember" className="hover:cursor-pointer text-white text-[0.8rem]">
                                    Remember me
                                </label>
                                <input type="checkbox" id="remember" className="w-4 h-4 hover:cursor-pointer mr-1" 
                                checked={remember} onChange={() => setRemember(!remember)}/>
                            </div>
                            <a href="#" className="text-[0.8rem]">
                                Forgot Password?
                            </a>
                        </div>
                    )}

                    <div className="flex justify-between">
                        <a
                            className="flex items-center justify-center w-[145px] h-[50px] bg-black text-white rounded-[10px] hover:cursor-pointer"
                            onClick={(e: any) => handleLogin(e)}
                        >
                            {login ? 'Login' : 'Sign Up'}
                        </a>
                        <a
                            className="flex items-center justify-center w-[145px] h-[50px] border border-[#808080] rounded-[10px] hover:cursor-pointer bg-white"
                            onClick={handleForm}
                        >
                            {login ? 'Sign Up' : 'Login'}
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
