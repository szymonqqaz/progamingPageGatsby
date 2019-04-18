import React from 'react';
import { Link, graphql } from 'gatsby';

const myTemplate = ({ pageContext: { data }}) => (
  <>
    <h1>hello</h1>
    <h1>{data.artysta}</h1>
    {
      console.log(data)
    }
  </>
)

export default myTemplate;