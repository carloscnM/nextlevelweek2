import styled from 'styled-components'


export const TextareaWrapper = styled.div`
    position: relative;
    

    label{
        font-size: 1.4rem;
    }

    textarea{
        width: 100%;
        height: 16rem;
        min-height: 8rem;
        margin-top: 0rem;
        border-radius: 0.8rem;
        background-color: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 1.2rem 1.6rem;
        font-size: 1.6rem;
        resize: vertical;

    }

    &:focus-within::after{
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background-color: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 8px;
    }
` 