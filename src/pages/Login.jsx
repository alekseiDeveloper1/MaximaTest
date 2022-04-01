import React, {useState} from 'react';
import Input from "../components/ui/Input";
import Btn from "../components/ui/Btn";
import Label from "../components/ui/Label";
import {Link} from "react-router-dom";
const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='container mt-50 flex-center-center'>
            <div className='col-4'>
                <Label prop={'Login:'}/>
                <Input prop={''} value={login} onChange={e => setLogin(e.target.value)}/>
                <Label prop={'Password:'}/>
                <Input prop={''} value={password} onChange={e => setPassword(e.target.value)}/>
                <Link to='/list'>
                    <Btn prop={{text:'Login', class: 'btn btn-login'}} />
                </Link>

            </div>
        </div>
    );
};

export default Login;