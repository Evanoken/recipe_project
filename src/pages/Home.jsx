import Food from "../assets/food.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="containerH">
        <img src={Food} alt="Food" className="food-image" />
        <div className="content">
          <h1>Welcome to the Recipe App 😋</h1>
          <p>
            We are a recipe app that makes it easy to add and save your favorite
            recipes. With our app, you can:
          </p>
          <ul>
            <li>Save your favorite recipes for easy access.</li>
          </ul>
          <li>
            <h2>Related recipes:</h2>
          </li>
          <ul>
            <li>Peanut Butter Cookies</li>
            <li>Oatmeal Raisin Cookies</li>
            <li>Snickerdoodle Cookies</li>
            <li>White Chocolate Macadamia Nut Cookies</li>
            <li>Gingerbread Cookies</li>
          </ul>
        </div>
        <div className="div"></div>
      </div>
    </>
  );
}

export default Home;
