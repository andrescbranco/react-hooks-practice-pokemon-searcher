import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  const [formData, setFormData] = useState({
    name : "",
    hp: 0,
    sprites: {
      front: "",
      back: ""
    }
  })

  
  
  function handleSubmit(e){
    e.preventDefault()

    const newPokemon = {
      name : formData.name,
      hp : formData.hp,
      sprites : {
        front: formData.sprites.front,
        back: formData.sprites.back
      }
    }
    
      fetch('http://localhost:3001/pokemon',{
        method : 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body : JSON.stringify(newPokemon)
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        onAddPokemon(data)
  
      })
    

  }


  function handleChange(e) {
    if (e.target.name === "front" || e.target.name === "back") {
      setFormData({
        ...formData,
        sprites: {
          ...formData.sprites,
          [e.target.name]: e.target.value
        }
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value = {formData.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value = {formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
