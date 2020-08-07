import React, {TextareaHTMLAttributes} from 'react'
import { TextareaWrapper } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea : React.FC<TextareaProps> = ({label, name, ...rest}) => {
    return (
        <TextareaWrapper>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} name={name} {...rest}/>
        </TextareaWrapper>
    )
};

export default Textarea