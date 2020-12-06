

export const required = (value) => {
    return value ? undefined : 'field is required';
}

export const forNum = (value) => {
    return !isNaN(value) ? undefined : 'field is only for numbers';
}