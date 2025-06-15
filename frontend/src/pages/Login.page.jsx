import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        console.log('Signed in successfully');
        
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-screen items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-20 w-auto rounded-xl" src="/src/assets/bookify-cropped.png" alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Login in Community Fridge</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                    <div className="mt-2">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                        type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                    </div>
                    <div className="mt-2">
                    <input
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                        type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>

                <div>
                    <button
                        type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LogIn</button>
                </div>
                <div>
                    <button
                        onClick={() => navigate('/register')}
                        type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;