import style from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/userInsertDocument";



const CreatePost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const {user} = useAuthValue()
  
  const {insertDocument, response} = useInsertDocument("posts")


  const handleSubmit = (e) => {
   
    e.preventDefault();
    setFormError("")

    // validate image url
    if (/^https?:\/\//.test(image)) {
      navigate("/");
    } else {
      setFormError("A imagem precisa ser uma URL");
      return
    }

    // criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
    // checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError("Por favor preencha todos os campos!")
    }
    // if (formError) return

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    // redirect to home page
    navigate("/");

  };

  return (
    <div className={style.create_post}>
      <h2> Criar Post </h2>
      <p> Escreva sobre o que quiser e compartilhe o seu conhecimento! </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense em um bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem: </span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo: </span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags: </span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>

        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error"> {response.error} </p>}
        {formError && <p className="error"> {formError} </p>}
      </form>
    </div>
  );
};

export default CreatePost;
