import React from 'react'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { CoinState } from "../../CoinContext"
import { TrendingCoins } from "../../Config/api"
import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
      },
}))

const Carousel = () => {
    const [topcoins, setTopcoins] = useState([]);
    const classes = useStyles();
    const { curr, sym } = CoinState();
    const fetchCoins = async () => {
        const { data } = await axios.get(TrendingCoins(curr));
        setTopcoins(data);
    }

    useEffect(() => {
        fetchCoins();
    }, [curr]);

    console.log(topcoins)

    const items = topcoins.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;

        return (
            <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
                <img
                    src={coin.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }}
                />
                <span>
                    {coin.symbol}
                    &nbsp;
                    <span
                        style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                        }}
                    >
                        {profit && "+"}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {sym} {numberWithCommas(coin.current_price.toFixed(2))}
                </span>
            </Link>
        );
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    }
    return (
        <div className={classes.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            >

            </AliceCarousel>

        </div>
    )
}

export default Carousel