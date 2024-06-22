import Descrition from "../../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

const App = () => {
    const [feedbackCounts, setFeedbackCounts] = useState(() => {
        const savedFeedback = localStorage.getItem("num-of-clicks");
        try {
            return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
        } catch (e) {
            console.error("Error parsing JSON from localStorage", e);
            return { good: 0, neutral: 0, bad: 0 };
        }
    });

    useEffect(() => {
        localStorage.setItem("num-of-clicks", JSON.stringify(feedbackCounts));
    }, [feedbackCounts]);

    const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
    const positivePercentage = totalFeedback > 0 ? Math.round((feedbackCounts.good * 100) / totalFeedback) : 0;

    const updateFeedback = (feedbackType) => {
        setFeedbackCounts((prevCounts) => {
            switch (feedbackType) {
                case "good":
                    return { ...prevCounts, good: prevCounts.good + 1 };
                case "neutral":
                    return { ...prevCounts, neutral: prevCounts.neutral + 1 };
                case "bad":
                    return { ...prevCounts, bad: prevCounts.bad + 1 };
                case "reset":
                    return { good: 0, neutral: 0, bad: 0 };
                default:
                    return prevCounts;
            }
        });
    };

    return (
        <>
            <Descrition />
            <Options clickCallback={updateFeedback} count={totalFeedback} />
            {totalFeedback === 0 ? (
                <Notification message="No feedback yet" />
            ) : (
                <Feedback
                    good={feedbackCounts.good}
                    neutral={feedbackCounts.neutral}
                    bad={feedbackCounts.bad}
                    total={totalFeedback}
                    positivePercentage={positivePercentage}
                />
            )}
        </>
    );
};

export default App;
