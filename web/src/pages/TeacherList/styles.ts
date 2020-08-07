import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    @media (min-width: 700px){
        max-width: 100%;
    }
`;


export const SearchForm = styled.form`
    margin-top: 3.2rem;
   
    label{
        color: var(--color-text-in-primary);
    }

    .input-block{
        position: relative;
    }

    .input-block + .input-block {
        margin-top: 1.4rem;
    }

    .input-block label{
        font-size: 1.4rem;
    }

    .input-block input{
        width: 100%;
        height: 5.6rem;
        margin-top: 0rem;
        border-radius: 0.8rem;
        background-color: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline:0;
        padding: 0 1.6rem;
        font-size: 1.6rem;
        align-self: center;
        justify-self: center;
    }

    .input-block:focus-within::after{
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background-color: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }

    button {
        height: 5.6rem;
        width: 5.6rem;
        border-radius: 45%;
        outline: hidden;
        border: 0;
        text-decoration: none;
        float: right;
        cursor: point;
        padding: 0.4rem;
        margin-top: 1rem;
        transition: background 0.2s;
    }

    button:hover{
        background: var(--color-text-in-primary);
    }

    button img{
        height: 100%;
        width: 100%;
    }

    @media (min-width: 700px){
        &{
            display: grid;
            grid-template-columns: 2fr 2fr 2fr 1fr;
            column-gap: 16px;
            position: absolute;
            bottom: -30px;
            justify-content: center;

            .input-block + .input-block {
                margin-top: 0;
            }

            button{
                display: flex;
                align-self: center;
                justify-self: center;
                margin-top: 2rem;
            }

        }
    }
`;

export const MainContent = styled.main`
    margin: 3.2rem auto;
    width: 90%;


    h2 {
        margin-top: 2rem;
        font-weight: 700;
        font-size: 2rem;
        text-align: center;
        color: var(--color-text-notification)
    }

    @media (min-width: 700px){
        &{
            h2{
                max-width: 80%;
            }
            padding: 3.2rem 0;
            max-width: 740px;
            margin: 0 auto;
        }
    }
`;
