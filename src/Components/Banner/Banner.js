import React from 'react'
import { makeStyles, Container, Typography } from '@material-ui/core'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./bgimagehead.jpg)"
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagLine: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}))

const Banner = () => {

    const classes = useStyles();

    return <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagLine}>
                <Typography
                    variant="h2"
                    style={{
                        fontWeight: "bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}
                >
                    Coin Watch
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{
                        color: "darkgrey",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat",
                    }}
                >
                    Track your Crypto Coins!
                </Typography>
            </div>
            <Carousel>
                
            </Carousel>
        </Container>
    </div>
}

export default Banner