export const required = value =>(
    value ? undefined : 'Required !'
)

export const emailValid = value =>(
    value && !/^[A-Z0-9.$+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
)