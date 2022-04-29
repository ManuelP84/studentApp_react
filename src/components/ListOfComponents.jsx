import { useState } from "react"
import ListStudent from "./ListStudent"

const ListOfStudents = () =>{


    const [list, setList] = useState([])

    const [document, setDocument] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const addNewStudent = (event) =>{
        event.preventDefault();
        if(name && lastName){
            const student = {
                document,
                name,
                lastName
            }
            setList([...list, student])
        }
    }

    const addDocument = (event) =>{
        setDocument(event.target.value)
    }

    const addName = (event) =>{
        setName(event.target.value)
    }

    const addLastName = () =>{
        setLastName(event.target.value)
    }


    return(
        <div>            
            <h1>Students list:</h1>
            <form>
                <input onChange={addDocument} type="text" name="idDocument" placeholder="C.C"/>
                <input onChange={addName} type="text" name="name" placeholder="Name"/>
                <input onChange={addLastName} type="text" name="lastName" placeholder="Last name"/>
                <button type="reset" onClick={addNewStudent}>Add new student!</button>
                <ListStudent students={list}/>
            </form>
        </div>
    )

}

export default ListOfStudents