import { useParams } from "react-router-dom";
import {signOut} from 'firebase/auth'
import React from "react";
import { useGetuseridQuery } from "../services/users";
import {useNavigate} from 'react-router-dom';
import { auth } from "../firebase";
import { useGetusercommentQuery } from "../services/users";
//import { Auth } from "firebase/auth";
import { useGetuserpostsQuery } from "../services/users";
function Nav(){
    const navigate = useNavigate();
    var {id}=useParams();
    console.log(id);
    var {isLoading,data}=useGetuseridQuery(id);
    console.log(data)
    var{isLoading:loading,data:post}=useGetuserpostsQuery();
    var{isLoading:load,data:comments}=useGetusercommentQuery();
    console.log(comments);
    function signout(){
      signOut(auth).then(()=>{
        
        navigate('/')
      })
    }
    return(
    <div class="d-flex align-items-start">

  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>
   {
    isLoading&&(<h1>...Loading</h1>)
   }
   {
    !isLoading&&(<img src={data.image} alt=""></img>)
    }
    
  </button>
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Posts</button>
    <button class="nav-link " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
    <button type="button" className="btn btn-secondary" onClick={signout}>Sign Out</button>
    
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
      {
        loading&&(<h1>....loading....</h1>)
      }
      {
        !loading&&(
          post.map((s)=>{
            return(
            <div><div class="shadow-none p-3 mb-5 bg-light rounded">TITLE::{s.title}
            <br></br>BODY::{s.body}
            {
              load&&(<h1>load</h1>)
            }
            {
              !load&&(<><h5>COMMENTS</h5>{
                comments.map((k)=>{
                   if(k.postId===s.id){
                    return(<div class="shadow-none p-3 mb-5 bg-light rounded">email::{k.email}
                    <br></br>{k.body}</div>)
                   }
                })
          }</>)
              }
            </div></div>
            )
          })
        )
      }
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
      <p>shdfkshdfkhsmlk  skjfsljfls</p>  
    </div>
    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
    <p>shdfkshdfkhsmlk  skjfsljfls</p>  
      
      </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
    <p>shdfkshdfkhsmlk  skjfsljfls</p>  

      </div>
  </div>
</div>)
}
export default Nav;