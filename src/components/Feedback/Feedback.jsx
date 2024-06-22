export default function Feedback({ good, neutral, bad, positivePercentage, totalFeedback }) {
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positivePercentage}%</li>
        </ul>
    );
}
