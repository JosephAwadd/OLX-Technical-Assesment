import React from 'react'
import { NumberInput, PasswordInput, TextInput } from '@mantine/core'


const CustomTextField = ({ rightSection, marginTop, label, description, placeholder, radius, disabled, value, onChange, type, className, field, error, name, onBlur, style, allowDecimal }) => {

    function renderInput(type) {
        switch (type) {
            case 'text':
                return <TextInput
                    mt={marginTop}
                    name={name}
                    disabled={disabled}
                    radius={radius}
                    {...field}
                    size='lg'
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={className}
                    error={error}
                    onBlur={onBlur}
                    style={style}
                    rightSectionPointerEvents="all"
                    rightSectionWidth={50}
                    rightSection={rightSection}
                />;
            case 'number':
                return <NumberInput
                    mt={marginTop}
                    name={name}
                    disabled={disabled}
                    radius={radius}
                    {...field}
                    size='lg'
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={className}
                    error={error}
                    onBlur={onBlur}
                    allowDecimal={allowDecimal}
                />
            default:
                return <></>
        }
    }

    return (
        <>
            {renderInput(type)}
        </>
    )
}

export default CustomTextField