import recipes from "./recipes.json";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px;
`;

function App() {
  return (
    <Wrapper>
      {recipes.map((r, i) => (
        <RecipeCard key={i} recipe={r} />
      ))}
    </Wrapper>
  );
}

export default App;