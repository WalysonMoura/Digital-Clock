
import * as Style from "./style";

export function  Horario({time,nome}) {

    return(
        <Style.CardItem>
            <span className="time">{time}</span>
            <span className="name">{nome}</span>   
        </Style.CardItem>
    );
}