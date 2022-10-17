import Pagination from '@mui/material/Pagination';
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import {Divider, List, ListItem, PaginationItem} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {default as data} from './MOCK_DATA.json'
import React, {Component, useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import usePagination from "./pagination";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import RecommendationService from "../services/recommendation.service";
// import {response} from "express";
// import AuthService from "../services/auth.service";
// import RecommendationService from "../services/recommendation.service";
const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "white"
        }
    }
}));
export default function AllRecommendations() {

    let [page, setPage] = useState(1);
    let [recommendation, setRecommendation] = useState();

    const PER_PAGE = 5;

    const getData = () => {
        RecommendationService.getAllRecommendations().then((response) => {
            const data = response.data;
            console.log("Inside getData(): allData variable: ")
            console.log(data);
            setRecommendation(data);
        }).catch(error => console.log(error));
    };

    useEffect(() =>{
        getData();
        console.log("Recommendation objects:");
        console.log(recommendation);
    },[]);

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const classes=useStyles();


    return(

    <Box p="5">
        <Header/>
        <ParticlesBackground/>
        <Pagination
            classes={{ ul: classes.ul }}
            renderItem={(item) => (
                <PaginationItem
                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />)}
            count={count}
            color="primary"
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            showFirstButton
            showLastButton
            onChange={handleChange}
        />
        <Box color="white">
        <List p="10" pt="3" spacing={2} color>
            {_DATA.currentData().map(v => {
                return (
                    <Grid key={v.id} listStyleType="disc">
                        <Card sx={{ maxWidth: 400 }} style={{backgroundColor: "transparent", border: "3px solid green" }}>
                            <CardContent style={{color: "white"}}>
                        <span>{v.sku}</span>{" "}
                        <Divider display="inline" orientation="vertical" />
                        <span> {v.category_type}</span>{" "}
                        <Divider display="inline" orientation="vertical" />
                        <span>
              </span>
                            </CardContent>
                        </Card>
                        <br />
                    </Grid>
                );
            })}
            <br/>
        </List>

        </Box>



        <Footer />
    </Box>
    );
}

// export default LocalFileRead;

