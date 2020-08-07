import React, {useState, FormEvent} from 'react'

import {useHistory} from 'react-router-dom';

import TopMenu from '../../Components/TopMenu';
import Input from '../../Components/Input';
import Textarea from '../../Components/Textarea';
import Select from '../../Components/Select';

import { Container, MainContent } from './styles';
import { Button } from '../../Components/Button';

import warningIcon from '../../assets/images/icons/warning.svg';
import okIcon from '../../assets/images/icons/icons8-ok.svg';

import { IScheduleItem, IUser, ILesson } from './interfaces';
import useForm from '../../hooks/useForm';
import api from '../../services/api';
import { Loader } from '../../Components/Loader';
import { setInterval } from 'timers';



function TeacherForm() {
    
    const scheduleItemDefault: IScheduleItem = {weekday: -1,from: '',to: ''}
    const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([scheduleItemDefault]);
    
    const userDefault: IUser = {name:'', avatar: '', whatsapp: '', bio: ''};
    const UserFormData = useForm<IUser>(userDefault);

    const lessonDefault: ILesson = {subject: '-1', price: 0.0};
    const lessonFormData = useForm<ILesson>(lessonDefault);

    const [successSubmit, setSuccessSubmit] = useState<boolean>(false);
    const [loaderActive, setLoaderActive] = useState<boolean>(false);

    const history = useHistory();

    function handlerAddNewScheduleItem(){
        setScheduleItems([...scheduleItems, scheduleItemDefault]);
    }

    

    function setScheduleItemValue(position: number, field: string, value:string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, indice) => {
            if(indice === position){
                return{
                    ...scheduleItem,
                    [field]: value
                }
            }
            return scheduleItem;
        });
        setScheduleItems(updateScheduleItems);
    }


    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function handlerSubmitCreateNewLesson(event: FormEvent){
        event.preventDefault();
        
        setLoaderActive(true);
        const data = {
            name: UserFormData.FormData.name,
            avatar: UserFormData.FormData.avatar,
            whatsapp: UserFormData.FormData.whatsapp,
            bio: UserFormData.FormData.bio,
            subject: lessonFormData.FormData.subject,
            Price: lessonFormData.FormData.price,
            schedule: scheduleItems
        }
        
        api.post('lessons',data)
            .then(async function(response) {
                
                if(response.status === 201){
                    setSuccessSubmit(true);
                    await sleep(1000);
                    setLoaderActive(false);
                    await sleep(1000);
                    history.push('/')
                }
            })
            .catch((err) => console.log(err.message));    
    }

    return(
        <Container>
            <TopMenu 
                titlePage="Que incrível que você que da aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição"
             />

            <MainContent>
                <form onSubmit={handlerSubmitCreateNewLesson}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input  label="Nome Completo" name="name"
                                value={UserFormData.FormData.name}
                                onChange={UserFormData.handleFormDataChange}
                        />
                        <Input  label="Link da sua foto" name="avatar" 
                            value={UserFormData.FormData.avatar}
                            onChange={UserFormData.handleFormDataChange}
                        />
                        <Input  label="WhatsApp" name="whatsapp" 
                            value={UserFormData.FormData.whatsapp}
                            onChange={UserFormData.handleFormDataChange}
                            />
                        <Textarea  label="Biográfia" name="bio" 
                            value={UserFormData.FormData.bio}
                            onChange={UserFormData.handleFormDataChange} 
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select  
                            label="Matéria"
                            name="subject"
                            value={lessonFormData.FormData.subject}
                            onChange={lessonFormData.handleFormDataChange}
                            options={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Ciência', label: 'Ciência'},
                                {value: 'Física', label: 'Física'},
                                {value: 'Matemática', label: 'Matemática'},
                            ]}
                        />

                        <Input label="Custo da sua hora por aula" name="price"
                            type="number"
                            value={lessonFormData.FormData.price}
                            onChange={lessonFormData.handleFormDataChange}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={handlerAddNewScheduleItem}>
                                + Novo Horário
                            </button>    
                        </legend>
                        {scheduleItems.map((scheduleItem, indice) => (
                            <div className="schedule-item" key={scheduleItem.weekday+indice}>
                                <Select
                                    value={scheduleItem.weekday}
                                    label="Dia da Semana"
                                    name="weekday"
                                    onChange={e => setScheduleItemValue(indice, 'weekday', e.target.value)}
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

                                <Input  value={scheduleItem.from} label="Das" name="from" type="time"
                                    onChange={e => setScheduleItemValue(indice, 'from', e.target.value)}
                                />
                                <Input  value={scheduleItem.to} label="Até" name="to" type="time"
                                    onChange={e => setScheduleItemValue(indice, 'to', e.target.value)}
                                />
                            </div>
                        ))}
                    </fieldset>
                        {loaderActive && (<Loader />)}                 
                    <footer>  
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br/>
                            Preencha todos os dados
                        </p>

                         {!successSubmit ? (
                            <Button type="submit" backgroundColor="var(--color-secondary)">
                                Cadastrar
                            </Button>  
                            ):
                            (
                                <p>
                                    <img src={okIcon} alt="Ok"/>
                                    Cadastro realizado!    
                                </p>
                            )
                        }           
                        
                    </footer>
                </form>
            </MainContent>

        </Container>
    )
}

export default TeacherForm;