import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../../assets/styles/Log.css"

import UserContext from '../../contexts/UserContext';
import DevicesContext from '../../contexts/DevicesContext';

function Log() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { User, setUser } = useContext(UserContext);  
    const { Devices, setDevices } = useContext(DevicesContext);  

    const navigate = useNavigate();
    const handlerRegis = () => {
        // e.PreventDefault();
        
        navigate('/Register');

    }
    const handleLogin = () => {
        const URL = `https://apiwenergy.parachico.dev:3000/users/${email}/${password}`;

        fetch(URL)
            .then((response) => {
                
                return response.json();
            })
            .then((data) => {
                if (data && data.status === "success" && data.data) {
                    const userData = data.data;
                    setUser((prevUser) => ({
                        ...prevUser,
                        User: userData,
                    }));
                    navigate('/Main');

                } else {
                    console.error("Respuesta del servidor no válida:", data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log("Login response: ", password, " and ", email);
    };
   

    return (
        <div className="bg-[--background] h-screen w-screen flex items-center">
            <div className="h-max w-full mx-auto flex flex-col items-center">
                <div className="log-animation bg-[--black] w-full sm:w-5/6 md:w-1/2 lg:w-1/4 rounded-xl shadow-xl p-10 flex flex-col gap-4 text-sm">
                    <div className="items-center  text-[--Aureolin]">
                        {/* <img
                            className="h-[40px] w-[47px] mx-auto mb-5"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        /> */}
                        <div className='h-[40px] w-[47px] mx-auto mb-5'>

                            <span className="material-symbols-outlined  ">
                                bolt
                            </span>
                        </div>
                        <h1 className="text-xl font-bold text-center pb-10 text-[--white]">Inicio de sesión</h1>
                        <div className="bg-[--white] h-px w-full mb-4"></div>
                        <label className="text-[--white] font-bold inline-block pb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="bg-[#938989] border border-white focus:border-gray-400 focus:outline-none rounded-md w-full shadow-sm px-5 py-2 text-[--white] placeholder-gray-400"
                            type="email"
                            name="email"
                            placeholder="Example@WEnergy.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-[--white] font-bold inline-block pb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="bg-[#938989] border border-white focus:border-gray-400 focus:outline-none rounded-md w-full shadow-sm px-5 py-2 text-[--white] placeholder-gray-400"
                            type="password"
                            name="password"
                            placeholder="******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex"></div>
                    <div className="items-center text-center">
                        <button
                            className="bg-[--Spring-green] w-full hover:bg-[--Aureolin] text-white font-bold py-2 px-4 rounded-full"
                            onClick={handleLogin}
                        >
                            Iniciar Sesión
                        </button>
                        <p className="text-sm text-gray-500 mt-10">
                            ¿No tienes cuenta? 
                            <button onClick={handlerRegis}>
                            <a  className="text-[#4F46E5] font-bold">Regístrate aquí</a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Log;
