import React from 'react'
import { AnimatePresence } from 'framer-motion'
import fetch from 'isomorphic-unfetch'
import Layout from '~/components/Layout'
import { CenteredLayoutContainer } from '~/components/Layout/style'
import { Header } from '~/components/Typography'
import Input from '~/components/Input'
import Button, { AnimtedButtonContainer } from '~/components/Button'

export default function Login() {
  const [login, setLogin] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ password: login }),
    })

    const response = await res.json()

    console.log(response)
  }

  return (
    <Layout>
      <CenteredLayoutContainer>
        <form onSubmit={handleSubmit}>
          <Header>Enter your store password</Header>
          <Input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{ marginTop: 18 }}
            placeholder="Enter your store password"
          />
          <AnimatePresence>
            {login && (
              <AnimtedButtonContainer>
                <Button style={{ marginTop: 18 }} type="submit">
                  Submit
                </Button>
              </AnimtedButtonContainer>
            )}
          </AnimatePresence>
        </form>
      </CenteredLayoutContainer>
    </Layout>
  )
}
