import styled from 'styled-components'

//     width: 90vw;
//     max-width: 700px;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background: var(--color-primary);
`;

export const LandingPage = styled.main`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    @media(min-width: 1100px){
        max-width: 1100px;
        display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
            "logo hero hero"
            "buttons buttons total"
        ;
    }
    
`;


export const HeroImage = styled.img`
    height: 30%;
    align-self: center;

    @media(min-width: 1100px){
        grid-area: hero;
        height: 100%;
        width: 35rem;
        margin: 0;
        justify-self: end;
        align-self: center;
    }
`;

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;
    align-self: center;

    h2{
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;
        text-align: initial;
    }

    img {
        height: 10rem;
    }
    @media(min-width: 1100px){
        grid-area: logo;
        margin: 0;
        h2{
            font-size: 3.2rem;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    a:first-child{
        margin-right: 1.6rem;
    }

    @media(min-width: 1100px){
        max-width: 660px;
        grid-area: buttons;
        justify-content: flex-start;
        padding: 3rem 0;
    }
    
`;

export const TotalConnections = styled.span`
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-left: 0.8rem;
    }
    @media(min-width: 1100px){
        grid-area: total;
        justify-self: end;
        font-size: 1.2rem;
    }
`;
