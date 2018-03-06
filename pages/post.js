/* eslint react/prop-types: 0 */
import React from "react";
import Layout from "../components/MyLayout";

import fetch from "isomorphic-unfetch";

export default class Post extends React.Component {
  //One Way to initialize the data in props (class based component)
  static getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);
    return { show };
  };
  render() {
    return (
      <Layout>
        <div className="post">
          <div className="post__title">
            <h1>{this.props.show.name}</h1>
          </div>
          <div className="post__content">
            <div className="post__content--img">
              <img src={this.props.show.image.medium} />
            </div>
            <div className="post__content--summary">
              <p>{this.props.show.summary.replace(/<[/]?p>/g, "")}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

// //Another Way to initialize the data in props
// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);
//   return { show };
// };
