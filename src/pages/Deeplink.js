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
          if (result.data[0] === "Olive-App") {
            if (
              result.data[2] === "Registrasi-WMSLiteSilver-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilverPlus-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteGold-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLitePlatinum-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilver-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilverPlus-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLiteGold-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLitePlatinum-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            }
          } else if (result.data[0] === "Olive-Web") {
            if (
              result.data[2] === "Registrasi-WMSLiteSilver-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilverPlus-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteGold-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLitePlatinum-ViaWeb" &&
              via === "Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilver-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilverPlus-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLiteGold-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLitePlatinum-ViaApp" &&
              via === "App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            }
          } else if (result.data[0] === "Olive-Whatsapp") {
            if (result.data[2] === "Registrasi-WMSLiteSilver-ViaWeb&Web") {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilverPlus-ViaWeb&Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (result.data[2] === "Registrasi-WMSLiteGold-ViaWeb&Web") {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLitePlatinum-ViaWeb&Web"
            ) {
              window.location.href =
                "https://indibiz.co.id/my/produk/wifi-internet/paket";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilver-ViaApp&App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLiteSilverPlus-ViaApp&App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (result.data[2] === "Registrasi-WMSLiteGold-ViaApp&App") {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            } else if (
              result.data[2] === "Registrasi-WMSLitePlatinum-ViaApp&App"
            ) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=co.id.telkom.mysooltan&pli=1";
            }
          }
        }
      })
      .catch((error) => console.log("error", error));
  }

  return <div></div>;
}
