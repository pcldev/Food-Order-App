import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-http-18344-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Cannot get data from the server");
      }
      const data = await response.json();
      const DUMMY_MEALS = [];
      for (const key in data) {
        DUMMY_MEALS.push(data[key]);
      }
      setMeals(DUMMY_MEALS);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setIsLoading(false);
  };
  useEffect(() => {
    const dataHandle = async () => {
      await fetchData();
      console.log("DONE");
    };
    dataHandle();
  }, []);
  console.log("...");
  let mealsList;
  if (isLoading) {
    mealsList = <p>Loading...</p>;
  } else if (error) {
    mealsList = <p>{error}</p>;
  } else
    mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
