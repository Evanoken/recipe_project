import { useReducer, useState} from "react";
import { MdFavorite } from "react-icons/md";
import "./recipe.css";

const initialState = [
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
  {
    title: "Delicious Food",
    description: "This is a description of the delicious food.",
    steps: [
      "Step 1: Prepare the ingredients",
      "Step 2: Cook the food",
      "Step 3: Serve and enjoy",
    ],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TO_FAVORITES":
      return state.map((card) => {
        if (card.id === action.id) {
          card.isFavorite = true;
        }
        return card;
      });
    default:
      return state;
  }
};

const Recipe = () => {
  const [cards, dispatch] = useReducer(reducer, initialState);

  const [favorites, setFavorites] = useState([]);

  const handleSaveToFavorites = (id) => {
    dispatch({
      type: "SAVE_TO_FAVORITES",
      id,
    });
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, id];
      return newFavorites;
    });
  };

  return (
    <div className="main-content">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img className="img" src="./src/pages/food image.webp" alt="Food" />
          <div>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleSaveToFavorites(card.id);
                alert("saved to favorites");
              }}
            >
              <a href="./Favourite"><MdFavorite /></a>
            </button>
          </div>
          <div className="card-details">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <ul className="card-steps">
              {card.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;