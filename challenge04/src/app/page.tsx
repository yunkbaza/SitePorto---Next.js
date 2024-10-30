import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Vantagens from './components/Vantagens';
import Footer from './components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Cabecalho />
            <Conteudo />
            <Vantagens />
            <Footer />
        </div>
    );
};

export default Home;

