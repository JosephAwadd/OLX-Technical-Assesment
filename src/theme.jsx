import { createTheme } from '@mantine/core';

export const theme = createTheme({
    fontSizes: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        f20: '20px',
        xllg: '30px',
        xl: '40px',
    },
    colors: {
        'black': ["#d0d2d3", "#f7f8f8", "#9e9e9e", "#616161", "#424242", "#212121", "#121212", "#0d0d0d", "#080808", "#000000"],
        'blue': ["#f0f8ff", "#d9f5ff", "#add8e6", "#5dcbf4", "#4682b4", "#4169e1", "#0000ff", "#0000cd", "#00008b", "#000080"],
        'yellow': ["#fffbea", "#fff3cd", "#ffe066", "#ffd43b", "#fcde68", "#fab005", "#f59f00", "#f08c00", "#e67700", "#d9480f"],
    },
    radius: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        lr: '0px 8px 8px 0px',
        rl: '8px 0px 0px 8px',
    },
});
