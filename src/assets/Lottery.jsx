import { useState } from "react";

import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
import "./Lottery.css";

export default function Lottery({ n = 3, wincondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = wincondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div className="main">
            <h1 className="lottery"><b>Lottery Game!</b></h1>
            <Ticket ticket={ticket} />
            <br></br>
            <Button action={buyTicket} />
            <br></br>
            <h3 className="congr">{isWinning && "Congratulations, You Won!"}</h3>
        </div>
    );
}