import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";


export const Footer = () => {
    return(
        <footer>
            <div>
                <h2>Logo</h2>

                <div>
                    <p>Se desejar conversar comigo, por favor não hesite e me envie uma mensagem nas redes sociais.</p>

                    <p>BeCode &#169; 2024. Alguns direitos reservados.</p>
                </div>

                <ul>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contatos</a></li>
                </ul>

                <div>
                    <p>me siga</p>

                    <ul>
                        <li><a href=""> <FaLinkedin /> </a></li>
                        <li><a href=""> <FaGithub /> </a></li>
                        <li><a href=""> <FaDiscord /> </a></li>
                        {/* <li><a href="">rede social</a></li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
};