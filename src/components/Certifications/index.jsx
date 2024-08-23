import styled from "styled-components";
import CertificadoLogicaProgramacao from "../../assets/imgs/logica-programacao-js.png"
import CertificadoChatGPT from "../../assets/imgs/Curso-ChatGPT.png"
import CertificationGitbub from "../../assets/imgs/Curso-Git-e-GitHub.png"

export const Certifications = () => {
    return(
        <CertificationsSection>

            <Subtitle>Minhas Certificações</Subtitle>

            <Message>Confira os meus principais certificados, <br/> Essenciasi para o meu desenvolvimento!</Message>

            <CertificatesList>
                <li>
                    <Certificate>
                        <h3>julho, 2024</h3>

                        <img src={CertificadoLogicaProgramacao} alt="Certificado Lógica de Programação" />

                        <p>Lógica  de Programação</p>

                        <Description>Lógica de Programação: 6 horas. Ensinando como utilizar métodos, laços de repetição, condicionais, como estruturar o código, como usar funções e mais.</Description>
                    </Certificate>
                </li>

                <li>
                    <Certificate>
                        <h3>julho, 2024</h3>

                        <img src={CertificadoChatGPT} alt="Certificado ChatGPT" />

                        <p>Curso ChatGPT</p>

                        <Description>ChatGPT: 8 horas. Ensina a como otimizar buscas para obter melhores resultados de mais qualidade.</Description>
                    </Certificate>
                </li>

                <li>
                    <Certificate>
                        <h3>julho, 2024</h3>

                        <img src={CertificationGitbub} alt="Certificado Git & GitHub" />

                        <p>Curso Git & GitHub</p>

                        <Description>Git & GitHub: 8 horas. Onde ensina os fundamentos de compartilhar e colaborando em projetos.</Description>
                    </Certificate>
                </li>
            </CertificatesList>

        </CertificationsSection>
    )
};

const CertificationsSection = styled.section`
    padding: 50px 0;
    `

const Subtitle = styled.h2`
    text-align: center;
    font-size: 3rem;
`

const Message = styled.p`
    font-size: 1.2rem;
    text-align: center;
    margin-top: 15px;
`

const CertificatesList = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    gap: 20px;
    padding: 30px 0;
`

const Certificate = styled.div`
    width: 300px;
    background-color: grey;
    border: 2px solid #af46;
    height: 400px;
`

const Description = styled.p`
    width: 100%;
    height: 100px;
    overflow-y: scroll;
`