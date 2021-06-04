import React from 'react'

export const required = (value) => {
    if (value)  return undefined
    return 'error message'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined
}


