import api from './api'

const sessionService = { }

sessionService.login = (email, password) => {
  return api.post('/users/sessions', { email, password }).then((response) => {
    return response.data
  })
}

sessionService.signUp = (user) => {
  return api.post('/users', { user }).then((response) => {
    return response.data
  })
}

export default sessionService
