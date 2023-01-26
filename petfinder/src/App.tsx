import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , CardBody, CardTitle, CardSubtitle, CardProps} from 'reactstrap';
import PetList from './components/PetList';


function App() {


  return (
    <div className="App">
    <PetList />
    </div>
  );
}

export default App;
