import React, { Fragment } from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <Fragment>
              <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)} >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
              </div>
            </Fragment>
          );
        })
      )}
    </Fragment>
  );
};
export default Card;
