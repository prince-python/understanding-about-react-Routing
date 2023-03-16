import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Admin from './Admin';
const About = () => {
  let loc=useLocation();
  let p=useParams();
  let navigate=useNavigate();
  return (
    <>
    <h1>About Component is running {p.name}</h1>
    <h2>path :- {loc.pathname}</h2>
    {loc.pathname==="/about/ppoint"?<button onClick={()=>{
      navigate("/admin");
    }}>click me</button>:null}
    </>
  )
}
export default About