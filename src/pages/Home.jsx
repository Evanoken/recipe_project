import Food from '../assets/food.jpg';
import '../App.css';


function Home() {
  return (
    <>
      <div>
        <img src={Food} alt="Food" className='food-image'/>
      </div>
      <h1>Welcome to the Recipe App 😋</h1>
      <p>We are a recipe app that makes it easy to add and save your favorite recipes. With our app, you can:</p>
      <ul>
        <li>Save your favorite recipes for easy access.</li>
      </ul>
    </>
  );
}

export default Home;
