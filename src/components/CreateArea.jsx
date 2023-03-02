import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });
  function handleChnage(event){
    const {name, value} = event.target;

    setNote(prevState =>{
      return {
        ...prevState,
      [name]:value
      }
    });
  }


function handleClick(event){
  props.onAdd(note);
  setNote({
    title:"",
    content:""
  });
  event.preventDefault();
}
  return (
    <div>
      <form>
        <input name="title" onChange={handleChnage}  value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChnage} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
