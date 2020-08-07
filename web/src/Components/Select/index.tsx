import React, {SelectHTMLAttributes} from 'react'
import { SelectWrapper } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select : React.FC<SelectProps> = ({label, name, options, ...rest}) => {
    return (
        <SelectWrapper>
            <label htmlFor={name}>{label}</label>
            <select value="-1" id={name} name={name} {...rest}>
                <option value="-1" disabled hidden>Selecione</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </SelectWrapper>
    )
};

export default Select