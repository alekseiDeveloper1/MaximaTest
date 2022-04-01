import React, {useState} from 'react';
import Label from "../components/ui/Label";
import Input from "../components/ui/Input";
import Date from "../components/ui/Date";
import Select from "../components/ui/Select";
import Btn from "../components/ui/Btn";
import Textarea from "../components/ui/textarea";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const PopupPage = () => {
    const [prog, setProg] = useState('');
    const [around, setAround] = useState('');
    const [name, setName] = useState('');
    const [dates, setDates] = useState('');
    const [datef, setDatef] = useState('');
    const [about, setAbout] = useState('');
    const [paid, setPaid] = useState('');
    const [paidn, setPaidn] = useState('');
    const dispatch = useDispatch()

    const addCourse = () => {
        const data = {
            id: 8,
            name: name,
            teacher: 'Павлова Екатерина Дмитриевна',
            about: about,
            around: around,
            status: 'Завершенный',
        }
        dispatch({type:'ADD_COURSE', data})
    }
    return (
        <div className='container-popup mt-50 flex-center-center'>
            <div className='col-12 pt-50'>
                <div className='flex'>
                    <span className='title'>
                        Добавление курса
                    </span>
                    <Link to='/list'>
                        <Btn prop={{text:'x', class: 'close'}}/>
                    </Link>

                </div>
                <div className='col-9'>
                    <Label prop={'Информация о курсе'}></Label>
                    <Label prop={'Название курса'}/>
                    <Input prop={'Основы программирования'} value={prog} onChange={e => setProg(e.target.value)}/>
                </div>

                <div className='col-6'>
                    <Label prop={'Направления'}/>
                    <Select prop={'Выберите направление'} value={around} onChange={e => setAround(e.target.value)}/>
                </div>
                <div className='col-6'>
                    <Label prop={'Название курса'}/>
                    <Select prop={'Выберите направление'} value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='col-6'>
                    <Label prop={'Дата начала курса'}/>
                    <Date value={dates} onChange={e => setDates(e.target.value)}/>
                </div>
                <div className='col-6'>
                    <Label prop={'Дата окончания курса'}/>
                    <Date value={datef} onChange={e => setDatef(e.target.value)}/>
                </div>
                <div className='col-12'>
                    <Label prop={'Описание курса'}/>
                    <Textarea prop={'Напишите о чем курс'} value={about} onChange={e => setAbout(e.target.value)}/>
                </div>
                <div className='col-6'>
                    <Label prop={'Прием платежей'}/>
                    <Label prop={'Тип оплаты'}/>
                    <Select prop={'Выберите тип оплаты'} value={paid} onChange={e => setPaid(e.target.value)}/>
                </div>
                <div className='col-6'>
                    <Label prop={'Тип заработной платы'}/>
                    <Select prop={'Выберите тип оплаты'} value={paidn} onChange={e => setPaidn(e.target.value)}/>
                </div>
                <Btn prop={{text:'Добавить', class: 'btn btn-add'}} onClick={addCourse}/>
            </div>
        </div>

    );
};

export default PopupPage;