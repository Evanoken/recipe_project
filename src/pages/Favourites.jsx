import { useState } from 'react'
import {GrFavorite} from 'react-icons/Gr'
import Image from '../assets/freshia.jpg'
import './favorites.css'
function Favourites() {
  const [showText, setShowText] = useState ('true')
  const [fav, setfavorites] = useState([])
  // const [state, dispatch] = useReducer (reducer, {})

  const showinstructions = () => {
    setShowText (!showText);
  }
  const addRecipe = (e) => {
      e.prevent.default();
      setfavorites
  }
  return (
    <>
      <img src={Image} /> <br />
      <button onClick={addRecipe}><GrFavorite className="fav"/></button>
      <button onClick={showinstructions}>Read more / collapse</button>
      {showText && 
      <div>
        <p><h3>Ingredients for Pizza:</h3>

For the dough:

2 ¼ teaspoons (1 packet) active dry yeast
1 teaspoon sugar
1 cup warm water
2 ½ cups all-purpose flour
2 tablespoons olive oil
1 teaspoon salt
For the sauce:

1 can (14 ounces) crushed tomatoes
2 cloves garlic, minced
1 teaspoon dried oregano
1 teaspoon dried basil
Salt and pepper to taste
For the toppings:Shredded mozzarella cheese</p> 
        <p> 
          <h3>Instructions</h3>

In a small bowl, combine the yeast, sugar, and warm water. Stir gently and let it sit for about 5 minutes until the mixture becomes foamy.

In a large mixing bowl, combine the flour and salt. Make a well in the center and pour in the yeast mixture and olive oil. Stir until the dough starts to come together.

Transfer the dough to a floured surface and knead it for about 5-7 minutes until it becomes smooth and elastic. You can also use a stand mixer with a dough hook attachment for this step.

Place the dough in a greased bowl and cover it with a clean kitchen towel. Let it rise in a warm place for about 1-2 hours or until it doubles in size.

Preheat your oven to 475°F (245°C). If you have a pizza stone, place it in the oven during preheating.

While the dough is rising, prepare the pizza sauce. In a saucepan, combine the crushed tomatoes, minced garlic, dried oregano, dried basil, salt, and pepper. Cook over medium heat for about 10 minutes, stirring occasionally. Remove from heat and set aside.

Once the dough has risen, punch it down to release the air. Divide the dough in half if you want to make two pizzas or keep it whole for a larger pizza.

Roll out the dough on a floured surface to your desired thickness. If you're using a pizza stone, transfer the rolled-out dough onto a pizza peel or an inverted baking sheet dusted with cornmeal or flour.

Spread a thin layer of the pizza sauce over the dough, leaving a border around the edges for the crust.

Sprinkle shredded mozzarella cheese evenly over the sauce, and then add your desired toppings.

Carefully transfer the pizza onto the preheated pizza stone or a baking sheet. Bake in the preheated oven for about 12-15 minutes or until the crust is golden brown and the cheese is melted and bubbly.

Remove the pizza from the oven and let it cool for a few minutes. Slice and serve hot.

Enjoy your homemade pizza!</p>
        </div>}
    </>
  )
}

export default Favourites