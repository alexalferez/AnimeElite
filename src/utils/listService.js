import tokenService from './tokenService';

const BASE_URL = '/api/lists'

export function create(list){
    return fetch(BASE_URL, {
        mehtod: 'POST',
        body: list,
        headers: {
            'Authorization': 'Bearer' + tokenService.getToken()
        }
    }).then(res => res.json())

}

export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => res.json());
  }