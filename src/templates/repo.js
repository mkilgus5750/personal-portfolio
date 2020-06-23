import React from "react"
import { graphql } from "gatsby"
import { sentence } from "case"
import './repo.css'

export const query = graphql`
  query($owner: String!, $name: String!) {
    github {
      repository(owner: $owner, name: $name) {
        owner {
          login
        }
        id
        pushedAt
        name
        url
        description
        homepageUrl
        openGraphImageUrl
        object(expression: "master:README.md") {
          ... on GitHub_Blob {
            text
          }
        }
      }
    }
  }
`

export default function RepoTemplate({ data }) {
  return (
    <React.Fragment>
      <div className="Repo">
      <div className='Repo-container'>
        <h1>{sentence(data.github.repository.name)}</h1>
          <div>
          <time dateTime={data.github.repository.pushedAt}>
            {new Date(data.github.repository.pushedAt).toLocaleDateString(
              "en-US"
            )}
          </time>
        </div>
        <a
          href={data.github.repository.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the repository
        </a>
          <a
          href={data.github.repository.homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the site (if applicable)
        </a>   
        <p className="description">Description: {data.github.repository.description}</p>
        <img src={data.github.repository.openGraphImageUrl} />
        <hr />
      </div>
      </div>
    </React.Fragment>
  )
}