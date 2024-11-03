import Link from 'next/link';

function Botao() {
    return (
        <div className="flex justify-center p-2">
            <li className="w-[150px] h-[32px] border border-blue-800 rounded-md cursor-pointer flex items-center justify-center list-none">
                <Link href="/login" className="font-bold text-[16px] text-blue-800 no-underline">
                    Área do Cliente
                </Link>
            </li>
        </div>
    );
}

export default Botao;
