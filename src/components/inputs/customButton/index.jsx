import { Button } from '@mantine/core';
import { forwardRef } from 'react';

const CustomButton = forwardRef(
    (
        {
            fontWeight,
            minWidth,
            width,
            height,
            children,
            fullWidth,
            className,
            variant,
            leftSection,
            rightSection,
            disabled,
            dataDisabled,
            size,
            type,
            color,
            radius,
            onClick,
            marginTop,
            padding,
            loading,
            marginRight,
            marginBottom,
            flex,
        },
        ref
    ) => {

        return <Button
            flex={flex}
            mt={marginTop}
            mr={marginRight}
            mb={marginBottom}
            w={width}
            miw={minWidth}
            h={height}
            loading={loading}
            fw={fontWeight}
            p={padding}
            onClick={onClick}
            radius={radius}
            color={color}
            type={type}
            data-disabled={dataDisabled}
            disabled={disabled}
            variant={variant}
            fullWidth={fullWidth}
            classNames={className}
            leftSection={leftSection}
            rightSection={rightSection}
            size={size}
            ref={ref}
        >
            {children}
        </Button>
    }
);

export default CustomButton;
