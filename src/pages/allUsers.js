import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import {Divider, List, ListItem, PaginationItem} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {default as data} from './MOCK_DATA.json'
import React, {Component, useState} from 'react';
import Box from "@mui/material/Box";
import usePagination from "./pagination";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "white"
        }
    }
}));
export default function StatusRecommendations() {

    let [spage, setsPage] = useState(1);
    const PER_PAGE = 10;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setsPage(p);
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
                page={spage}
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
                            <ListItem key={v.id} listStyleType="disc">
                                <span>{v.sku}</span>{" "}
                                <Divider display="inline" orientation="vertical" />
                                <span> {v.category_type}</span>{" "}
                                <Divider display="inline" orientation="vertical" />
                                <span>
              </span>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

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
                page={spage}
                variant="outlined"
                shape="rounded"
                defaultPage={1}
                showFirstButton
                showLastButton
                onChange={handleChange}
            />
            <Footer />
        </Box>
    );
}