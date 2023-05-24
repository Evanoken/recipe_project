import {useState} from 'react'
import "./Fevorite.css";

function Favorites(){

  const [fevorite, setFavorite] = useState({});

  const handleChange = (event) =>{
    const {name ,value} = event.target;
    setFavorite(values =>({...values,[name]: value }))
  }
   
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(fevorite. inputrecipe);
  }

  return (
    <div className='content'>
      <div id='intro'><h1>Add Your Favorites recipes</h1></div>
      <div className='main1'>
    <div className='Tform'>  <form onSubmit = {handleSubmit}>
        <label>Enter your fevorite dish:<br/>
            <input type="text" name = "inputrecipe"  value = {fevorite.inputrecipe || ""} onChange={handleChange} />
             </label>
             <br/><br/>
             <label>Enter the dish ingredients:<br/>
            <input type="text" name = "inputrecipe"  value = {fevorite.inputrecipe || ""} onChange={handleChange} />
             </label>
             <br/><br/>

        <label>Add Instuctions:<br/>
            <textarea type="text"  name="add instructions" value={fevorite.instruction || ''} onChange={handleChange} />
        </label>
        <br/>
        <label>
            <select name='foottypes' value={fevorite.dishes || ""} onChange={handleChange}>
                <options value="Piza">Piza</options>
                <option value="Ugali Fish">Ugali fish</option>
                <option value="supuya pweza">Supu ya pweza</option>
            </select>
        </label>
        <br/><br/>
        <input type="submit" /><br/><br/>

      </form>
      </div>
      <div>
        <img src='./src/pages/Africa.avif' style={{width:"550px",height:"400px", borderRadius:"8px"}}/>
      </div>

     
    
      </div>
      <div className='dish2'>
       <div> <img src="./src/pages/fish.png" style={{width:"200px", height:"200px"}}/>
       <pre><h4>Fish dish</h4>
       Step 1: Bonk and bleed out the fish. <br/>
       In order to minimize suffering for the fish<br/>
     prevent spoilage of the meat, fish must be "bonked"<br/>
        and bled out immediately after removing the hook. ...<br/>

Step 2: Remove scales or skin. ...<br/>

Step 3: Open the belly and remove the innards. ...<br/>

Step 4: Prepare for cooking. ...<br/>

Step 5: Cook the fish.
       </pre>
       </div>
       <br/>
       <div>
        <img src="./src/pages/piza.avif" style={{width:"200px", height:"200px"}}/>
        <pre><h4>Home made piza</h4>
        Roll out the dough:<br/>
Transfer the dough to the baking sheet :<br/>

Sprinkle some flour or cornmeal on the baking <br/>
Prepare the pizza:<br/>
Add cheese and toppings:<br/>

Bake the pizza:<br/>

Slice and serve:</pre>
       </div>
    
      </div>
    </div>
  );
};

export default Favorites;
