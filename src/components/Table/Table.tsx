import React from 'react';
import classes from './Table.module.css';
import upArrow from '../../assets/img/up.png';
import downArrow from '../../assets/img/down.png';

const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
};

const table = (props:any) => (
    <table className={classes.Users}>
        <thead>
            <tr>
                {props.headers.map((header: any) => (
                    <td onClick={(ev)=>props.orderChanged(header.name)} key={header.name}>
                        {header.name}
                        <div>
                            <img
                                className={classes.Image}
                                src={!header.order ? '' : (header.order ==='desc' ? upArrow: downArrow)}
                            />
                        </div>
                    </td>
                ))}
            </tr>
        </thead>
        <tbody>
            {props.users.map((user: any) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{getFormattedDate(new Date(user.lastActive))}</td>
                </tr>
            ))}
        </tbody>

    </table>
);

export default table;