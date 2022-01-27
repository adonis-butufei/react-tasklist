import React from "react";
import error from "../img/error.png"

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: null};
    }

    // when any error exist
    componentDidCatch(error) {
        // console.log(error.message)
        this.setState({error:error.message})
    }

    render() {
        if (this.state.error) {
          // fallback UI if error exists
          return (
              <div className="error">
                     {this.props.children}
                  <p>{this.state.error}</p> 
              </div>
          )
        }
        // if no error, TodoApp show 
        return this.props.children;
      }
}
 
export default ErrorBoundary;
