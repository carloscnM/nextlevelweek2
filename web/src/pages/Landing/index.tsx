import React from 'react'
import {Link} from 'react-router-dom'

import LogoSvg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { Container, LogoContainer, ButtonsContainer, TotalConnections, LandingPage, HeroImage } from './styles'
import { Button } from '../../Components/Button'


function Landing(){
    return(
        <Container>
            <LandingPage>
                <LogoContainer>
                    <img src={LogoSvg} alt="Logo Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </LogoContainer>

                <HeroImage 
                    src={landingImg} 
                    alt="plataforma de estudos online"
                    className="hero-image" 
                />

                <ButtonsContainer>
                    <Button 
                        as={Link}
                        to="/study"
                        backgroundColor="var(--color-primary-lighter)"
                    >
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar        
                    </Button>

                    <Button 
                        as={Link}
                        to="/give-classes"
                        backgroundColor="var(--color-secondary)" 
                    >
                        <img src={giveClassesIcon} alt="Dar aula"/>
                        Dar aula        
                    </Button>
                </ButtonsContainer>

                <TotalConnections>
                    Total de 200 conexão já realizadas.
                    <img 
                        src={purpleHeartIcon} 
                        alt="Coração Roxo" 
                    />
                </TotalConnections>
            </LandingPage>
        </Container>
    )
} 

export default Landing