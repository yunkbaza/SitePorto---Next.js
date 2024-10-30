type MembroTimeType = {
    name: string;
    rm: string;
    imgSrc: string;
    linkedin: string;
    github: string;
    email: string;
};

const MembroTime: MembroTimeType[] = [
    {
        name: 'Allan Gabriel Baeza Amirati',
        rm: 'RM556771 - 1TDSPF',
        imgSrc: '/img/foto_allan.jpeg',
        linkedin: 'https://www.linkedin.com/in/allan-gabriel-baeza-a281b1233/',
        github: 'https://github.com/yunkbaza',
        email: 'mailto:rm556771@fiap.com.br',
    },
    {
        name: 'Breno Gustavo dos Santos',
        rm: 'RM557509 - 1TDSPF',
        imgSrc: '/img/foto_breno.png',
        linkedin: 'https://www.linkedin.com/in/brenogustavo/',
        github: 'https://github.com/gitbreno',
        email: 'mailto:rm557509@fiap.com.br',
    },
    {
        name: 'Lívia de Oliveira Lopes',
        rm: 'RM556281 - 1TDSPR',
        imgSrc: '/img/foto_livia.png',
        linkedin: 'https://www.linkedin.com/in/livia-lopes-808a01295',
        github: 'https://github.com/livialopes55',
        email: 'mailto:rm556281@fiap.com.br',
    },
];

const Time: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <ul className="flex flex-wrap justify-center list-none p-0">
                {MembroTime.map((member, index) => (
                    <li key={index} className="p-16">
                        <img
                            src={member.imgSrc}
                            alt={`Foto de ${member.name}`}
                            className="w-48 mx-9 mb-8 border-4 border-black rounded-full"
                        />
                        <section className="relative mt-[-70px] border-4 border-black rounded-2xl bg-blue-500 text-center p-5">
                            <h3 className="m-0 text-xl font-medium text-white">{member.name}</h3>
                            <h3 className="m-0 text-xl font-medium text-white">{member.rm}</h3>
                            <div className="flex justify-center gap-9 mt-3">
                                <a href={member.linkedin} className="text-white text-3xl">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href={member.github} className="text-white text-3xl">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href={member.email} className="text-white text-3xl">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Time;
