import styled from "styled-components";
import CertificadoLogicaProgramacao from "../../assets/imgs/logica-programacao-js.png"

export const Certifications = () => {
    return(
        <CertificationsSection>

            <Subtitle>Minhas Certificações</Subtitle>

            <Message>Confira os meus principais certificados, <br/> Essenciasi para o meu desenvolvimento!</Message>

            <CertificatesList>
                <li>
                    <Certificate>
                        <h3>julho, 2024</h3>

                        <img src={CertificadoLogicaProgramacao} alt="" />

                        <p>Lógica  de Programação</p>

                        <p>Lógica de Programação: 6 horas. Ensinando como utilizar métodos, laços de repetição, condicionais, como estruturar o código, como usar funções e mais.</p>
                    </Certificate>
                </li>
                <li>
                    <Certificate>
                        <h3>julho, 2024</h3>

                        <img src={CertificadoLogicaProgramacao} alt="" />

                        <p>Lógica  de Programação</p>

                        <p>Lógica de Programação: 6 horas. Ensinando como utilizar métodos, laços de repetição, condicionais, como estruturar o código, como usar funções e mais.</p>
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
    gap: 20px;
    padding: 30px 0;
`

const Certificate = styled.div`
    width: 250px;
    background-color: grey;
    border: 2px solid #af46;
`