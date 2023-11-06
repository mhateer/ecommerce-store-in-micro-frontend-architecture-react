import React from "react";

export default class SafeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDrivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(){} 
    render(){
        if (this.state.hasError) {
            return <div>something went wrong</div>
        }
        return this.props.children;
    }
}