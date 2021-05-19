import axios from 'axios'
const url= 'http://challenge-react.alkemy.org'

export const logUserIn = (data) => {
    return axios({
        method: 'post',
        url: url,
        data: data
    }).then(response => response.data.token
    ).then(data => {
        localStorage.setItem('token', data)
        return 'ok'
    }).catch(err => err)
}