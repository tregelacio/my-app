import {
    Link,
    Text,
    Stack,
    Heading,
    Box,
    Button,
    SlideFade,
    Image
} from '@chakra-ui/react'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

export default function Introduction() {
    const activeResize = useMediaQuery(1000)
    const onClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }

    return (
        <>
        <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
            <SlideFade direction="top" in={true} transition={{ enter: { duration: 0.4, delay: 0.7 }}}>
                <Box>
                    <Image
                        alt=""
                    ></Image>
                    <Text>
                        Aloha! I am-
                    </Text>
                </Box>
                <Heading>
                    Tre Gelacio
                </Heading>
            </SlideFade>

            <SlideFade direction="top" in={true} transition={{ enter: { duration: 0.4, delay: 0.7 }}}>
                <Heading>
                    <Box>

                    </Box>
                </Heading>
            </SlideFade>

            <SlideFade direction="top" in={true} transition={{ enter: { duration: 0.4, delay: 0.7 }}}>
                <Text>
                    <Stack>
                        <Link>
                            <Button>
                                Github
                            </Button> 
                        </Link>
                        <Link>
                            <Button>
                                LinkedIn
                            </Button> 
                        </Link>
                        <Link>
                            <Button>
                                Email
                            </Button> 
                        </Link>
                    </Stack>
                </Text>
            </SlideFade>
        </Stack>
        </>
    )
}