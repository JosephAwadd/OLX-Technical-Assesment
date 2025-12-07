import React from 'react'
import CustomSelect from '../../inputs/customSelect';
import CustomTextField from '../../inputs/customTextField';
import CustomMultiSelect from '../../inputs/customMultiSelect';

const PostAddAttributesFields = ({ field }) => {

    const inputMap = {
        enum: <CustomSelect
            data={field?.choices}
            name={field?.name}
            placeholder={field?.name}
            onChange={() => { }}
        />,
        float: <CustomTextField
            type="number"
            allowDecimal
            name={field?.name}
            placeholder={field?.name}
            onChange={() => { }}
        />,
        enum_multiple: <CustomMultiSelect
            name={field?.name}
            data={field?.choices}
            placeholder={field?.name}
            onChange={() => { }}
        />,
        string: <CustomTextField
            type="text"
            name={field?.name}
            placeholder={field?.name}
            onChange={() => { }}
        />,

    };

    function renderInput(field) {
        return inputMap[field?.valueType] ?? null;
    }

    return (
        <>
            {renderInput(field)}
        </>
    )
}

export default PostAddAttributesFields