import React from 'react'
import { Container, SearchForm, MainContent } from './styles';
import TopMenu from '../../Components/TopMenu';
import TeacherItem from '../../Components/TeacherItem';


function TeacherList() {
    return(
        <Container>
            <TopMenu titlePage="Estes são os proffys disponíveis">
                <SearchForm >
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time"/>
                    </div>
                </SearchForm>
            </TopMenu>

            <MainContent>
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
            </MainContent>
        </Container>
    )
}

export default TeacherList;