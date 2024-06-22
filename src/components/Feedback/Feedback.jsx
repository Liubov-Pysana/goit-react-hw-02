export default function Feedback({ good, neutral, bad, positivePercentage }) {
    const totalFeedback = good + neutral + bad;
    if (totalFeedback === 0) {
        return <p>No feedback yet</p>;
    }

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
