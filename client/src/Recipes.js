import React, { Fragment, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

const Recipes = () => {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [recipeExists, setRecipeExists] = useState(false);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getRecipeInfo = async () => {
    if (url === "") {
      return;
    }
    setLoading(true);
    setSuccess(false);
    const response = await fetch("http://localhost:5000/scrape-url?url=" + encodeURIComponent(url));
    const jsonData = await response.json();
    setRecipeInfo(jsonData);
    setLoading(false);
    setRecipeExists(true);
    console.log(jsonData);
  };

  const addRecipe = async () => {
    const response = await fetch("http://localhost:5000/add-recipe", {
        method: "POST",
        // mode: 'no-cors',
        headers: {
            "accepts":"application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeInfo)
    });
    if (response.status === 200) {
        setSuccess(true);
    }
}


  // console.log
  /* useEffect(() => {
    getRecipeInfo();
  }, ); */

  return (
    <div class="row mx-auto">
        <Form>
            <Form.Label>Enter recipe URL to scrape</Form.Label>
            <Form.Control type="text" onChange={e => setUrl(e.target.value)}/>
            <Button onClick={_ => getRecipeInfo()}>Submit</Button>
        </Form>
        {loading && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>}
        {
            recipeExists && !loading &&
            (<div class="row mx-auto">
                <div class="col">
                    <h1> </h1>
                    <h2>{recipeInfo.title} ({recipeInfo.id})</h2>
                    <h3>Instructions:</h3>
                    <div>{recipeInfo.instructions}</div>
                    <h3>Ingredients:</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeInfo.parsedIngredients.map((ingredient, i) => (
                                <tr key={i}>
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.qty}</td>
                                    <td>{ingredient.unit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {success ?
                     <div>Recipe added successfully!</div> :
                     <Button onClick={_ => addRecipe()}>Add Recipe</Button>}
                </div>
            </div>)
        }
    </div>
  );
};

export default Recipes;