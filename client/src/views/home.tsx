import styled from "@emotion/styled";
import { Box, Card, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUNDS } from "../constants";

const HomePage = () => {
  return (
    <Container elevation={3}>
      <Link to="/groceries">
        <CardContainer>Groceries</CardContainer>
      </Link>
      <Link to="/schedule">
        <CardContainer>Schedule</CardContainer>
      </Link>
      <CourseContainer>
        {ROUNDS.map((round) => (
          <>
            <div>{round.course}</div>
            <div>{round.time}</div>
          </>
        ))}
      </CourseContainer>
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
  flexWrap: "wrap",
});

const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem",
});

const CourseContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem",
});
