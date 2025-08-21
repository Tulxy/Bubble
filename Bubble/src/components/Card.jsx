
function Card({title, description}){

  return(
    <div className="p-5 bg-primary m-2 rounded-4 mb-4 card-width shadow-lg">
      <h1> {title} </h1>
      <p> {description} </p>
    </div>
  );
}

export default Card
