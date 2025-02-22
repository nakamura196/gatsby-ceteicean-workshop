import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";

const Index = () => {
  const data = useStaticQuery(graphql`
    query teifiles {
      allCetei {
        nodes {
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);
  const teifiles = data.allCetei.nodes;
  const ids = [];
  for (let i = 1; i <= 54; i++) {
    ids.push(("00" + i).slice(-2));
  }

  return (
    <Layout location="home">
      <h2>ドキュメントの一覧</h2>

      <div>
        <ul>
          {ids.map((id) => (
            <li key={id}>
              <Link to={"/" + id}>{id}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
