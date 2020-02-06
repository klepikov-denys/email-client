 export const emailVal = value =>(
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
 )

export const required = value =>(
    value ? undefined : 'Required !'
)


export const alphaNumeric = value =>(
    value && /[^a-zA-Z0-9]/i.test(value)
    ? 'Alphanumeric only!'
    : undefined
)