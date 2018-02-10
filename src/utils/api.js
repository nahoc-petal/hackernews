import API_URL from './config'

export default class Api {
  static headers() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET')
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = API_URL
    const url = `${host}${route}`
    const options = Object.assign(
      {
        method: verb,
      },
      params ? { body: JSON.stringify(params) } : null,
    )
    options.headers = Api.headers()

    return fetch(url, options).then((response) => {
      const json = response.json()
      if (response.ok) {
        return json
      }
      return json.then((err) => {
        throw err
      })
    })
  }
}
