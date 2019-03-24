import axios from 'axios';
import setAuth from '../utilities/setAuth'


export const userReg = (data,history) => dispatch =>{
    axios.post('/api/users/register',data).then(res =>{
        history.push('/login');
      }).catch(error=>{
        dispatch({
            type:'ERRORS',
            payload:error.response.data
        })
      });
}

export const userLogout = () => dispatch =>{
    //Remove user token
    localStorage.removeItem('userToken');
    //Remover user auth
    setAuth(false);
    //Initialize user
    dispatch({
        type:'DECODED_USER',
        payload:{}
    });
}
