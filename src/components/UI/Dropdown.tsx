import React from "react";

interface IListOptions {
  key: string;
  value: string;
}

type Props = {
  list: IListOptions[];
  selectedValue: string;
  setValue: (newValue: string) => void;
}

interface IDropdownState {
  selectedValue: string;
}


class Dropdown extends React.Component<Props, IDropdownState> {

  handleChange(event: React.FormEvent<HTMLSelectElement>) {
      const newValue: string = event.currentTarget.value;
      this.props.setValue(newValue);
  }

  render() {

    return (
      <select onChange={ e => this.handleChange(e) } value={ this.props.selectedValue }>
        {this.props.list.map((item) => (
          <option key={item.key} value={item.key}>{item.value}</option>
        ))}
      </select>
    );
  }
}

export default Dropdown;
