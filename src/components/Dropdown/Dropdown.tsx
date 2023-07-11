import React from "react";

type Props = {
  list: string[]
}

class Dropdown extends React.Component<Props> {
  render() {
    const { list } = this.props;
    return (
      <select>
        {list.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    );
  }
}

export default Dropdown;
