import axios from 'axios';
import React, { useState, useEffect, history }from 'react'
import { useParams } from 'react-router-dom';

export default function BotInditaFB() {
  let {source, id, name, description } = useParams();
  const [posts, setPosts] = useState([]);
  // const [bot_id, setBot] = useState('');
  // const [body, setBody] = useState('');

  //let data = { source, id, name, description}
  fetch("https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink", {
    method: "POST",
    headers: {
      'Authorization': 'f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34'
    },
    body:JSON.stringify({
      bot_id: source,
          name: name,
          id: id,
    })
  }).then((resp => {
    //console.warn("resp", resp);
    resp.json().then((result)=>{
      console.warn("result", result)
      //console.log(result.message)
      if(result.message == 'Request Successfully'){
        // navigate('https://indihome.co.id/landingpage/registrasi-indihome/form-registrasi');
        // <Link to="https://indihome.co.id/landingpage/registrasi-indihome/form-registrasi" target="_blank" />
        window.open('https://indihome.co.id/landingpage/registrasi-indihome/form-registrasi');  
      }
    })
  }))

  return (
    <div>
    {/* //     http://localhost:3000/botFb/sourceIndita-FB&id22342&nameandri&descrption=registrasi-orbit 
    //     Source : {source}<br />
    //     Id Customer : {id}<br />
    //     Nama Customer : {name}<br />
    //     Description : {description} */}
    </div>
    
  )
}
