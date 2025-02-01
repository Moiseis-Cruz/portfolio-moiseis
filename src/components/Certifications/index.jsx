import styled from "styled-components"; 
import { certifications } from "../../mocks/Certifications.mock";

export const Certifications = () => {
    return(
        <CertificationsSection>

            <Subtitle>Minhas Certificações</Subtitle>

            <Message>Confira os meus principais certificados, <br/> Essenciasi para o meu desenvolvimento!</Message>

            <CertificatesList>

                    {
                        certifications.map((certification) => {
                            return(
                                <Certificate key={certification.titulo}>
                                    <CertificationDate>{certification.data}</CertificationDate>
                                    <img src={certification.imagem} alt={`Imagem do certificado de ${certification.titulo}`} />
                                    <CourseTitle>{certification.titulo}</CourseTitle>
                                    <Description>{certification.descricao}</Description>
                                </Certificate>
                            )
                        })
                    }

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
    justify-content: flex-start;
    margin: 60px auto 0;
    gap: 20px;
    padding: 30px 0;
    height: 480px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: -10px -10px 10px 10px black;
    max-width: 980px;
    @media (max-width: 768px) {
        max-width: 660px;
    }
    `

const Certificate = styled.div`
    min-width: 300px;
    max-width: 320px;
    border: 2px solid var(--secundary-color);
    height: 400px;
    border-radius: 8px 0 8px 0;
    text-align: center;
    padding: 10px;
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
    border: 1px solid var(--primary-color);
    margin-top: 5px;
    padding: 5px;
    text-align: left;
`