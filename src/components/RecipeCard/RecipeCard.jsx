import { Card, Img } from "./RecipeCard.styled";
import Difficulty from "../Difficulty/Difficulty";

function RecipeCard({ recipe }) {
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <Card highlight={recipe.difficulty === 2}>
      <Img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>

      <p>
        {recipe.time} min • {recipe.servings} servings
      </p>

      <Difficulty level={recipe.difficulty}>
        {levels[recipe.difficulty] || "Unknown"}
      </Difficulty>
    </Card>
  );
}

export default RecipeCard;