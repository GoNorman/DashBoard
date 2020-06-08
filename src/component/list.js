/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            open_card : true
        }
    }
    render(){
    const { data } = this.props;
    console.log(data)
    return (
      <React.Fragment>
        <div className="block">
          {data.map((ev) => {
            return ev.name.items.map((ev, index) => {
              return (
                <div className="list-rep" key={index}>
                  <p
                    className="rep-name"
                    onClick={() => {
                      this.props.on_open_card(
                        this.state.open_card,
                        ev.name,
                        ev.owner.avatar_url,
                        ev.stargazers_count,
                        ev.owner.login,
                        ev.html_url,
                        ev.language,
                        ev.description,
                        ev.updated_at,
                        ev.contributors_url
                      );
                    }}
                  >
                    {ev.name}
                  </p>
                  <p className="des">Language : {ev.language}</p>
                  <p className="like">Star : {ev.stargazers_count}</p>
                  <a className="link" href={ev.html_url}>
                    Link : {ev.html_url}
                  </a>
                </div>
              );
            });
          })}
        </div>
      </React.Fragment>
    );
    }
}
export default List;