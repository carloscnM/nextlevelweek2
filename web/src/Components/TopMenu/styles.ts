import styled  from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);

    .top-bar{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-text-in-primary);
        padding: 1.6rem 0;

        >img{
            height: 1.6rem;
        }

        a {
            height: 3.2rem;
            transition: opacity 0.2s;
        }

        a:hover {
            opacity: 0.6;
        }
    }

    .header-content{
        width: 90%;
        margin: 0 auto;
        position: relative;
        margin: 1rem auto;

        strong{
            font-weight: 700;
            font-size: 3.6rem;
            line-height: 4.2rem;
            color: var(--color-title-in-primary);
        }

        p{
            max-width: 40rem;
            font-size: 1.6rem;
            line-height: 2rem;
            color: var(--color-text-in-primary);
            margin-top: 1rem;
            margin-bottom: 2rem;
        }
    }

    @media (min-width: 700px){
        &{
            height: 240px;

            .top-bar{
                max-width: 1100px;
            }
            
            .header-content{
                flex: 1;
                max-width: 740px;
                margin: 0 auto;
                padding-bottom: 48px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }

            .header-content strong{
                font-size: 3rem;
                max-width: 350px;    
            }
        }
    }

`;