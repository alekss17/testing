export const required = (value) => {
    if (!value) return 'Field is required';
    return undefined
}

export const MaxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght ) return `Max length is ${maxLenght} symbols`;
    return undefined
}

