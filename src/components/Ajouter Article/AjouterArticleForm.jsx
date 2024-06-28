import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { MdMargin } from "react-icons/md";

const AjouterArticleForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        marginTop: 100,
      }}
    >
      <FormControl isRequired>
        <FormLabel>Titre</FormLabel>
        <Input
          placeholder="Article Title"
          value={title}
          onChange={handleTitleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Categorie</FormLabel>
        <Select
          placeholder="Select Categorie"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="BreakFast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </Select>
      </FormControl>
      <div style={{ marginTop: "20px" }}>
        <div style={{marginBottom: "15px"}}>
          <label>Upload Image</label>
        </div>
        <div>
          <input type="file"></input>
        </div>
      </div>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter description"
          size="sm"
        />
      </FormControl>
      <Button
        marginTop={17}
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Ajouter
      </Button>
    </div>
  );
};

export default AjouterArticleForm;
