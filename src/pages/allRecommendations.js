import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import { Divider, List, ListItem, Modal, PaginationItem } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import usePagination from "./pagination";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AdminService from "../services/admin.service";
import { DataGrid } from "@mui/x-data-grid";
import authHeader from "../services/auth-header";
import { GridApi } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { GridColDef } from "@mui/x-data-grid";
import { GridCellValue } from "@mui/x-data-grid";

import RecommendationService from "../services/recommendation.service";
import UsersService from "../services/users.service";
import ModalRecommendation from "./modalRecommendation";
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "white",
    },
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const columns = [
  { field: "firstName", headerName: "ID" },
  { field: "lastName", headerName: "Username", width: 300 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "phone", headerName: "" },
];

export default function StatusRecommendations() {
  let [recommendation, setRecommendation] = useState([]);
  let [open, setOpen] = useState(false);
  let [currentRecommendation, setCurrentRecommendation] = useState({});

  const handleClose = () => {
    setOpen(false);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "candidateFirstName", headerName: "First Name" },
    { field: "candidateLastName", headerName: "Last Name" },
    { field: "candidateEmail", headerName: "Email", width: 300 },
    { field: "progressStatus", headerName: "Status", width: 180 },
    {
      field: "userFullName",
      headerName: "Employee Name",
      width: 180,
    },
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
          console.log("currentRecommendation: ");
          setCurrentRecommendation(
            recommendation.find((element) => element.id === thisRow.id)
          );
          console.log(currentRecommendation);
          setOpen(true);
        };

        return <Button onClick={onClick}>Click</Button>;
      },
    },
  ];

  const getData = () => {
    RecommendationService.getAllRecommendations()
      .then((response) => {
        const data = response.data;
        console.log("Inside getData(): allData variable: ");
        console.log(data);
        setRecommendation(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    console.log("Recommendation objects:");
    console.log(recommendation);
  }, []);

  const classes = useStyles();
  return (
    <Box p="5">
      <Header />
      <ParticlesBackground />

      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          style={{ color: "black", backgroundColor: "white" }}
          rows={recommendation}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.id}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: "80%" }}>
            <h2 id="parent-modal-title">
              Recommendation #{currentRecommendation.id}:{" "}
              {currentRecommendation.candidateFirstName}{" "}
              {currentRecommendation.candidateLastName}{" "}
            </h2>
            <div id="parent-modal-description">
              <ModalRecommendation recommendation={currentRecommendation} />
            </div>
          </Box>
        </Modal>
      </div>

      const questionsName = [1, 2, 3]

      questionsName.map(id => id: values[id]


      <Box sx={{ mt: 0, mb: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}
