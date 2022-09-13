import React from 'react'
import { useParams } from 'react-router-dom';
import Error from './Error';

export default function Profile() {
  let {source, id, description } = useParams();
  // useEffect(() => {
  //   window.location.href = "https://google.com/contact";
  // }, []);
  //console.log(source, id, description);
  // let data = { 
  //   bot_id: source,
  //   customer_id: id,
  //   description:description
  // }
  //console.log(data);
  // fetch("https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink", {
  //   method: "POST",
  //   headers: {
  //     'Authorization': 'f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34'
  //   },
  //   body:JSON.stringify(data)
  // }).then((resp => {
  //   //console.warn("resp", resp);
  //   resp.json().then((result)=>{
  //     console.warn("result", result)
  //     //console.log(result.message)
  //     //console.log(body)
  //     if(result.message === 'Request Successfully'){  
  //         //window.location.href = "https://indihome.co.id/program/fmc/orbit/pemasangan-baru";
  //       //console.log(source, id, description);
        
  //     }else{
  //       <Error />
  //     }
  //   })
  // }))
  //console.log(source, id, description);
    // dari farid
    // var dataDeeplink = new FormData();
    // dataDeeplink.append(data);
   
    // const rawResponse = await fetch('https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink', {
    //     headers: { Authorization: f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34 },
    //     method: 'POST',
    //     body: data
    //   }).then((resp => {
    //        //console.warn("resp", resp);
    //       resp.json().then((result)=>{
    //          console.warn("result", result)
    //          //console.log(result.message)
    //          //console.log(body)
    //         if(result.message === 'Request Successfully'){  
    //     //         //window.location.href = "https://indihome.co.id/program/fmc/orbit/pemasangan-baru";
    //     //       //console.log(source, id, description);
              
    //         }else{
    //            <Error />
    //         }
    //       })
    //     }))
    //return await rawResponse.json();
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
               
      }else{
       <Error />
      }
    }
    )
    .catch(error => console.log('error', error));
    
      
  return (
    <div>
         {/* Source : {source}<br />
         Id Customer : {id}<br />
         Description : {description} */}
    </div>
  )
}
