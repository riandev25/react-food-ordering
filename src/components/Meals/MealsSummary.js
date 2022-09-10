import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious</h2>
      <p>
        Choose your favorite meal from our brand selection of available meals
        and enjoy a delicious lunch or dinenr at home.
      </p>
      <p>
        All or meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
