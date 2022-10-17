import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import {Divider, List, ListItem, PaginationItem} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import {default as data} from './MOCK_DATA.json'
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

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "white"
        }
    }
}));

const columns = [
    {field: 'userID', headerName: 'ID'},
    {field: 'username', headerName: 'Username', width: 300},
    {field: 'email', headerName: 'Email', width: 300},
    {field: '', headerName: ''}
]

export default function StatusRecommendations() {
    let [spage, setsPage] = useState(1);
    const [data, setData] = useState([]);
    console.log("INSIDE ALL USERS COMPONENTS");
    var users = [];
    const columns: GridColDef[] = [
        {field: 'userID', headerName: 'ID'},
        {field: 'firstName', headerName: 'First Name'},
        {field: 'lastName', headerName: 'Last Name'},
        {
            field: 'roles',
            headerName: 'Role',
            width: 180,
            renderCell: params => (
                <ul className="flex" >
                    {params.value.map((role, index) => (
                        <li key={index}>{role.name}</li>
                    ))}
                </ul>
            ),
            type: 'string'},
        {field: 'username', headerName: 'Username', width: 300},
        {field: 'email', headerName: 'Email', width: 300},
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
        AdminService.getAllUsers().then((response) => {
            const allData = response.data;
            console.log("Inside getData(): allData variable: ")
            console.log(allData);
            setData(allData);
            // users = allData.slice();
            // console.log(typeof users);
            // users.forEach((user) => {
            //     const newRole = user.roles[0].name;
            //     user.role = newRole;
            // });
            // console.log(users);

        }).catch(error => console.error(error));
    };
    useEffect(() => {
        getData();
        console.log("DATA OBJECT: ");
        console.log(data);
    }, []);

    const PER_PAGE = 10;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setsPage(p);
        _DATA.jump(p);
    };

    const classes = useStyles();
    return (

        <Box p="5">
            <Header/>
            {/*<ParticlesBackground/>*/}

            <div style={{height: 700, width: '100%'}}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={3}
                    getRowId={(row) => row.userID}
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
        </Box>
    );
}