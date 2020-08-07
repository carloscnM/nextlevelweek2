import React, { useState, FormEvent } from 'react'
import { Container, SearchForm, MainContent } from './styles';
import TopMenu from '../../Components/TopMenu';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

import findIcon from '../../assets/images/icons/findIcon.svg';
import api from '../../services/api';
import { Loader } from '../../Components/Loader';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [loaderActive, setLoaderActive] = useState<boolean>(false);
    const [notification, setNotification] = useState<boolean>(false);

    const [subject, setSubject] = useState('-1');
    const [weekday, setWeekday] = useState('-1');
    const [time, setTime] = useState('');


    async function handlerSubmitSearchTeachers(event: FormEvent)
    {
        event.preventDefault();
        setLoaderActive(true);

        const response = await api.get('lessons', {
            params: { 
                subject,
                weekday,
                time
            }
        });
        if(response.data.length === 0){
            setNotification(true);
        }  
        setTeachers(response.data);
        setLoaderActive(false);
    }

    return(
        <Container>
            <TopMenu titlePage="Estes são os proffys disponíveis">
                <SearchForm onSubmit={handlerSubmitSearchTeachers}>
                    <Select 
                        required 
                        label="Matéria"
                        name="subject"
                        value={subject}
                        onChange={ e => setSubject(e.target.value)}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciência', label: 'Ciência'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Matemática', label: 'Matemática'},
                        ]}
                     />
                     <Select
                        required  
                        label="Dia da Semana"
                        name="weekday"
                        value={weekday}
                        onChange={e => setWeekday(e.target.value)}
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda'},
                            {value: '2', label: 'Terça'},
                            {value: '3', label: 'Quarta'},
                            {value: '4', label: 'Quinta'},
                            {value: '5', label: 'Sexta'},
                            {value: '6', label: 'Sábado'},
                        ]}
                     />
                    <Input
                        required 
                        label="Hora" 
                        name="time" 
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit">
                        <img src={findIcon} alt="Buscar"/>
                    </button>
                </SearchForm>
            </TopMenu>

            <MainContent>
                {teachers.length === 0 && loaderActive && (<Loader />)}
                {teachers.length === 0 && notification && (<h2>Não foram encontrados professores para o filtro selecionado!</h2> )}
                           

                {teachers.map((teacher, indice)=> {
                    return <TeacherItem key={indice} teacher={teacher}/>
                })}


            </MainContent>
        </Container>
    )
}

export default TeacherList;