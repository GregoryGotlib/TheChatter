import axios from 'axios';
import setAuth from '../utilities/setAuth'


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
