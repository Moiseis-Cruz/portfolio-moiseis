import styled from 'styled-components';
import { About } from '../../components/About';
import { Certifications } from '../../components/Certifications';
import { Hero } from '../../components/Hero';
import { MyProjects } from '../../components/MyProjects';

const MainContainer = () => {
    return(
        <Main>
            <Hero />
            <About />
            <Certifications />
            <MyProjects />
        </Main>
    )
};

const Main = styled.main`
    @media (max-width: 1024px) {
        padding-inline: 25px;
    }
    @media (max-width: 426px) {
        padding-inline: 10px;
    }
`

export default MainContainer;
