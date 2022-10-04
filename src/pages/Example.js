import React from 'react'
import { useParams } from 'react-router-dom';
//import queryString from 'query-string'
import Error from './Error'

function Example() {

  let {source, id, name, description } = useParams();
  
  var myHeaders = new Headers();
        myHeaders.append("Authorization", "f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34");
    
  var formdata = new FormData();
    formdata.append("bot_id", source);
    formdata.append("customer_id", id);
    formdata.append("customer_name", name);
    formdata.append("description", description);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      if(result.message === 'Request Successfully'){  
        console.log(result)
        if(result.data[0] === 'Indita-Web'){
            //console.log('Web')
            if(result.data[2] === 'Registrasi-Orbit')
            {
                window.location.href = "https://indihome.co.id/program/fmc/orbit/pemasangan-baru";
            }
            else if(result.data[2] === 'Registrasi-Paket-Jurnalis')
            {
                window.location.href = "https://www.indihome.co.id/promo/paket-pelajar-pengajar-dan-jurnalis";
            }
            else if(result.data[2] === 'Registrasi-Addon-Smooa')
            {
                window.location.href = "https://smooa.indihome.co.id/#registration";
            }
        }
        else if(result.data[0] === 'Indita-FB')
        {
            //console.log('FB')
            if(result.data[2] === 'Registrasi-Orbit')
            {
                window.location.href = "https://indihome.co.id/program/fmc/orbit/pemasangan-baru";
            }
            else if(result.data[2] === 'Registrasi-Paket-Jurnalis')
            {
                window.location.href = "https://www.indihome.co.id/promo/paket-pelajar-pengajar-dan-jurnalis";
            }
            else if(result.data[2] === 'Registrasi-Addon-Smooa')
            {
                window.location.href = "https://smooa.indihome.co.id/#registration";
            }
        }
        else if(result.data[0] === 'Wifiid')
        {
            //console.log('Wifiid')
            if(result.data[2] === 'Registrasi-Wms')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
        }        
      }
      else
      {
       <Error />
      }
    })
    .catch(error => console.log('error', error));
    
    //.then(response => response.text())
    //.then(result => console.log(result))
  // if (description === "IndiHome Care" || "Indita Web IndiHome.co.id") {
  //   HitApiDeeplink()
  // }
  // else{
  //   HitApiDeeplink()
  // }


    // const getBerries = async () => {
    //   const berries = await fetch('https://pokeapi.co/api/v2/berry/')
    //   const value = await berries.json()
    //   console.log(value)
    // }

    // useEffect(() => {
    //   getQueryVariable()
    // })
  return (
    <div>
      <p>Channel : {source}</p>
      <p>Id customer : {id}</p>
      <p>Name customer : {name}</p>
      <p>Description : {description}</p>
    </div>
    
  )
}

export default Example
