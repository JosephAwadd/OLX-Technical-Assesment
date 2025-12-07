import React from 'react'
import { NumberInput, PasswordInput, TextInput } from '@mantine/core'


const CustomTextField = ({ rightSection, marginTop, label, description, placeholder, size, radius, disabled, value, onChange, type, className, field, error, name, minNumber, maxNumber, onBlur, step, style, precision }) => {

    function renderInput(type) {
        switch (type) {
            case 'text':
                return <TextInput
                    mt={marginTop}
                    name={name}
                    disabled={disabled}
                    radius={radius}
                    {...field}
                    size={size}
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
            case 'password':
                return <PasswordInput
                    name={name}
                    disabled={disabled}
                    {...field}
                    radius={radius}
                    size={size}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={className}
                    error={error}
                    onBlur={onBlur}
                />;
            case 'number':
                return <NumberInput
                    mt={marginTop}
                    name={name}
                    disabled={disabled}
                    radius={radius}
                    {...field}
                    size={size}
                    label={label}
                    description={description}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={className}
                    error={error}
                    onBlur={onBlur}
                    min={minNumber}
                    max={maxNumber}
                    step={step}
                    precision={precision}
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