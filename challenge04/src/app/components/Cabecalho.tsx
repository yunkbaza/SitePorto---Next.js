import Botao from './Botao';
import Image from 'next/image';
import Link from 'next/link';

function Cabecalho() {
    return (
        <header className="w-full">
            <div id="top" className="flex items-left justify-between px-5">
                <Image
                    src="/img/logo.png"
                    alt="Logo Porto"
                    width={143}
                    height={34}
                    className="mt-4 ml-5 mb-7"
                />
                <nav className="flex justify-left">
                    <ul className="flex list-none items-left mt-4">
                        <li>
                            <Link href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro" className="text-base font-normal text-gray-700 no-underline px-12 hover:text-blue-800">
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.portoseguro.com.br/canal-de-ajuda" className="text-base font-normal text-gray-700 no-underline px-12 hover:text-blue-800">
                                Ajuda
                            </Link>
                        </li>
                        <li>
                            <Link href="https://blog.portoseguro.com.br/" className="text-base font-normal text-gray-700 no-underline px-12 hover:text-blue-800">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.portoseguro.com.br/fale-conosco/contatos/encontre-um-corretor" className="text-base font-normal text-gray-700 no-underline px-12 hover:text-blue-800">
                                Encontre um Corretor
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Botao />
            </div>
            <nav className="flex justify-left">
                <ul className="flex justify-left list-none flex-wrap mb-2">
                    <li className="px-5">
                        <Link href="#" className="text-lg font-bold text-black no-underline hover:text-blue-800">
                            Seguros
                        </Link>
                    </li>
                    <li className="px-5">
                        <Link href="#" className="text-lg font-bold text-black no-underline hover:text-blue-800">
                            Serviços
                        </Link>
                    </li>
                    <li className="px-5">
                        <Link href="#" className="text-lg font-bold text-black no-underline hover:text-blue-800">
                            Bank
                        </Link>
                    </li>
                    <li className="px-5">
                        <Link href="#" className="text-lg font-bold text-black no-underline hover:text-blue-800">
                            Saúde
                        </Link>
                    </li>
                    <li className="px-5">
                        <Link href="#" className="text-lg font-bold text-black no-underline hover:text-blue-800">
                            Categorias
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecalho;
