import React from 'react'

const TextArea = () => {
  return (
    <div>      
    <textarea id={"urls"} className={"darktheme"} rows={"5"} cols={"50"} style={{fontSize:"30px"}} onInput="parse()"
      placeholder={"Paste Youtube Video Links here&#10;https://www.youtube.com/watch?v=..."}>
        
      </textarea>
</div>
  )
}

export default TextArea