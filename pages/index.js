import Head from 'next/head'
import DarkModeSwitch from '../components/DarkModeSwitch'
import Container from '../components/Container'
import { Text, Stack, Flex, Heading, useColorMode }  from '@chakra-ui/react'

import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container enableTransition={true}>
      <Head>
        <title>Home - Tre Gelacio - Future Software Developer</title>
        <meta name="title" content="Tre Gelacio - Software Developer" />
          <meta name="keywords" content="tgelacio, tgelacio website" />
          <meta
            name="description"
            content="Software Developer based in Hawaii. Bachelors of Science graduate from University of Hawaii at Manoa in Computer Science."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tregelacio.github.io" />
          <meta
            property="og:title"
            content="Abdul Rahman - Software Developer"
          />
          <meta
            property="og:description"
            content="Software Developer based in Hawaii. Bachelors of Science graduate from University of Hawaii at Manoa in Computer Science."
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tregelacio.github.io" />
          <meta
            property="twitter:title"
            content="Tre Gelacio - Software Developer"
          />
          <meta
            property="twitter:description"
            content="Software Developer based in Hawaii. Bachelors of Science graduate from University of Hawaii at Manoa in Computer Science."
          />
          <meta
            property="twitter:image"
            content=""
          />
        </Head>

      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >

        <Introduction />

{/*         <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Aloha, I am Tre Gelacio</Heading>
          <Text color={colorSecondary[colorMode]}>Computer Science Student from UH Manoa c/o 2020</Text>
        </Flex> */}
      </Stack>
    </Container>
  )
}

let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'Projects',
    order: 'fields.order',
  })

  let data2 = await client.getEntries({
    content_type: 'blog',
    limit: 5,
    order: 'sys.createdAt',
  })

  return {
    props: {
      projects: data.items,
      blogs: data2.items.reverse(),
    },
  }
}