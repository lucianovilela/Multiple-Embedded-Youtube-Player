"use client";
import { TextareaAutosize } from '@mui/material'
import React from 'react'



const TextArea = () => {
  return (
    <div>
      <TextareaAutosize id={"urls"} className={"darktheme"} rows={5} cols={50} style={{ fontSize: "10px" }} onInput={parse}
        placeholder={"Paste Youtube Video Links here https://www.youtube.com/watch?v=..."} />
    </div>
  )
}

export default TextArea