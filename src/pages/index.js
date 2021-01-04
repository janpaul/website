import React from 'react'
import styled from 'styled-components'

import { Title, Subtitle, SEO, Avatar, Layout, Social } from '../components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Title>Jan Paul Stegeman</Title>
      <div
        style={{
          maxWidth: `300px`,
          margin: 'auto',
        }}
      >
        <Avatar />
      </div>
      <Subtitle>
        Freelance full-stack software engineer based in (and around) Amsterdam
      </Subtitle>
      <Social />
    </Wrapper>
  </Layout>
)

export default IndexPage
