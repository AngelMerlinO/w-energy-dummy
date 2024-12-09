import React from 'react';
// import './Welcome.css'; // Import your external CSS file

function Welcome() {
    return (
        <div className="h-screen w-screen flex flex-col items-center bg-black text-white">
            {/* Row 1 */}
            <div className="flex-1 p-6 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Bienvenido a W Energy</h1>
            </div>

            {/* Row 2 */}
            <div className="flex-1 bg-black p-6 flex flex-col justify-center items-center">
                <h3 className="text-2xl">Fácil</h3>
                <p className="text-center mt-2">Fácil de usar, no importa tu edad.</p>
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Icon 1"
                    className="w-16 h-16 mt-2"
                />
            </div>

            {/* Row 3 */}
            <div className="flex-1 bg-black p-6 flex flex-col justify-center items-center">
                <h3 className="text-2xl">Seguro</h3>
                <p className="text-center mt-2">Te garantizamos la seguridad de tu familia en nuestros servidores.</p>
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Icon 2"
                    className="w-16 h-16 mt-2"
                />
            </div>

            {/* Row 4 */}
            <div className="flex-1 bg-black p-6 flex flex-col justify-center items-center">
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Icon 3"
                    className="w-16 h-16 mt-2"
                />
                <h3 className="text-2xl">Automatización</h3>
                <p className="text-center mt-2">Tu casa automatizada en segundos.</p>

            </div>
        </div>
    );
}

export default Welcome;
