import { Box, Select } from '@mantine/core';

const CustomSelect = ({ rightSection, marginTop, data, placeholder, label, leftSection, width, withCheckIcon, onChange, value, name, defaultValue }) => {

    return (
        <Box mt={marginTop}>
            <Select
                size='lg'
                name={name}
                withCheckIcon={withCheckIcon}
                w={width}
                checkIconPosition="left"
                leftSectionPointerEvents="none"
                leftSection={leftSection}
                rightSection={rightSection}
                rightSectionPointerEvents='none'
                placeholder={placeholder}
                data={data}
                label={label}
                onChange={(value) => onChange(name, value)}
                value={value}
                defaultValue={defaultValue}
            />
        </Box>
    );
}

export default CustomSelect