import Descrition from "../../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
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

    // const [feedbackCounts, setFeedbackCounts] = useState({
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    // });

    // useEffect(() => {
    //     localStorage.setItem("num-of-clicks", feedbackCounts);
    // }, [feedbackCounts]);

    const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

    const updateFeedback = (feedbackType) => {
        if (feedbackType == "good") {
            setFeedbackCounts({ ...feedbackCounts, good: feedbackCounts.good + 1 });
        }

        if (feedbackType == "neutral") {
            setFeedbackCounts({ ...feedbackCounts, neutral: feedbackCounts.neutral + 1 });
        }
        if (feedbackType == "bad") {
            setFeedbackCounts({ ...feedbackCounts, bad: feedbackCounts.bad + 1 });
        }
        if (feedbackType == "reset") {
            setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
        }
    };

    return (
        <>
            <Descrition />
            <Options clickCallback={updateFeedback} count={totalFeedback} />
            <Feedback good={feedbackCounts.good} neutral={feedbackCounts.neutral} bad={feedbackCounts.bad} />
        </>
    );
};
export default App;
