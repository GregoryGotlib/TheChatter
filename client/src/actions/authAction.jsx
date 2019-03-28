import axios from 'axios';
import setAuth from '../utilities/setAuth'
import jwt_decode from 'jwt-decode'

export const userLogin = (data,history)=> dispatch =>{
  axios.post('/api/users/login',data).then(res=>{
      const auth_token = res.data.token;

      //Set token to local storage
      localStorage.setItem('userToken',auth_token);

      //Set token to auth
      setAuth(auth_token);

      //Decode token
      const decoded_token = jwt_decode(auth_token);

      //Set decoded user
      dispatch({
        type:'DECODED_USER',
        payload:decoded_token
      })
  }).catch(error=>{
      dispatch({
          type:'ERRORS',
          payload:error.response.data
      })
  })
}

export const userReg = (data,history) => dispatch =>{
  console.log(data)
    axios.post('/api/users/register',data).then(res =>{
      history.push('/login');
    }).catch(error=>{
      dispatch({
          type:'ERRORS',
          payload:error.response.data
      })
    });
};

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
