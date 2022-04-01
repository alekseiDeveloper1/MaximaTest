import React from 'react';
import Btn from "../components/ui/Btn";
import Input from "../components/ui/Input";
import Table from "../components/Table";
import {Link} from "react-router-dom";

const ListPage = () => {
    return (
        <div className='container mt-50'>
            <div className='col-12'>
                <header>
                    <div className='title'>
                        Список курсов
                    </div>
                    <Link className='mt-20' to='/add'>
                        <Btn prop={{text:'Добавить курс', class: 'btn btn-add'}}/>
                    </Link>
                </header>
                <div className='col-3'>
                    <Input prop={'введите название курса'}/>
                </div>
                <Table/>
            </div>
        </div>

    );
};

export default ListPage;