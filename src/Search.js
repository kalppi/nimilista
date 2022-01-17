import React from "react";

class Search extends React.Component {
    state = {
        value: ""
    }

    constructor(props) {
        super();

        this.state.onChange = props.onChange;
    }

    updateValue = (e) => {
        this.setState({value: e.target.value});

        this.state.onChange(e.target.value)
    }

    render() {
        return <div className="search">
            <input onChange={this.updateValue} />
        </div>;
    }
}

export default Search;