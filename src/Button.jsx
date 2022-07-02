import React from 'react'
import styled from 'styled-components'

let Btn = styled.button`
background: ${props=>props.bg || "white"};
color: ${props=>props.color|| "black"};
border-style: ${props=>props.border || "solid"} ;
padding:7px;
margin:10px;
font-size:21px;
border-radius:4px;
`

function Button({bg,color,border,text="Default"}) {
  return (
    <Btn bg={bg} color={color} border={border}>
        {text}
    </Btn>
    
  )
}

export default Button