
import React from "react";
import { useGetusercommentQuery } from "../services/users";
import { useParams } from "react-router-dom";
function Comment(){
    var{isLoading:load,data:comments}=useGetusercommentQuery();
    console.log(comments); 
    var x=useParams();
    console.log(x.s)
    return(<div className="text">{
        load&&(<h1>load</h1>)
      }
      {
        !load&&(
          comments.map((k)=>{
             if(k.postId==x.s){
              return(<div className="card" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title">comment::{k.id}</h5>
                <p class="card-text">Email::{k.email}</p>
                <p class="card-text">body::{k.body}</p>
                 </div>
            </div>)
             }
          })
    )
        }
        </div>)
}
export default Comment
// import React from 'react'
// import { useGetcommentsbyIdQuery } from '../services/media'

// function Comments(props) {
//     const { id } = props
//     var { isLoading , data } = useGetcommentsbyIdQuery(id);
//     if(!isLoading){
//         console.log(data)
//     }
//   return (
//     <div className='p-3 pt-0'>
//         <div className=''>
//             <button className='btn mt-0'>
//                 <span className='bi bi-hand-thumbs-up'></span>&nbsp;
//                 <span>Like</span>
//             </button>
//             <button className="btn mt-0" type="button" data-bs-toggle="collapse" data-bs-target={#collapseExample${id}} aria-expanded="false" aria-controls="collapseExample">
//                 Comment
//             </button>
//         </div>
//         <hr/>
//         {
//             !isLoading &&
//             <div className="collapse mt-2" id={collapseExample${id}}>
//                 <div className="">
//                     {
//                         data.map((comment)=>{
//                             return (
//                                 <div className='bg-secondary-subtle p-3 pb-0 mb-2 rounded-4'>
//                                     <b>{comment.name}</b>
//                                     <p>{comment.body}</p>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         }
//     </div>
//   )
// }

// export default Comments