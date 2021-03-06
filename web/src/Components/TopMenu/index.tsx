import React from 'react'
import { Link } from 'react-router-dom';

import { Header } from './styles';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface Props {
    titlePage: string;
    description?: string;
}

const TopMenu: React.FC<Props> = ({titlePage,description,children}) => {
    return(
        <Header>
            <div className="top-bar">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Logo"/>
            </div>
            <div className="header-content">
                <strong>{titlePage}</strong>
                    {description && <p>{description}</p>}
                {children}
            </div>    

        </Header>
    )
}

export default TopMenu;