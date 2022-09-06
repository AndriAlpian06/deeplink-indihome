import React from 'react'
import { useParams } from 'react-router-dom';

const BotInditaWeb = () => {
    const {source, id, name, description } = useParams();
  return (
    <div>
        {/* http://localhost:3000/BotInditaWeb/source=Indita-FB&id=22342&name=andri&descrption=registrasi-orbit */}
        Source : {source}<br />
        Id Customer : {id}<br />
        Nama Customer : {name}<br />
        Description : {description}
    </div>
  )
}

export default BotInditaWeb