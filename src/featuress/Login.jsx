import React from 'react';
import Form from '../form';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import  { useGetadduserMutation, useGetallusersQuery } from '../services/users';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
const provider = new GoogleAuthProvider();
function Login() {
    var[gh]=useGetadduserMutation();
    var{data}=useGetallusersQuery();
    var navigate=useNavigate();
    console.log(data)
    function abc() {
        alert("hi");
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            console.log(token);
            const emailExists = data.filter((userData) =>{ return(userData.useremail === user.email)});
      
            if (emailExists.length>0) {
              alert("This email is already in use. Please use a different email or login.");
              navigate(`vamsi/${emailExists[0].id}`)
            } if(emailExists.length===0) {
              var temp = {
                useremail: user.email,
                token: user.accessToken,
                image:user.photoURL,
              };
              gh(temp).then((res)=>{navigate(`/vamsi/${res.data.id}`)});
              console.log(temp);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
  return (
    <div className='App '>
        <table align='center'>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Username</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                      <input type="password" />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}><button onClick={abc}>Login</button>
                    </td>
                    <Outlet></Outlet>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
export default Login;