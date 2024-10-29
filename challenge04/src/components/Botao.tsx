import Link from 'next/link';

const Botao = () => {
    return (
    <div className="btn_login">
        <ul className="btn_bar">
          <li>
            <Link href="./links/area_cliente.html" className="font-bold text-[16px] text-[#0046c0] border border-[#0046c0] rounded px-3 py-2">Área do Cliente</Link>
          </li>
        </ul>
    </div>
  );
};

export default Botao;