
import React from 'react'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { client } from '../client'
// import { REACT_APP_GOOGLE_API_TOKEN } from '../secrets'


const Login = () => {
  const navigate = useNavigate()
  const responseGoogle = (response) => {
     const userObject = jwt_decode(response.credential)
     localStorage.setItem('user', JSON.stringify(userObject) )

     const {name, picture , sub} = userObject

     const doc = {
      _id: sub,
      _type:'user',
      userName: name,
      image: picture
     }

     client.createIfNotExists(doc).then(()=> {
      navigate('/', {replace :true})
     })
  }
useEffect(()=> {
/*global google*/
// const token = REACT_APP_GOOGLE_API_TOKEN
// console.log(token, "goog")
// console.log(process.env.REACT_APP_SANITY_PROJECT_ID, 'process')

google.accounts.id.initialize({
  client_id:process.env.REACT_APP_GOOGLE_API_TOKEN,
  // client_id:"402757595764-689dojko84cr3pu1g3jo6th04aus43f9.apps.googleusercontent.com" ,
  callback: responseGoogle
});
google.accounts.id.renderButton(
  document.getElementById("signInDiv"),
  {theme: "outline", size:"large"}
);
},[])
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
    <div className='relative w-full h-full'>
      <video
        src = {shareVideo}
        type = "video/mp4"
        loop
        controls = {false}
        muted
        autoPlay
        className='w-full h-full  object-cover'
        />

       <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
        <div className='p-5'>
        <img src = {logo} width = "130px" alt="logo"/>
        </div>
      <div className='shadow-2xl'>
    <div id = 'signInDiv' className ="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"></div>

    
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login