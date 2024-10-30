import Time from './Time';

function Conteudo() {
    return (
        <div className="w-full p-5 bg-blue-500 text-white text-left">
            <h1 className="text-[55px] font-semibold mb-5">THE TEAM</h1>
            <p className="text-[32px] font-normal m-0">
                O grupo do Challenge é composto por estudantes com foco na criatividade, determinação e proatividade
                para implementação de tecnologias front-end inovadoras e melhores práticas de design, nesse desafio tão
                importante que a Porto nos encaminhou.
            </p>
            <Time />
        </div>
    );
}

export default Conteudo;
