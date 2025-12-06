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
        'red': ['#fff0f0', '#ffdddd', '#ffc1c1', '#ff9595', '#ff5959', '#ff2626', '#fc0606', '#e70000', '#af0505', '#900c0c'],
        'orange': ['#fff9ed', '#fff1d5', '#fedeaa', '#fdc674', '#fba23c', '#f9830f', '#ea6b0c', '#c2510c', '#9a4012', '#7c3612'],
        'black': ['#f6f6f6', '#424242', '#d1d1d1', '#2e2e2e', '#888888', '#c9c9c9', '#5d5d5d', '#242424', '#DEE2E6', '#212121'],
        'green': ['#e0f2e0', '#c1e3c1', '#a1d4a1', '#81c581', '#61b661', '#41a741', '#219821', '#008900', '#006a00', '#004b00'],
        'purple': ["#e6e6fa", "#d8bfd8", "#dda0dd", "#da70d6", "#ba55d3", "#9370db", "#9932cc", "#8a2be2", "#6a0dad", "#800080"],
        'blue': ["#f0f8ff", "#e6f0fa", "#add8e6", "#87cefa", "#4682b4", "#4169e1", "#0000ff", "#0000cd", "#00008b", "#000080"]
    },
    radius: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
});
