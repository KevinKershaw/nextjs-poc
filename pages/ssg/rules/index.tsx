import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { getRules } from 'lib/drupalApi'
import { DrupalNode } from 'next-drupal'
import RulesTableLayout from 'components/RulesTableLayout'
import useSWR, { SWRConfig } from 'swr'
import Layout from 'components/Layout'
import { Container, Typography, Button, Box } from '@mui/material'

const cmsRefreshInterval = 20000

const fetcher = async (url: string) => {
  let resp = await fetch(url)
  return resp.json()
}
export const getStaticProps: GetStaticProps = async (context) => {
  let ruleArticles = await getRules()
  console.log(`regenerating rules`)
  return {
    props: {
      articles: ruleArticles,
      fallback: {
        '/api/MSRBRules': ruleArticles,
      },
    },
  }
}
const Articles = ({ fallbackData }: { fallbackData: DrupalNode[] }) => {
  const { data, error } = useSWR(['/api/MSRBRules'], (url: string) => fetcher(url), {
    fallbackData: fallbackData,
    refreshInterval: cmsRefreshInterval,
  })

  if (error) {
    return (
      <Layout>
        <Container>unable to load content</Container>
      </Layout>
    )
  }
  let articles = data as DrupalNode[]

  return <RulesTableLayout articles={articles} renderType='ssg' />
}

const MSRBRules: NextPage<{ articles: DrupalNode[]; fallback: any }> = ({ articles, fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Articles fallbackData={articles} />
    </SWRConfig>
  )
}

export default MSRBRules

