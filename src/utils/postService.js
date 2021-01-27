import tokenService from './tokenService';

const BASE_URL = '/api/posts'

export function create(post){
  console.log(post, "<--- this is POSt")
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
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