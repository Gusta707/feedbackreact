
import { useState } from "react"
import { CardInicial } from "./Components/CardInicial"


export function App(){
  const [nota, setNota] = useState(0)
  const [submited, setSubmited] = useState(false)

  

  return(
    submited === false ? (
      < CardInicial nota={nota} setNota={setNota} setSubmited={setSubmited} />
    ) : ( 
      <CardFinal nota={nota} />
    )
  )
}