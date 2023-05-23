import {useSelector} from 'react'
const Favorites = () => {
  const [favorites, setFavorites] = useSelector((state) => state.recipes.favorites);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((card) => (
          <li key={card.id}>{card.title}</li>
        ))}
      </ul>
      <button onClick={() => {
        setFavorites((prevFavorites) => {
          const newFavorites = prevFavorites.filter((card) => card.id !== this.props.cardId);
          return newFavorites;
        });
      }}>Remove from favorites</button>
    </div>
  );
};

export default Favorites;
