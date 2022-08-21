import { useEffect, useState } from "react";

// React Icons
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

//Componentes
import { Horario } from "../Horario";

// Styled Componentes
import * as Style from "./style";


export function Card({theme,setTheme}) {
  const [getHora, setHora] = useState(0);
  const [getMinuto, setMinuto] = useState(0);
  const [getSegundo, setSegundo] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const agora = new Date();
      const segundo = agora.getSeconds();
      const minuto = agora.getMinutes();
      const hora = agora.getHours();

      setSegundo(segundo);
      setMinuto(minuto);
      setHora(hora);
    }, 1000);
  });
  

  const themeToggler = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };


  return (

        <Style.Containner >
          <button onClick={themeToggler}>
            <MdLightMode size={30} />
          </button>
          <Style.Cards>
            <Horario nome="Horas" time={getHora} />:
            <Horario nome="Minutos" time={getMinuto} />:
            <Horario nome="Segundos" time={getSegundo} />
          </Style.Cards>
        </Style.Containner>
     
    
  );
}
