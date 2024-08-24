//to display individual recipes
const Recipe = ({ recipe }) => {
    return (
      <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '10px 0' }}>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    );
  };
  
  export default Recipe;
