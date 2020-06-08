/* eslint-disable array-callback-return */
import React from "react";
import Search from "../component/search";
import List from "../component/list";
import Background from "../img/back.jpg";
import { connect } from "react-redux";
import { search_user } from "../action/index";
import Card from '../component/card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open_card: false,
      test : this.props.data
    };
    this.on_open_card = this.on_open_card.bind(this);
  }
  on_open_card(value, name, img, like, login, url, lang, description, update, contr) {
    this.setState({
      open_card : value,
      name,
      img,
      like,
      login,
      url,
      lang, 
      description,
      update,
      contr
    })
  }
  render() {
    const { data, on_search_user } = this.props;
    if (!this.state.open_card) {
      return (
        <React.Fragment>
          <div className="header" style={background}>
            <Search on_search_user={on_search_user} />
            <div className="list_rep">
              <List data={data} on_open_card={this.on_open_card} />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Card on_open_card={this.on_open_card} 
      name={this.state.name}
      img={this.state.img}
      like={this.state.like}
      login={this.state.login}
      url = {this.state.url}
      lang={this.state.lang}
      des={this.state.description}
      update={this.state.update}
      contr={this.state.contr}
      />;
    }
  }
}

let background = {
  backgroundImage: `url(${Background})`,
  position: "absolute",
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    on_search_user: (name) => dispatch(search_user(name)),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;