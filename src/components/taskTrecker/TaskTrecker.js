import React, { Component } from "react";
import s from "../taskTrecker/TaskTrecker.module.css";
import Button from "./buttons/Buttons";
import Info from "./info/Info";
import Notification from "./notification/Notification";

class TaskTrecker extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = (e) => {
    const key = e.target.dataset.name;
    this.setState((prev) => ({ [key]: prev[key] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = (total, good) => {
    const percent = (good / total) * 100;
    return percent.toFixed();
  };
  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );

    const { good, neutral, bad } = this.state;
    return (
      <div className={s.container}>
        <div className={s.feedback}>
          <h2 className={s.title}>Please leave feedback</h2>

          <Button onHandleClick={this.onHandleClick} />
          <h3 className={s.title}>Statistics:</h3>
        </div>
        <div className={s.feedbackk}>
          {total > 0 ? (
            <Info
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </div>
    );
  }
}

export default TaskTrecker;
