import React from 'react';
import { IState as IProps } from '../App';


const List: React.FunctionComponent<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
           return (
            <li className="List">
            <div className="List-header">
                <img className="List-img" src={person.url} alt={person.name} />
                <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
            <button className="delete">X</button>
        </li>
           )
        })
    }
    return(
        <ul>
           {renderList()}
        </ul>
    )
}

export default List