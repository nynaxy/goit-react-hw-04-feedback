import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setState((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((state.good / total) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Expresso Cafe Feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;