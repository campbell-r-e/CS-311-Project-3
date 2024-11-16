function search(){
  window.location.href = '/search/search';
}
function insert_ingredients(){
window.location.href = '/insert_ingredients/insert_ingredients'
}
function insert_methods(){
  window.location.href = '/insert_methods/insert_methods'
}
function insert_steps(){
  window.location.href = '/insert_methods/insert_methods'
}
function generate(){
  window.location.href = '/generate_recipe/generate_recipe'
}



export default function Home() {
  return (
    <div>
     

     <div>
     <br></br>
     <button onClick={generate}>Generate Reciepe</button>
     <br></br>
     <button onClick={insert_steps}>Insert Cooking steps</button>
                 <br></br>
     <button onClick={insert_methods}>insert cooking methods</button>
      <br></br>
     <button onClick={insert_ingredients}>insert Ingredients</button>
     <br></br>
     <button onClick={search}>search recipes</button>
      </div>
      

    </div>
  );
}
