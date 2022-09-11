import React, { useEffect } from 'react'

export default function Profile() {
  useEffect(() => {
    window.location.href = "https://google.com/contact";
  }, []);

  return (
    <div>Profile</div>
  )
}
