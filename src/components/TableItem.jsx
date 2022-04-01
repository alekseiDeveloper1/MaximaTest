import React from 'react';
import Btn from "./ui/Btn";
import {useDispatch} from "react-redux";

const TableItem = ({prop}) => {
    const dispatch = useDispatch()
    const removeCourse = (id) => {
        dispatch({type: 'REMOVE_COURSE', id})
        }
    return (
        <>
            <td>{prop.id}</td>
            <td>{prop.name}</td>
            <td>{prop.teacher}</td>
            <td>{prop.about}</td>
            <td>{prop.around}</td>
            <td>{prop.status}</td>
            <td>
                <Btn prop={{text:'Удалить', class: 'btn btn-login'}} onClick={() => removeCourse(prop.id)}/>
            </td>
        </>
    );
};

export default TableItem;