import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    //inicio el estado
    this.state = {
      inputValue: ""
    };
  }

  handleChange(e) {
    const { value } = e.target;

    //actualizo el value
    this.setState({
      inputValue: value
    });
  }

  handleClick() {
    
    const { inputValue } = this.state;
    if (inputValue != "") {
        this.props.propDePrueba(inputValue);
        this.setState({
            inputValue: ""
        });
    }
  }

  render() {
      const {inputValue} = this.state;
    return (
      <>
        <input type="text" onChange={(e) => this.handleChange(e)} value={inputValue}/>
        <button onClick={() => this.handleClick()}>Agregar</button>
      </>
    );
  }
}

export default AddTask;