import React from 'react';

function CoreConcepts({image,title,description}) {
  return(
    <li>
      <img src={image} alt="adadf" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
     );
}

export default CoreConcepts;