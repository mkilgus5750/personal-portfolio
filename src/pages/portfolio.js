import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout/layout';
import './portfolio.css';
export const query = graphql`
query{
    github{
      viewer {
          repositories(first:100){
          nodes {
            id
            name
            url
            description
            pushedAt
            homepageUrl
            openGraphImageUrl

            primaryLanguage{
              name
            }
          }
        }
      }
    }
  }
`

// const wrapperStyle = { maxWidth: "700px", margin: "0 auto" };

export default function PortfolioPage({ data }) {
    return (
        <Layout>
            <div className="portfolio">
              <span className='Portfolio-container'>
                <h1 className="Portfolio-header">My Github Portfolio</h1>
                  {data.github.viewer.repositories.nodes.map(repo => (
                      <div key={repo.id} className="Individual-repo">
                        <img src={repo.openGraphImageUrl} alt='Repo image'/>
                          <h2>{repo.name}</h2>
                          <ul>
                              <p><Link to={`/projects/${repo.name}`}>See more</Link></p>
                          </ul>
                      </div>
                  ))}
              </span>
            </div>
        </Layout>
    )
}
