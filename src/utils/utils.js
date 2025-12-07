export const cutString = (str, leng) => {
    if (str.length > leng) {
        return str.substring(0, leng) + '...';
    } else {
        return str;
    }
}