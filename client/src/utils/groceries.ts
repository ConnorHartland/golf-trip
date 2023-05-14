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
