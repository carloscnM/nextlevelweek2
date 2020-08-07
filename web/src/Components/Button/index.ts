import styled from 'styled-components';


interface PropsButton {
    color?: string;
    backgroundColor?: string;
    hoverColor?: string;
  };

  //${(props) => props.backgroundImage}

export const Button = styled.button<PropsButton>`
    width: 100%;
    border-radius: 0.8rem;
    padding: 1.4rem;
    margin-right: 1.6rem;
    font-weight: 700;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => ( props.color ? props.color : "var(--color-button-text)")};
    background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "none")};

    transition: background-color 0.2s;
    
    img{
        width: 4rem;
        margin-right: 2.4rem;
    }

    &:hover,
    &:focus {
        opacity: .5;
    }
`;