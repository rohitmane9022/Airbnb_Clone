import React from 'react'

export default function PlaceImg({place,index=0,className=null}) {

  if(!place.photos?.length){
    return ""
  }
  
  return (
   
      <img className="h-full" src={"http://localhost:3000/uploads/"+place.photos[index]}/>
  
  )
}
