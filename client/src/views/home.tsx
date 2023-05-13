import styled from "@emotion/styled";
import { Box, Card, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container elevation={3}>
      <Link to="/login">
        <CardContainer>Schedule</CardContainer>
      </Link>
      <Link to="/login">
        <CardContainer>Schedule</CardContainer>
      </Link>
    </Container>
  );
};

export default HomePage;

const Container = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem",
  backgroundColor: "#F4EEE0",
});

const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem",
});
