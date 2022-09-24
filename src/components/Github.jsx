import React from "react";
import { useEffect, useState } from "react";
import Profile from "./Img/avatar2.png";
import Error from "./Img/error.jpg";
import axios from "axios";




const Github = () => {


const [val , setval] = useState("");
const [userInfo , setUserInfo] = useState("");
const [callApi , setCallApi] = useState(false)
const [error, setError] = useState(false);





useEffect(() => {
  axios
    .get(
      `https://api.github.com/users/${val ? val : "jehanzeb11"}`
    )
    .then((res) => {
      setUserInfo(res.data);
      setError(false);
    })
    .catch((err) => {
      console.log(err);
      setError(true);
    });
},[callApi]);




const handleForm = (e) => {
  e.preventDefault();
  console.log("inputValue", val);

  if (!val) {
    console.log("filed is empty");
    return;
  }

  setCallApi(!callApi);

};


    
  return (
    <React.Fragment>
    <section className='main d-flex align-items-center justify-content-center flex-column' style={{width:"100%"}}>
<div className='box' style={{width:"50%"}}>
<form onSubmit={handleForm}>

<input type="text" value={val}  onChange={(e)=>{
setval(e.target.value)
    }} placeholder="enter gitHub UserName" className="my-5 form-control text-center"/>
</form>
</div>
  





  {error === false ? (


    <section className='body-section text-center'>


<div className="image p-3">


<img src={userInfo ? userInfo.avatar_url : Profile}  style={{height: "40%", width:"60%"}} alt=""/>


</div>



<div className="content my-5">
  <ul> 
    <li style={{borderBottom : "1px solid black"}}><strong style={{color: "#004400"}}>Username :</strong>  {userInfo ? userInfo.name : "USER NAME"}</li>
    <li style={{borderBottom : "1px solid black"}}><strong  style={{color: "#004400"}}>Bio :</strong>  {userInfo ? userInfo.bio : "BIO"}</li>
    <li style={{borderBottom : "1px solid black"}}><strong style={{color: "#004400"}}>Followers :</strong>  {userInfo ? userInfo.followers : "FOLLOWERS"}</li>
    <li style={{borderBottom : "1px solid black"}}><strong style={{color: "#004400"}}>Following :</strong>  {userInfo ? userInfo.following : "FOLLOWING"}</li>
    <li style={{borderBottom : "1px solid black"}}> <strong style={{color: "#004400"}}>Public_Repos :</strong>  {userInfo ? userInfo.public_repos : "PUBLIC REPOS"}</li>
  </ul>
</div>


    </section>
  ):(
    <img src={Error} alt=""/>
  )
  
  }

</section>

    </React.Fragment>
  )
}

export default Github;