// import Pagination from '@mui/material/Pagination';
// import Footer from "./footer";
// import Header from "./header";
// import ParticlesBackground from "../components/ParticlesBackground";
// import {Divider, List, ListItem, PaginationItem} from "@mui/material";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // import {default as data} from './MOCK_DATA.json'
// import React, {Component, useEffect, useState} from 'react';
// import Box from "@mui/material/Box";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import usePagination from "./pagination";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Card from "@mui/material/Card";
// import RecommendationService from "../services/recommendation.service";
// // import {response} from "express";
// // import AuthService from "../services/auth.service";
// // import RecommendationService from "../services/recommendation.service";
// const useStyles = makeStyles(() => ({
//     ul: {
//         "& .MuiPaginationItem-root": {
//             color: "white"
//         }
//     }
// }));
// export default function AllRecommendations() {
//
//     let [page, setPage] = useState(1);
//     let [recommendation, setRecommendation] = useState();
//
//     const PER_PAGE = 5;
//
//     const getData = () => {
//         RecommendationService.getAllRecommendations().then((response) => {
//             const data = response.data;
//             console.log("Inside getData(): allData variable: ")
//             console.log(data);
//             setRecommendation(data);
//         }).catch(error => console.log(error));
//     };
//
//     useEffect(() =>{
//         getData();
//         console.log("Recommendation objects:");
//         console.log(recommendation);
//     },[]);
//
//     const count = Math.ceil(data.length / PER_PAGE);
//     const _DATA = usePagination(data, PER_PAGE);
//
//     const handleChange = (e, p) => {
//         setPage(p);
//         _DATA.jump(p);
//     };
//
//     const classes=useStyles();
//
//
//     return(
//
//         <Box p="5">
//             <Header/>
//             <ParticlesBackground/>
//             <Pagination
//                 classes={{ ul: classes.ul }}
//                 renderItem={(item) => (
//                     <PaginationItem
//                         components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//                         {...item}
//                     />)}
//                 count={count}
//                 color="primary"
//                 size="large"
//                 page={page}
//                 variant="outlined"
//                 shape="rounded"
//                 defaultPage={1}
//                 showFirstButton
//                 showLastButton
//                 onChange={handleChange}
//             />
//             <Box color="white">
//                 <List p="10" pt="3" spacing={2} color>
//                     {_DATA.currentData().map(v => {
//                         return (
//                             <Grid key={v.id} listStyleType="disc">
//                                 <Card sx={{ maxWidth: 400 }} style={{backgroundColor: "transparent", border: "3px solid green" }}>
//                                     <CardContent style={{color: "white"}}>
//                                         <span>{v.firstName}</span>{" "}
//                                         <Divider display="inline" orientation="vertical" />
//                                         <span> {v.lastName}</span>{" "}
//                                         <Divider display="inline" orientation="vertical" />
//                                         <span>
//               </span>
//                                     </CardContent>
//                                 </Card>
//                                 <br />
//                             </Grid>
//                         );
//                     })}
//                     <br/>
//                 </List>
//
//             </Box>
//
//
//
//             <Footer />
//         </Box>
//     );
// }

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import {Divider, List, ListItem, PaginationItem} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//import {default as data} from './MOCK_DATA.json'

import {default as data} from './MOCK_DATA.json'

import React, {Component, useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import usePagination from "./pagination";

import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import AdminService from "../services/admin.service";
import {DataGrid} from '@mui/x-data-grid';
import authHeader from "../services/auth-header";
import {GridApi} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {GridColDef} from "@mui/x-data-grid";
import {GridCellValue} from "@mui/x-data-grid";

import RecommendationService from "../services/recommendation.service";
import UsersService from "../services/users.service";


const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "white"
        }
    }
}));


const columns = [
    {field: 'firstName', headerName: 'ID'},
    {field: 'lastName', headerName: 'Username', width: 300},
    {field: 'email', headerName: 'Email', width: 300},
    {field: 'phone', headerName: ''}
]

export default function StatusRecommendations() {

    let [recommendation, setRecommendation] = useState([]);
    const columns: GridColDef[] = [
        {
            field: 'userFullName',
            headerName: 'Employee Name',
            width:180
        },
        {field: 'candidateFirstName', headerName: 'First Name'},
        {field: 'candidateLastName', headerName: 'Last Name'},
        {field: 'candidateEmail', headerName: 'Email', width: 300},
        {field: 'progressStatus', headerName:'Status', width:180},
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api: GridApi = params.api;
                    const thisRow: Record<string, GridCellValue> = {};

                    api
                        .getAllColumns()
                        .filter((c) => c.field !== "__check__" && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                        );

                    return alert(JSON.stringify(thisRow, null, 4));
                };

                return <Button onClick={onClick}>Click</Button>;
            }
        },
    ];

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


    const classes = useStyles();
    return (

        <Box p="5">
            <Header/>
            <ParticlesBackground/>

            <div style={{height: 700, width: '100%'}}>
                <DataGrid
                    style={{color:"black", backgroundColor:"white"}}
                    rows={recommendation}
                    columns={columns}
                    pageSize={5}
                    getRowId={(row) => row.id}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{newEditingApi: true}}

                />
            </div>

            {/*  <Pagination
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
            />*/}
            {/*<Footer />*/}
            <Box sx={{ mt: 0, mb: 0}}>
                <Footer />
            </Box>
        </Box>
    );
}