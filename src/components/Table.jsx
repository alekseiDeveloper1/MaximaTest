import React from 'react';
import {useSelector} from "react-redux";
import TableItem from "./TableItem";

const Table = () => {
    const row = useSelector(state => state.cards)
    return (
        <div className='table-container'>
            <table>
                <tbody>
                <tr className='table-header'>
                    <th>№</th>
                    <th>НАЗВАНИЕ КУРСА</th>
                    <th>ПРЕПОДАВАТЕЛЬ</th>
                    <th>УЧРЕЖДЕНИЕ</th>
                    <th>ТИП</th>
                    <th>СТАТУС</th>
                    <th>НАСТРОЙКИ</th>
                </tr>
                {row.map(item =>
                    <tr>
                    <TableItem
                        key={item.id}
                        prop={item}
                    />
                    </tr>
                )}
                <tr >
                    <td colspan='7' className='pagination'>
                        <span className='active'>1</span>
                        <span>2</span>
                        <span>3</span>
                    </td>

                </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Table;