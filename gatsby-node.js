const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const myTemplate = path.resolve(`src/templates/myTemplate.js`)
  const albumsQuery = await graphql(`
    {
      plyta {
          vinyls: vinylsConnection(first: 100) {
            edges {
              node {
                status
                updatedAt
                createdAt
                id
                artysta
                music
                slagy
              }
            }
          }
        }
      }
  `);

  console.log(albumsQuery.data.plyta.vinyls.edges[0].node.artysta);

  albumsQuery.data.plyta.vinyls.edges.forEach(album => {
    createPage({
      path: album.node.slagy,
      component: myTemplate,
      context: {
        data: album.node
      }
    })
  })
}