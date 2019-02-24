import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              <strong>{author}</strong>
              <a
                target="_blank"
                style={{
                  color: `unset`,
                  border: `1px solid`,
                  borderRadius: 3,
                  padding: 5,
                  boxShadow: `0, 0, 0`,
                  marginLeft: 7,
                  fontSize: `.8rem`
                }}
                href={`https://twitter.com/${social.twitter}`}>
                <img
                  style={{
                    width: 12,
                    marginRight: 3,
                    marginBottom: 0
                  }}
                  src='https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-social-twitter.svg'
                />
                follow
              </a>
              <br/>
              <span
                style={{
                  fontSize: `0.8rem`
                }}
                >
                designer | developer | seattle
              </span>

            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
