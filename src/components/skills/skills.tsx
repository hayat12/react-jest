import React, {useState, useEffect } from 'react';

function Skills() {
    const [isLogin, setIsLogin ] = useState(false);
    const skills = ["HTML", "JavaScript", "PHP"];

    useEffect(()=>{
        setTimeout(() => {
            setIsLogin(true)
        }, 1000);
    }, [])
  return (
    <div>
        <ul>
            {skills.map((o)=><li key={o}>{o}</li>)}
        </ul>
            {isLogin ? <button>Start learning</button>: <button onClick={()=>setIsLogin(true)}>Login</button>}
    </div>
  )
}

export default Skills