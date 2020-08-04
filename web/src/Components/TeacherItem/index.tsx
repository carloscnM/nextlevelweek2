import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { Item } from './styles';

//schoolSubject - Máteria escolar;

interface PropsTeacherItem{
    
}

const TeacherItem : React.FC<PropsTeacherItem> = (props) => {


    return (
        <Item>
            <header>
                <img 
                    src="https://avatars3.githubusercontent.com/u/32484259?s=460&u=653f0364d24e0177964dab81fc104a34f70127b3&v=4" 
                    alt="Avatar"
                />
                <div>
                    <strong>Carlos Mario</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Um texto qualquer, depois será carregado do back.
                <br/> <br/>
                Um outro texto qualquer, que depois também será carregado do backEnd da aplicação que estamos usando.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </Item>
    )
}

export default TeacherItem;