export const emailRegex = /\S+@\S+\.\S+/

export const validateEmail = (email: string): string =>
  emailRegex.test(email) ? '' : 'Введите корректную почту'

export const validatePassword = (password: string): string =>
  password.length >= 6 ? '' : 'Минимум 6 символов'
