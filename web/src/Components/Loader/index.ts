import styled from 'styled-components';

export const Loader = styled.div`
    margin-top: 5%;
    margin-bottom: 0%;
    border: 16px solid var(--color-secondary); /* Light grey */
    border-top: 16px solid var(--color-secondary-dark); /* Blue */
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    animation: spin 2s linear infinite;
    margin-left: 40%;

    @keyframes spin {
        0% { transform: rotate(0deg); opacity: 0.4 }
        100% { transform: rotate(360deg); opacity: 1}
    }
`;