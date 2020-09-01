import React from "react";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      tasks : []
    };
  }


  handleCallback(inputValue){
    const { tasks } = this.state;
    this.setState({
      tasks : [...tasks, inputValue]
    });
    console.log(tasks)
  }


  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask propDePrueba={(inputValue) => this.handleCallback(inputValue)}/>
        <Tasks tasks={tasks} />
      </>
    );
  }
}

export default App;
