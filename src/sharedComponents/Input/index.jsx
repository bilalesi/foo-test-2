import React, { useRef, useState } from 'react';
import cn from 'classnames';
import InputStyles from './style.module.scss';
import { IoIosClose } from "react-icons/io";
import { useFocus } from '../../hooks'
// interface IInput {
//     id?: string,
//     type: string
//     name: string,
//     placeholder: string,
//     label?: string,
//     tag?: string,
//     shadawed?: boolean,
//     borderLight?: boolean,
//     ariaAutocomplete?: string,
//     ariaHasPopUp?: boolean,
//     ariaExpanded?: boolean, 
//     Icon?: IconType
// }

const Input = ({ id, name, type, placeholder, label,
     tag, ariaAutocomplete, ariaExpanded, ariaHasPopUp, Icon }) => {
         const inputRef = useRef(null);
         const [data, setData] = useState('');
         const [inputFocused, setInputFocused] = useState(false)
         const handleDataChange = (ev) =>{
            setData(st => ev.target?.value);
         }
         const handleClearAction = (ev)  =>{
            setData(st  => '');
         }
         useFocus(inputRef, {
             onFucus: () =>{
                setInputFocused(st => true)
             },
             onFocusLeave:  () =>{
                setInputFocused(st => false)
             }
         })
    return (
        <div className={InputStyles.InputContainer}>
            <div className={cn(InputStyles.InputLayout, !label && InputStyles.labelNotExist)}>
                <label className={InputStyles.label} htmlFor={name}>{label}</label>
                <div className={cn(InputStyles[`input_form_${name}`], InputStyles.inputWrapper,
                     !Icon && InputStyles.leftIconExist, 
                    inputFocused && InputStyles.focused, )}
                    
                >
                    {
                        Icon && <div className={cn(InputStyles.icon, InputStyles.before)}>                        
                            <Icon color=''></Icon>  
                        </div>
                    }                        
                    <input {...{id, type, name, placeholder,}} 
                        aria-expanded={ariaExpanded} 
                        aria-haspopup={ariaHasPopUp}
                        aria-autoComplete={ariaAutocomplete}
                        onChange={handleDataChange}
                        value={data}
                        className={InputStyles.input}
                        ref={inputRef}
                    />
                    {/* {
                        data && <button className={cn(InputStyles.icon, InputStyles.after, InputStyles.actionIcon)} onClick={handleClearAction}>
                            <IoIosClose color=''></IoIosClose>
                        </button>
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Input;
