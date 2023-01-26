import React, { useState } from 'react';
import logo from './logo.svg';
import './PetList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , CardBody, CardTitle, CardSubtitle, CardProps} from 'reactstrap';
import PetCard from './PetCard'
import Pet from '../interfaces/PetInterface'
import image from './images/cat1.jpg'


function PetList(){
    let [petList, setPetList] = useState<Pet[]>(
        [
          {
            image: './images/cat1.jpg',
            name: "bouncy",
            type: "bengal",
            cat: true,
            isAdopted: false,
            id:1
        },
        {
          image: './images/cat2.jpg',
          name: "marko",
          type: "russian blue",
          cat: true,
          isAdopted: false,
          id:2
        },
        {
          image: './images/cat3.jpg',
          name: "betty",
          type: "calico",
          cat: true,
          isAdopted: false,
          id:3
      },
      {
        image: './images/cat4.jpg',
        name: "bail",
        type: "american shorthair",
        cat: true,
        isAdopted: false,
        id:4
    },
    {
      image: './images/dog1.jpg',
      name: "shucks",
      type: "corgi",
      cat: false,
      isAdopted: false,
      id:5
    },
    {
      image: './images/dog2.jpg',
      name: "shelly",
      type: "mixed breed",
      cat: false,
      isAdopted: false,
      id:6
    },
    {
      image: './images/dog3.jpg',
      name: "pony",
      type: "golden retriever",
      cat: false,
      isAdopted: false,
      id:7
    },
    {
      image: './images/dog4.jpg',
      name: "dalton",
      type: "beagle mix",
      cat: false,
      isAdopted: false,
      id:8
    }
        ]
      )
    
    return(
        <div className="petListContainer">
            {/* {console.log(petList)} */}
            {/* <img src={image} alt="" /> */}
            {petList.map((x:Pet)=>{
        
               return <div key={x.id}><PetCard pet={x}/></div>
            })}
        </div>
    )
}

export default PetList