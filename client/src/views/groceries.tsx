import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styled from "@emotion/styled";
import { Checkbox, IconButton } from "@mui/material";

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/config";

import DeleteIcon from "@mui/icons-material/Delete";

interface Grocery {
  id: string;
  name: string;
  quantity: number;
  addedBy: string;
  addedOn: Date;
  purchased: boolean;
}

const Groceries = () => {
  const [groceries, setGroceries] = useState<Grocery[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const fetchGroceries = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "groceries"));
      const groceriesData: Grocery[] = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Grocery)
      );
      setGroceries(groceriesData);
    } catch (error) {
      console.error(error);
      // Handle error, show error message, or retry the request
    }
  };

  const createGrocery = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const groceryData: Grocery = {
        id: "", // Placeholder value, will be assigned a unique ID later
        name: name,
        quantity: quantity,
        addedBy: "user123", // Replace with the appropriate user identifier
        addedOn: new Date(),
        purchased: false,
      };

      const docRef = await addDoc(collection(db, "groceries"), groceryData);
      groceryData.id = docRef.id;

      setGroceries([...groceries, groceryData]);
      setName("");
      setQuantity(0);
    } catch (error) {
      console.error(error);
      // Handle error, show error message
    }
  };

  const deleteGrocery = async (id: string) => {
    try {
      await deleteDoc(doc(db, "groceries", id));
      setGroceries(groceries.filter((grocery) => grocery.id !== id));
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
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groceries.map((grocery) => (
              <TableRow key={grocery.id}>
                <TableCell>
                  <Checkbox checked={grocery.purchased} />
                </TableCell>
                <TableCell>{grocery.name}</TableCell>
                <TableCell>{grocery.quantity}</TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteGrocery(grocery.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FormContainer onSubmit={createGrocery}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <Button type="submit" variant="contained">
          Add Grocery
        </Button>
      </FormContainer>
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

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "2rem",
});
