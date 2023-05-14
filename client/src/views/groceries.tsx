import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styled from "@emotion/styled";
import { Checkbox, IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

interface Grocery {
  _id: string;
  name: string;
  quantity: number;
  addedBy: string;
  addedOn: Date;
  purchased: boolean;
}

const Groceries = () => {
  const [groceries, setGroceries] = useState<Grocery[]>([]);

  const fetchGroceries = async () => {
    try {
      const response = await fetch("http://localhost:5001/groceries");
      if (!response.ok) {
        throw new Error("Failed to fetch groceries");
      }
      const data = await response.json();
      const groceriesData = data.groceries; // Extract the groceries array
      setGroceries(groceriesData);
    } catch (error) {
      console.error(error);
      // Handle error, show error message, or retry the request
    }
  };

  const deleteGrocery = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5001/groceries/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete grocery");
      }
      // Remove the deleted grocery from the local state
      setGroceries(groceries.filter((grocery) => grocery._id !== id));
    } catch (error) {
      console.error(error);
      // Handle error, show error message
    }
  };

  useEffect(() => {
    fetchGroceries();
  }, []);

  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Delete.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groceries.map((grocery) => (
              <TableRow key={grocery._id}>
                <TableCell>
                  <Checkbox checked={grocery.purchased} />
                </TableCell>
                <TableCell>{grocery.name}</TableCell>
                <TableCell>{grocery.quantity}</TableCell>

                <TableCell>
                  <IconButton onClick={() => deleteGrocery(grocery._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default Groceries;

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "5rem",
  backgroundColor: "#F4EEE0",
  flexWrap: "wrap",
});
