import React from 'react';
  
const RenderIngredients = ({ingredients,isFetching}) => {


    return(  
        <div>
            <p>{isFetching ? 'Checking...' : ''}</p>
            {ingredients &&
            ingredients.map((ingredient, index)=> {
                return (
                <li key={index}>{index}: {ingredient}</li>
                )
            })}
        </div>
    );
}

export default RenderIngredients