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
          return <h2>Something went wrong!</h2>;
        }
        return this.props.children;
      }
}
 
export default ErrorBoundary;
