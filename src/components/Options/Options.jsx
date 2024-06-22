import css from "./Options.module.css";

export default function Options({ clickCallback, count }) {
    return (
        <div>
            <button onClick={() => clickCallback("good")}>Good</button>
            <button onClick={() => clickCallback("neutral")}>Neutral</button>
            <button onClick={() => clickCallback("bad")}>Bad</button>
            {count == 0 ? <></> : <button onClick={() => clickCallback("reset")}>Reset</button>}
        </div>
    );
}
