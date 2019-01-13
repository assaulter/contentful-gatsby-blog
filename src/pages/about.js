import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './about.module.css'
import ArticlePreview from '../components/article-preview'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h2 className="section-headline">About</h2>          
          <ul>
            <li>name: {author.node.name}</li>
            <li>shortBio: {author.node.shortBio.shortBio}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutIndexQuery {    
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
        }
      }
    }
  }
`
