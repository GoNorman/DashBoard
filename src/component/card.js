import React, { Component } from "react";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open_card: false,
      time: ''
    };
  }
  componentDidMount(){
    let data = this.props.update;
    let up_time = data.substring(0,10);
    this.setState({
        time : up_time
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="card_user">
          <p className="name-card">Repositories: {this.props.name}</p>
          <div className="nick-name">
            <p className="login-card">nick: {this.props.login}</p>
            <img className="avatar_user" src={this.props.img} alt="avatar" />
          </div>
          <p className="like-card">star: {this.props.like}</p>
          <a className="link-card" href={this.props.url}>
            go to: {this.props.url}
          </a>
          <p className="lang-card">lang: {this.props.lang}</p>
          <p className="des-card">about: {this.props.des}</p>
          <p className="data-card">last update: {this.state.time}</p>
          <br />
          <button className="card-btn"
            onClick={() => {
              this.props.on_open_card(this.state.open);
            }}
          >
            BACK
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
