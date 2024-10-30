function Footer() {
    return (
        <footer className="w-full bg-black text-white p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5 text-left">
                <ul className="list-none p-0 m-0">
                    <li>
                        <h3 className="mb-2">Links Rápidos</h3>
                    </li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/canal-de-ajuda/">Perguntas Frequentes</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/fale-conosco/contatos/telefones-e-sac">SAC e Telefones</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/fale-conosco/ouvidoria">Ouvidoria</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/fale-conosco/contatos/canal-de-denuncia">Canal de Denúncia</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/fale-conosco/contatos/chat">Chat Online</a></li>
                </ul>

                <ul className="list-none p-0 m-0">
                    <li>
                        <h3 className="mb-2">Sobre a Porto</h3>
                    </li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/institucional/a-porto-seguro">A Porto Seguro</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/institucional/instituto">Instituto Porto Seguro</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/institucional/responsabilidade-socioambiental">Responsabilidade Socioambiental</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/institucional/noticias-e-imprensa">Notícias e Imprensa</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://blog.portoseguro.com.br">Blog</a></li>
                </ul>

                <ul className="list-none p-0 m-0">
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro/empresas-do-grupo">Empresas do Grupo</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://ri.portoseguro.com.br">Parceiros e Acionistas</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/institucional/patrocinio">Patrocínio</a></li>
                    <li><a className="text-gray-400 hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/fale-conosco/trabalhe-conosco">Trabalhe Conosco</a></li>
                </ul>

                <div>
                    <img src="./img/logo_rodape.png" width="160" height="38" alt="Logo PORTO Rodapé" />
                    <h3 className="mt-5">Acompanhe a Porto nas redes sociais</h3>
                    <div className="flex justify-start gap-4 text-3xl mt-5">
                        <a className="text-white hover:text-gray-600 transition-colors" href="https://www.facebook.com/portoseguro/"><i className="fa-brands fa-facebook"></i></a>
                        <a className="text-white hover:text-gray-600 transition-colors" href="https://www.instagram.com/portoseguro/"><i className="fa-brands fa-instagram"></i></a>
                        <a className="text-white hover:text-gray-600 transition-colors" href="https://www.linkedin.com/company/porto/"><i className="fa-brands fa-linkedin"></i></a>
                        <a className="text-white hover:text-gray-600 transition-colors" href="https://www.youtube.com/portoseguro"><i className="fa-brands fa-youtube"></i></a>
                        <a className="text-white hover:text-gray-600 transition-colors" href="https://twitter.com/portoseguro/"><i className="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
            </div>

            <hr className="border-gray-700" />

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 py-1 border-t border-gray-700">
                <p className="m-0"><a className="text-white hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/privacidade">Privacidade</a></p>
                <p className="m-0"><a className="text-white hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/institucional/politica-de-seguranca-da-informacao">Segurança da Informação</a></p>
                <p className="m-0"><a className="text-white hover:text-gray-600 transition-colors" href="https://www.consumidor.gov.br/pages/principal/?1657894699051">PROCON</a></p>
                <p className="m-0"><a className="text-white hover:text-gray-600 transition-colors" href="#">Configurações De Cookie</a></p>
                <p className="m-0"><a className="text-white hover:text-gray-600 transition-colors" href="https://www.portoseguro.com.br/porto-em-um-clique">Porto Em um Clique</a></p>
            </div>
        </footer>
    );
}

export default Footer;
