/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : '',
            value_form : ''
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onChangeName(ev){
        this.setState({
            value : ev.target.value
        })
    }
    onSubmitForm(ev){
        ev.preventDefault();
        this.props.on_search_user(this.state.value);
        this.state.value = '';
    }
    render() {
    return (
      <React.Fragment>
        <div className="block_search">
          <form type="text" onSubmit={this.onSubmitForm}>
            <h1 className="theme">GitHub DashBoard</h1>
            <input
              onChange={this.onChangeName}
              placeholder="Enter the repositorie"
              value={this.state.value}
            />
            <button type="submit">SEARCH</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
