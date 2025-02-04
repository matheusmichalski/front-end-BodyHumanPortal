export function validationError(error) {
  if (error.code === 'UnexpectedError') {
    throw new Error('Um erro inesperado foi encontrado, tente novamente mais tarde')
  } else {
    throw new Error(error.message)
  }
}
