export function CoreConcepts({image, title, description}){
    return(
        <li>
        <img src={image} alt={description} />
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    );
}

export function CoreConceptUsingObject({concept}){
    const {image,title,description} = concept;
    return(
        <li>
        <img src={image} alt={description} />
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    );
}

export function CoreConceptUsingRestProperty({image = "jhdbc", ...concept}){   //passing default value for image prop, incase not supplied
    const {title, description} = concept;
    return(
        <li>
        <img src={image} alt={description} />
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    );
}
