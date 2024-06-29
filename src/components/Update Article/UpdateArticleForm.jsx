import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const UpdateArticleForm = () => {

  const [post, setPost] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    id: uuidv4(),
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPost(prevPost => ({
      ...prevPost,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/posts/${id}`, post)
      .then((res) => {
        console.log(res);
        navigate("/articles");
      })
      .catch((err) => {
        console.error("Error while modifying user:", err);
      });
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
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Titre</FormLabel>
          <Input
            name="name"
            placeholder="Article Title"
            value={post.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Categorie</FormLabel>
          <Select
            name="category"
            placeholder="Select Categorie"
            value={post.category}
            onChange={handleChange}
          >
            <option value="BreakFast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </Select>
        </FormControl>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label>Upload Image</label>
          </div>
          <div>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={post.description}
            onChange={handleChange}
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
          type="submit"
        >
          Ajouter
        </Button>
      </form>
    </div>
  );
};

export default UpdateArticleForm;
