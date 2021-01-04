import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  width: var(--avatar-size);
  height: var(--avatar-size);
`
const StyledImage = styled(Img)`
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: calc(var(--avatar-size) / 2);
  filter: grayscale(100%);
  @media screen and (prefers-color-scheme: light) {
    transform: scaleX(-1);
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <StyledFigure>
      <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
    </StyledFigure>
  )
}

export default Image
