import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout location="about">
      <h2>このサイトについて</h2>
      <div>
        <p>校異源氏物語テキストDBで公開されているTEI/XMLデータを利用しています。</p>
      </div>
    </Layout>
  );
};

export default About;
