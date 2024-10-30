const Vantagens: React.FC = () => {
    return (
        <div className="p-5 bg-white text-left">
            <h1 className="mt-0 mb-2 text-xl font-semibold">
                Com o seguro para celular da Porto Seguro, você tem:
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0">
                <li className="text-lg font-normal mt-6">Planos que se encaixam às suas necessidades.</li>
                <li className="text-lg font-normal mt-6">Viaje com tranquilidade: sinistros ocorridos fora do Brasil estão cobertos.</li>
                <li className="text-lg font-normal mt-6">Conte com benefícios e descontos em nossos parceiros.</li>
                <li className="text-lg font-normal mt-6">Cobertura por até 24 meses a partir da compra do celular.</li>
                <li className="text-lg font-normal mt-6">Pague em 12x sem juros. Cancele quando quiser, sem multa.</li>
                <li className="text-lg font-normal mt-6">Compartilhe sua localização e ganhe desconto na franquia.</li>
            </ul>
        </div>
    );
};

export default Vantagens;
