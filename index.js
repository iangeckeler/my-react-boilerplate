import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stateEnabled: true
        }
    }


    render() {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        )
    };


}

ReactDOM.render(<Index />, document.getElementById("index"));