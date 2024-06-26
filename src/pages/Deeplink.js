import React from 'react'
import { useParams } from 'react-router-dom';
import Error from './Error';

export default function Deeplink() {
  let {source, id, name, description } = useParams();
  
  var myHeaders = new Headers();
        myHeaders.append("Authorization", "f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34");
    
  var formdata = new FormData();
    formdata.append("bot_id", source);
    formdata.append("customer_id", id);
    formdata.append("description", description);
    formdata.append("customer_name", name);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
    
    
  if(description === 'Registrasi-Paket-Jitu-1P' || 'Registrasi-Paket-Jitu-2P' || 'Registrasi-Paket-Jitu-3P' || "Registrasi-Paket-Gamer" || "Registrasi-Paket-One-Dynamic" || "Registrasi-Paket-One-Complete" || "Registrasi-Paket-Rumah-Ibadah-1P" || "Registrasi-Paket-Rumah-Ibadah-2P"){
    fetch("https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if(result.message === 'Request Successfully'){ 
        if(result.data[0] === 'Whatsapp'){
            //console.log('Web')
            if(result.data[2] === 'Registrasi-Paket-Jitu-1P')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/singleplay";
            }
            else if(result.data[2] === 'Registrasi-Paket-Jitu-2P')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/dualplay";
            }
            else if(result.data[2] === 'Registrasi-Paket-Jitu-3P')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/tripleplay";
            }
            else if(result.data[2] === 'Registrasi-Paket-Gamer')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/indihome-gamer";
            }
            else if(result.data[2] === 'Registrasi-Paket-Netflix')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/indihome-netflix";
            }
            else if(result.data[2] === 'Registrasi-Paket-One-Dynamic')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/dynamic";
            }
            else if(result.data[2] === 'Registrasi-Paket-One-Complete')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/complete";
            }
            else if(result.data[2] === 'Registrasi-Paket-Rumah-Ibadah-1P')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/rumah-ibadah-singleplay";
            }
            else if(result.data[2] === 'Registrasi-Paket-Rumah-Ibadah-2P')
            {
                window.location.href = "https://indihome.co.id/landingpage/indihomecare/rumah-ibadah-dualplay";
            }
        }
        else if(result.data[0] === 'Olive-App')
        {
            //console.log('Wifiid')
           if(result.data[2] === 'Registrasi-WMSLiteSilver')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
            else if(result.data[2] === 'Registrasi-WMSLiteGold')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
            else if(result.data[2] === 'Registrasi-WMSLitePlatinum')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
            
        }
        else if(result.data[0] === 'Olive-Web')
          if(result.data[2] === 'Registrasi-WMSLiteSilver')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
            else if(result.data[2] === 'Registrasi-WMSLiteGold')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
            else if(result.data[2] === 'Registrasi-WMSLitePlatinum')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
            else if(result.data[2] === 'Registrasi-WMSGamer20Mbps')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }
            else if(result.data[2] === 'Registrasi-WMSGamer40Mbps')
            {
                window.location.href = "https://wifi.id/pasang-layanan";
            }        
            
      }
      else
      {
        <Error />
      }
    })
    .catch(error => console.log('error', error));
  }
  

  return (
    <div>
    </div>
  )
}
