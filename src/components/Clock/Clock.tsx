import React from "react";

interface DefaultProps {}
interface Props extends DefaultProps {}
type clockState = {
  date: Date
}

class Clock extends React.Component<Props, clockState> {
  public static readonly defaultProps = {};

  timerId: NodeJS.Timer | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  
  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
