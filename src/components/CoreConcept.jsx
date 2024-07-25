
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}



  {/* 
    YOU CAN USE OBJECT DESCRUTING OF THE PROPS SO YOU DONT NEED TO DO 
    PROPS.TITLE you can use title
  */}