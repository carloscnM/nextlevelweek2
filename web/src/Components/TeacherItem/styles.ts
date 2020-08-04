import styled from 'styled-components'


export const Item = styled.article`
    background-color: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 1rem;
    overflow: hidden;

    header{
        padding: 2.8rem 1.6rem;
        display: flex;
        align-items: center;
    }

    header img{
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
    }

    header div{
        margin-left: 2.4rem;

        strong{
            font-weight: 700;
            font-size: 2.0rem;
            display: block;
            color: var(--color-text-title);
        }

        span{
            font-size: 1.4rem;
            display: block;
            margin-top: 0.4rem;
        }
    }

    > p {
        padding: 0 2rem;
        font-size: 1.4rem;
        line-height: 2rem;
    }

    footer{
        padding: 1rem 1rem;
        background-color: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    footer p strong {
        color: var(--color-primary);
        font-size: 1.6rem;
        display: block;
    }

    footer button {
        width: 20rem;
        height: 5.6rem;
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font-weight: 700;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.2s;
        :hover{
            background-color: var(--color-secondary-dark);
        }
    }

    @media (min-width: 700px){
        &{
            header, footer{
                padding: 3rem;
            }

            footer p strong{
                display: initial;
                margin-left: 1.6rem;
            }

            footer button{
                width: 24.5rem;
                font-size: 1.6rem;
                justify-content: center;
            }

            footer button img{
                margin-right: 1.6rem;
            }
        }
    }
`; 