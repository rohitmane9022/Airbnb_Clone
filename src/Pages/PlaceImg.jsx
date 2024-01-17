import React from 'react'

export default function PlaceImg({place,index=0,className=null}) {

  if(!place.photos?.length){
    return ""
  }
  
  return (
   
      <img className="h-full" src={"https://backend-airbnb-w6ay.onrender.com/uploads/"+place.photos[index]}/>
  
  )
}
