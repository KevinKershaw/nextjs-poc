import { Box, Button, Container, Typography } from '@mui/material'
import { DrupalNode } from 'next-drupal'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import router from 'next/router'
import Layout from 'components/Layout'
import { getArticle, getRules } from 'lib/drupalApi'
import useSWR, { SWRConfig, unstable_serialize } from 'swr'

const cmsRefreshInterval = 20000

export const getStaticPaths: GetStaticPaths = async () => {
  let allArticles = await getRules()
	let paths = allArticles.map((article) => `/ssg/rules/${article.id}`)

	return {
		paths: paths,
    fallback: 'blocking',
	}
}
const fetcher = async (url: string, id: string) => {
  let resp = await fetch(`${url}?id=${id}`)
  return resp.json()
}

export const getStaticProps: GetStaticProps = async (context) => {
	let id = context.params?.id as string
	let article = await getArticle(id)

	return {
		props: {
      fallback: {
        [unstable_serialize(['api', 'article', id])]: article,
      },
			article,
		},
	}
}

const Article = ({ fallbackData }: { fallbackData: DrupalNode }) => {
  const { data, error } = useSWR(['/api/article', fallbackData.id], (url: string, id: string) => fetcher(url, id), {
    fallbackData: fallbackData,
    refreshInterval: cmsRefreshInterval,
  })
  if (error) {
	return (
      <Layout>
        <Container>unable to load article</Container>
      </Layout>
    )
  }
  let article = data as DrupalNode
  return (
    <>
			<Container>
				<Typography>
					<Button
						variant='text'
						sx={{ paddingLeft: '0px' }}
						onClick={() => {
							router.push('/ssg/rules')
						}}>
            &#8592; back
					</Button>
				</Typography>
				<Typography variant='h5'>{article.attributes.title}</Typography>
				<hr></hr>
				<Typography variant='body1'>{article.attributes.body.summary}</Typography>
				<Box dangerouslySetInnerHTML={{ __html: article.attributes.body.processed }}></Box>
			</Container>
    </>
  )
}

const MsrbRule: NextPage<{ fallback: any; article: DrupalNode }> = ({ fallback, article }) => {
  return (
    <Layout>
      <Container>
        <SWRConfig value={{ fallback }}>
          <Article fallbackData={article} />
        </SWRConfig>
      </Container>
    </Layout>
	)
}

export default MsrbRule
