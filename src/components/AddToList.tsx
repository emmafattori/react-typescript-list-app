import React from 'react';
import { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
    people: Props["people"], 
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: '', 
        age: '', 
        img: '', 
        note: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const handleClick = ():void => {
        if(!input.name || !input.age ||!input.img){
            return
        } 
        setPeople([
            ...people, 
            {
                name: input.name, 
                age: parseInt(input.age), 
                url: input.img, 
                note: input.note
            }
        ])
    }

    return (
        <div className="AddToList">
            <input className="AddToList-input" type="text" name="name" placeholder='Name' id="" value={input.name} onChange={handleChange}/>

            <input className="AddToList-input" type="text" name="age" placeholder='Age' id="" value={input.age} onChange={handleChange}/>

            <input className="AddToList-input" type="text" name="img" placeholder='Image URL' id="" value={input.img} onChange={handleChange}/>

            <textarea className="AddToList-input" name="note" placeholder='Notes' id="" value={input.note} onChange={handleChange}/>

            <button
            className='AddToList-btn'
            onClick={handleClick}
            >
                Add to List
            </button>


        </div>
    )
}

export default AddToList;