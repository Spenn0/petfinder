import React, { useState } from 'react';
import logo from './logo.svg';
import './PetCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , CardBody, CardTitle, CardSubtitle, CardProps} from 'reactstrap';
import Pet from '../interfaces/PetInterface';
import image from './images/cat1.jpg'

interface PetProps{
   pet:Pet
  }
function PetCard(props:PetProps){
    // {console.log(props.image)}
    let image = props.pet.image

    return(
        <div className="petCardContainer">
            <img src={image} alt="" />
            {/* <img src={props.pet.image}></img> */}
            <img src={props.pet.image} alt="" />
            

            <div className="petCardText">
                <h3>{props.pet.name}</h3>
                <p>{props.pet.type}</p>
            </div>
        </div>
    )
}
export default PetCard