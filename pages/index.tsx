import type { NextPage } from 'next'
import NLink from 'next/link'
// import router from 'next/router'
// import { isLoggedIn } from 'lib/auth'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '/styles/Home.module.css'
import Layout from 'components/Layout'
import { Box, Button, Container, Link, Paper, Stack, Typography } from '@mui/material'

const Home: NextPage = () => {
    return (
        <Layout home>
            <main>
                <Box
                    sx={{
                        mt: 10,
                        bgcolor: '#003668',
                        borderTopWidth: 3,
                        pt: 5,
                        pb: 5
                    }}
                >
                    <Container maxWidth="lg">
                        <Stack
                            direction="row"
                            spacing={4}
                            justifyContent="center"
                        >
                            <Container>
                                <Typography
                                    variant="h4"
                                    align="left"
                                    color="white"
                                    gutterBottom
                                >
                                    The Official Source for Municipal Securities Data and Documents
                                </Typography>
                                <Typography align="left" color="white" paragraph>
                                    Provided by the Municipal Securities Rulemaking Board
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="left"
                                >
                                    <Button size="large" variant="text" sx={{backgroundColor: 'white', '&:hover': {backgroundColor: 'rgba(222, 222, 222, 0.94)'}}}>Find Issuer</Button>
                                    <Button size="large" variant="text" sx={{backgroundColor: 'white', '&:hover': {backgroundColor: 'rgba(222, 222, 222, 0.94)'}}}>Find Securities</Button>
                                </Stack>
                            </Container>
                            <Container>
                                <Paper>
                                    <Box sx={{ mx: 10, align: 'center' }}>
                                        <br />
                                        <Typography
                                            variant="h4"
                                            align="center"
                                            gutterBottom
                                        >
                                            Welcome to EMMA
                                        </Typography>
                                        <Box>
                                            <h3><a href="https://https://nextjs.org//" target="_blank" rel="noreferrer">Next JS</a></h3>
                                            This test harness tests the following:
                                            <ul>
                                                <li><NLink href='/ssg/YieldCurve'><Link href='/'>SSG - Static Site Generation</Link></NLink></li>
                                                <li><NLink href='/ssr/YieldCurve'><Link href='/'>SSR - Server Side Rendering</Link></NLink></li>
                                                <li><NLink href='/csr/YieldCurve'><Link href='/'>CSR - Client Side Rendering</Link></NLink></li>
                                            </ul>
                                        </Box>
                                        {/* <br />
                                        <br />
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            justifyContent="center"
                                        >
                                            {isLoggedIn() ? (
                                                <>
                                                    <Button
                                                        color="secondary"
                                                        variant="outlined"
                                                        onClick={event => { router.push("/dashboard/profile") }}
                                                    >
                                                        My Account
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button color="secondary" variant="outlined">
                                                        Sign up
                                                    </Button>
                                                    <Button color="secondary" variant="contained"
                                                        onClick={event => { router.push("/dashboard/login") }}
                                                    >
                                                        Sign In
                                                    </Button>
                                                </>
                                            )}

                                        </Stack> */}
                                        <br />
                                        <br />
                                    </Box>
                                </Paper>
                            </Container>

                        </Stack>
                    </Container>
                </Box>
                <Box sx={{height: 200}}></Box>

            </main>
        </Layout>
    )
}

export default Home