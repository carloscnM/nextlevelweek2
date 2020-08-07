import React, {InputHTMLAttributes} from 'react'
import { InputWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input : React.FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <InputWrapper>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} {...rest}/>
        </InputWrapper>
    )
};

export default Input