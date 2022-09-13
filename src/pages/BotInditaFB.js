import React from 'react'
import { useParams } from 'react-router-dom';
import Error from './Error';

export default function BotInditaFB() {
  let {source, id, description } = useParams();
  

  //let data = { source, id, name, description}
  console.log(source, id, description);
  fetch("https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink", {
    method: "POST",
    headers: {
      'Authorization': 'f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34'
    },
    body:JSON.stringify({
      bot_id: source,
      customer_id: id,
      description:description
    })
  }).then((resp => {
    //console.warn("resp", resp);
    resp.json().then((result)=>{
      console.warn("result", result)
      //console.log(result.message)
      if(result.message === 'Request Successfully'){  
          window.location.href = "https://indihome.co.id/program/fmc/orbit/pemasangan-baru";
      }else{
        <Error />
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
