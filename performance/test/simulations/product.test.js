import { group } from 'k6';
import Login from '../request/login.request';
import data from '../data/usuarios.json'
import Product from '../request/product.request.js'

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 50 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(99) < 1000']
  }
}

export default function () {

  let login = new Login()
  let product = new Product()

  group('login and get token', () => {
    login.access(data.usuarioOk.user, data.usuarioOk.pass)
  })

  group('list products', () => {
    product.list(login.getToken())
  })

}