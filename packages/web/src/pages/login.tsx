import React from 'react'
import Layout from '~/components/Layout'
import { CenteredLayoutContainer } from '~/components/Layout/style'
import { Header } from '~/components/Typography'
import Input from '~/components/Input'

export default function Login() {
  return (
    <Layout>
      <CenteredLayoutContainer>
        <div>
          <Header>Enter your store password</Header>
          <Input
            style={{ marginTop: 18 }}
            placeholder="Enter your store password"
          />
        </div>
      </CenteredLayoutContainer>
    </Layout>
  )
}
