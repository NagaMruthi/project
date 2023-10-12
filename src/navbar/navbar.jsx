import { Link,Outlet, useParams } from "react-router-dom";
import {signOut} from 'firebase/auth'
import React from "react";
import { useGetuseridQuery } from "../services/users";
import {useNavigate} from 'react-router-dom';
import { auth } from "../firebase";
//import { Auth } from "firebase/auth";
import { useGetuserpostsQuery } from "../services/users";
function Nav(){
    const navigate = useNavigate();
    var {id}=useParams();
    console.log(id);
    var {isLoading,data}=useGetuseridQuery(id);
    console.log(data)
    var{isLoading:loading,data:post}=useGetuserpostsQuery();
    
    function signout(){
      signOut(auth).then(()=>{
        
        navigate('/')
      })
    }
    // function Abc(k){
    //   alert("hi");
    //   navigate(`maruthi/${k}`);
      
    // }
    return(
      
    <div class="d-flex align-items-start ">

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
  <div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
      {
        loading&&(<h1>....loading....</h1>)
      }
      {
        !loading&&(
          // post.map((s)=>{
          //   return(
            <div  style={{alignItems:"center"}}>
            <div class="card" style={{width: "40rem", margin:"20px ",alignItems:"center"}}>
              <img src={"data:image/jpeg;base64,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"}alt=""class="rounded"></img><br></br>
              <div class="text-center"> TITLE::{post[0].title}
            <br></br>
            BODY::{post[0].body}</div>
            <hr></hr>
            <div>
            <i class="bi bi-balloon-heart kl"></i>
            <Link  to={`maruthi/${post[0].id}`}>comments</Link>
            </div>
            </div>
            
            {/* <span onClick={(()=>{Abc(s.id)})}>comment</span> */}
            <Outlet></Outlet>
            
            </div>
          
            )
      //     })
      //   )
      }
    </div>
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