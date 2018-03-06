/* eslint react/prop-types: 0 */
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import React from "react";

import Layout from "../components/MyLayout";

// const PostLink = props => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

const Index = props => (
  <div>
    <Layout>
      <div className="container">
        <h1 className="container--heading">Batman TV Shows</h1>
        <ul className="container__content">
          {props.shows.map(({ show }) => (
            <li key={show.id} className="container__content--item">
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a
                  className="container__content--item-tag"
                  style={{ textDecoration: "none" }}
                >
                  {show.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
          color: red;
        }
      `}</style> */}
    </Layout>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log("Show data fetched. Count: ", data.length);

  return {
    shows: data
  };
};

export default Index;
