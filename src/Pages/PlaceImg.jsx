import React from 'react'

export default function PlaceImg({place,index=0,className=null}) {

  if(!place.photos?.length){
    return ""
  }
  
  return (
   
      <img className="h-full" src={"https://vast-plum-squid-yoke.cyclic.app/uploads/"+place.photos[index]}/>
  
  )
}
