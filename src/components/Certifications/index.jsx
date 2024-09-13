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

                    <Certificate>
                        <CertificationDate>julho, 2024</CertificationDate>

                        <img src={CertificadoLogicaProgramacao} alt="Certificado Lógica de Programação" />

                        <CourseTitle>Lógica  de Programação</CourseTitle>

                        <Description>Lógica de Programação: 6 horas. Ensinando como utilizar métodos, laços de repetição, condicionais, como estruturar o código, como usar funções e mais.</Description>
                    </Certificate>

                    <Certificate>
                        <CertificationDate>julho, 2024</CertificationDate>

                        <img src={CertificadoChatGPT} alt="Certificado ChatGPT" />

                        <CourseTitle>Curso ChatGPT</CourseTitle>

                        <Description>ChatGPT: 8 horas. Ensina a como otimizar buscas para obter melhores resultados de mais qualidade.</Description>
                    </Certificate>

                    <Certificate>
                        <CertificationDate>julho, 2024</CertificationDate>

                        <img src={CertificationGitbub} alt="Certificado Git & GitHub" />

                        <CourseTitle>Curso Git & GitHub</CourseTitle>

                        <Description>Git & GitHub: 8 horas. Onde ensina os fundamentos de compartilhar e colaborando em projetos.</Description>
                    </Certificate>

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

const CertificatesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 60px;
    gap: 20px;
    padding: 30px 0;
    height: 480px;
`

const Certificate = styled.div`
    width: 300px;
    border: 2px solid #F8EDE3;
    height: 400px;
    border-radius: 8px 0 8px 0;
    text-align: center;
    padding: 10px;

    /* &:nth-child(even) {
        margin-top: 100px;
    } */
`

const CertificationDate = styled.h3`
    text-transform: uppercase;
    letter-spacing: 1px;
`

const CourseTitle = styled.h3`
    letter-spacing: 1px;
`

const Description = styled.p`
    width: 100%;
    height: 100px;
    overflow-y: scroll;
    border: 1px solid #F8EDE3;
    margin-top: 5px;
    padding: 5px;
    text-align: left;
`