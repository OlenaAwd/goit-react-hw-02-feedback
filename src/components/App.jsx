import React, { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Static from './Statistics/Statistics';
import Notifict from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentageFeedback = Math.round((good / total) * 100);
    return (
      <Container>
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            onLeaveFeedback={this.incrementClick}
          ></Feedback>
        </Section>
        <Section title="Statistics">
          {total ? (
            <Static
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentageFeedback}
            />
          ) : (
            <Notifict message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
