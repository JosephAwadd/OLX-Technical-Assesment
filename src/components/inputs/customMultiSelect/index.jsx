import { MultiSelect } from '@mantine/core'
import React from 'react'

const CustomMultiSelect = ({ disabled, minWidth, data, value, onChange, label, placeholder, hidePickedOptions, name, className, width, searchable, onOptionSubmit }) => {
    return (
        <MultiSelect
            className={className}
            data={data}
            value={value}
            onChange={onChange}
            label={label}
            placeholder={placeholder}
            name={name}
            size='lg'
        />
    )
}

export default CustomMultiSelect