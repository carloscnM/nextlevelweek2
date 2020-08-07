import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { Item } from './styles';

import {ITeachersLesson} from './interfaces';

//schoolSubject - Máteria escolar;

interface PropsTeacherItem{
    teacher: ITeachersLesson;
}

const TeacherItem : React.FC<PropsTeacherItem> = ({teacher}) => {


    return (
        <Item>
            <header>
                <img 
                    src={teacher.user.urlAvatar} 
                    alt="Avatar"
                />
                <div>
                    <strong>{teacher.user.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.user.bio}
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a href={`https://wa.me/55${teacher.user.whatsapp}`} target="_blank" type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </Item>
    )
}

export default TeacherItem;