import React from 'react'
import { useParams } from 'react-router-dom';
import Error from './Error';

export default function Orbit() {
    let {source, id, description } = useParams();
  
  //console.log(source, id, description);
    var myHeaders = new Headers();
        myHeaders.append("Authorization", "f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34");
    
    var formdata = new FormData();
        formdata.append("bot_id", source);
        formdata.append("customer_id", id);
        formdata.append("description", description);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    
    //.then(response => response.text())
    //.then(result => console.log(result))
    
    fetch("https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(result.message === 'Request Successfully'){  
                window.location.href = "https://indihome.co.id/program/fmc/orbit/pemasangan-baru";
                //console.log(result);        
            }
            else
            {
                <Error />
            }
        }
    )
    .catch(error => console.log('error', error));

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
