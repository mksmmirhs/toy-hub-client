import React from 'react';
import usePageTitle from '../../Titlehook/usePageTitle ';

const Blog = () => {
  usePageTitle('Blog');
  return (
    <div className=" my-16">
      <h1 className="text-xl">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>
      <p>
        Ans: Access token is used to access protected resources or authorized
        access on behalf of the client. refresh token is used to get new access
        token when they expires. After user successfully authenticates receives
        a access token and refresh token. Users passes the access token during
        api call to validate its authenticity. This is how access token works.
        There is two option to store access token one is localstorage and
        another is http only cookie. Http only cookie is more secure to store
        access token.
      </p>
      <h1 className="text-xl my-4">2. Compare SQL and NoSQL databases?</h1>
      <p>
        Ans: SQL databases are based on a relational data model.NoSQL databases
        use various data models, including key-value, document etc.
        <br />
        Schema:
        <br />
        SQl data base have predefined schema as table on the other hand no sql
        database have flexible schema.
        <br />
        Scalability:
        <br />
        Sql database are vertically scales means more cpu is needed of the load
        increases. on the other hand no sql database scale horizontally by
        distributing data across multiple servers less cpu is needed.
      </p>
      <h1 className="text-xl my-4">3. What is express js? What is Nest JS?</h1>
      <p>
        Ans: Express js is minimal, fast node.js framework to build server side
        application. Nest js is is build on top of express js. its a framework
        to build efficient , scalable server side application.
      </p>
      <h1 className="text-xl my-4">
        3. What is MongoDB aggregate and how does it work?
      </h1>
      <p>
        Ans:Aggregate is a way to process a large number of document in a
        collection by passing them to different stages. those stage are known as
        pipeline. Some of the pipeline are Match, Project ,Group, Sort. Limit
      </p>
    </div>
  );
};

export default Blog;
