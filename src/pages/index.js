import React from "react";
import { Link } from "gatsby";

import Image from "../components/image"
import SEO from "../components/seo"
import { node } from "prop-types";

const IndexPage = ({data}) => (
  <>
  <h1>my page</h1>
    {
      data.allSitePage.edges.map(name => ( 
          <Link key={name.node.path} to={name.node.path}>link</Link>
      ))
    }
  {console.log(data)}
  </>
)


export const allAlbumPagesQuery = graphql`
  {
    allSitePage(filter: {
      component:
      {
        eq: "/home/circleci/repo/src/templates/myTemplate.js"
      }
        })
      {
      edges {
        node {
          id
          component
          path
        }
      }
    }
  }
`

export default IndexPage
