import React from "react";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo:null };
    }

    // when any error exist
    componentDidCatch(error, errorInfo) {
        this.setState({error:error, errorInfo: errorInfo})
    }

    render() {
        if (this.state.errorInfo) {
          // fallback UI if error exists
          return (
              <div className="error">
                  <h1>Something Went Wrong...!</h1>
                  <p>Please, try again</p>
              </div>
          )
        }
        // if no error, TodoApp show 
        return this.props.children;
      }
}
 
export default ErrorBoundary;
