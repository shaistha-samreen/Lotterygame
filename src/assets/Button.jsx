import "./Button.css";

export default function Button({action}) {
    return (
        <button onClick={action} className="button">Buy New Ticket</button>
    );
}