import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const MainContent = styled.main`
    background-color: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    fieldset{
        border: 0;
        padding: 0 2.4rem;
    }

    fieldset + fieldset{
        margin-top: 6.4rem;
    }

    fieldset legend {
        font-weight: 700; 
        font-size: 2.4rem;
        color: var(--color-text-title);
        margin-bottom: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);
    }

    fieldset legend button {
        background: none;
        border: 0;
        color: var(--color-primary);
        font-weight: 700;
        font-size: 1.6rem;
        cursor: pointer;
        transition: color 0.2s;
    }

    
    fieldset legend button:hover{
        color: var(--color-primary-darker);
    }

    fieldset .schedule-item + .schedule-item {
        margin-top: 2rem;
    }

    footer{
        padding: 4rem 2.4rem;
        background-color: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 6.4rem;
    }

    footer p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);
        margin-bottom: 2rem;
    }


    footer p img {
        margin-right: 2rem;
    }

    @media(min-width: 700px) {
        &{
            fieldset{
                padding: 0 6.4rem;
            }
            
            fieldset .schedule-item{
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                column-gap: 1.6rem;
            }

            footer{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 4rem 6.4rem;
            }

            footer button {
                width: 20rem;
                
            }            

        }
    }

`;