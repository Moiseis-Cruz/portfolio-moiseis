import BgMyProfile from "../../assets/imgs/meu-perfil.png"

export const About = () => {
    return(
        <section>
            <h2>Sobre.</h2>

            <div>
                <div>
                    <h3>Minhas ferramentas e habilidades</h3>

                    <p>Essas são as principais ferramentas e habilidades que eu trabalho</p>

                    <img src={BgMyProfile} alt="" />
                </div>

                <div>
                    <ul>
                        <li>React js</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Github</li>
                        <li>Git</li>
                    </ul>

                    <h3>| Quem sou eu</h3>

                    <p>Me chamo Moiseis Cruz, tenho 33 anos e minha paixão por programação começou na infância. Com três anos de experiência em desenvolvimento, me especializei em Front-end. Destaco-me pela habilidade única de integrar programação de design, contribuindo tanto para o desenvolvimento de códigos eficientes quanto para a criação de interfaces intuitivas e atraentes. Acredito firmemente que a combinação de estética e funcionalidade resulta em experiências oline verdadeiramente memoráveis.</p>

                    <h3>| Principal Tecnologia</h3>

                    <p>Eu sou apaixonado por JavaScript, minha ferramenta predileta, e busco diariamente novas formas de aprimorar minhas capacidades. Essa linguagem versátil me motiva a criar aplicações dinâmicas e interativas, proporcionando uma experiência envolvente para o usuários. Atualmente, atuo como freelancer, onde abraço a diversidade de projetos e enfrento desafio que constantemente estimulam meu crescimento profissional, incentivando minha busca contínua por aprendizado.</p>
                </div>
            </div>
        </section>
    )
};