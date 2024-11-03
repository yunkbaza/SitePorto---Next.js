import Link from 'next/link';

const CriarConta = () => {
    return (
        <div>
            <header className="flex justify-center p-2">
                <img src="/img/logo.png" alt="Logo PORTO" className="h-8 w-32" />
            </header>
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-lg max-w-md w-full">
                    <div className="text-blue-600 mb-5">
                        <Link href="/login" className="text-blue-600 no-underline">
                            <i className="fa-solid fa-arrow-left text-2xl"></i>
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold mb-5">Criar Conta</h1>
                    <p className="text-base mb-5 leading-relaxed">Preencha seus dados para criar uma conta.</p>
                    <input 
                        type="text" 
                        placeholder="CPF ou CNPJ" 
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="button" 
                        disabled
                        className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md flex items-center justify-center cursor-not-allowed"
                    >
                        Cadastrar 
                        <span className="ml-2 text-lg">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CriarConta;