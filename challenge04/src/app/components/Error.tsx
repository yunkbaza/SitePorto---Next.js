const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Error 404</h1>
            <p className="text-lg text-gray-700 mb-8">
                A página que você está procurando não foi encontrada.
            </p>
            <a 
                href="/" 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
                Voltar para a Home
            </a>
        </div>
    );
}

export default Error;
