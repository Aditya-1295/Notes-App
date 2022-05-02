import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Createarea from "./Createarea"





function App(){

    const [notes,setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes =>{
            return [...prevNotes,newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header/>
            <Createarea
             onAdd={addNote}
            />
            {notes.map((newNote,index) =>{
                return <Note 
                    key={index}
                    id={index}
                    title={newNote.title} 
                    content={newNote.content}
                    onDelete={deleteNote} 
                />
            })

            }
            <Footer/>
        </div>
    )  
}

export default App;