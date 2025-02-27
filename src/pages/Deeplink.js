import React from "react";
import { useParams } from "react-router-dom";

export default function Deeplink() {
  let { source, id, name, description, via } = useParams();

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "f505e3c220665754022a6ec8cca5f8a9554bc3e213bc6d8a2f2e714140271a34"
  );

  var formdata = new FormData();
  formdata.append("bot_id", source);
  formdata.append("customer_id", id);
  formdata.append("description", description);
  formdata.append("customer_name", name);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  const WebLink = "https://indibiz.co.id/my/produk/wifi-internet/paket";
  const AppLink =
    "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";

  const validPackage = [
    "Registrasi-WMSLiteSilver",
    "Registrasi-WMSLiteSilverPlus",
    "Registrasi-WMSLiteGold",
    "Registrasi-WMSLitePlatinum",
  ];

  const linkMap = {
    Web: WebLink,
    App: AppLink,
    Whatsapp: WebLink,
  };

  if (
    description === "Registrasi-WMSLiteSilver" ||
    "Registrasi-WMSLiteSilverPlus" ||
    "Registrasi-WMSLiteGold" ||
    "Registrasi-WMSLitePlatinum"
  ) {
    fetch(
      "https://whatsapp.infomedia.co.id/wa_api/api/open/addhitlink",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "Request Successfully") {
          if (
            ["Olive-App", "Olive-Web", "Olive-Whatsapp"].includes(
              result.data[0]
            )
          ) {
            let packageType = result.data[2].replace(`-Via${via}`, "");

            if (validPackage.includes(packageType) && linkMap[via]) {
              window.location.href = linkMap[via];
            }
          }
        }
      })
      .catch((error) => console.log("error", error));
  }

  return <div></div>;
}
