import styled from 'styled-components'


export const InputWrapper = styled.div`
    position: relative;
    

    label{
        font-size: 1.4rem;
    }

    input{
        width: 100%;
        height: 5.6rem;
        margin-top: 0rem;
        border-radius: 0.8rem;
        background-color: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline:0;
        padding: 0 1.6rem;
        font-size: 1.6rem;

    }

    &:focus-within::after{
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background-color: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
` 