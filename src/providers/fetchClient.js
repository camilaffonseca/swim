import axios from 'axios'

const configs = {
  baseURL: 'https://twism-api-dev.subservers.nodo.cc',
}

const instance = axios.create(configs)

export default instance
