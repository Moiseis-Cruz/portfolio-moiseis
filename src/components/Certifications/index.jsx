import styled from "styled-components";

export const Certifications = () => {
    return(
        <CertificationsSection>

            <Subtitle>Minhas Certificações</Subtitle>

            <Message>Confira os meus principais certificados, <br/> Essenciasi para o meu desenvolvimento!</Message>

            <ul>
                <li>
                    <div>
                        <h3>julho, 2024</h3>

                        <p>Nome do Certificado</p>

                        <p>Descrição do curso concluido. Horas de aula e seu objetivo.</p>
                    </div>
                </li>
                <li>Certificado 2</li>
                <li>Certificado 3</li>
                <li>Certificado 4</li>
            </ul>

        </CertificationsSection>
    )
};

const CertificationsSection = styled.section`
    background-color: brown;
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