import { useState } from "react"

const ListOfStudents = () =>{


    const [list, setList] = useState([])

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const addNewStudent = (event) =>{
        event.preventDefault();
        if(name && lastName){
            const student = {
                name,
                lastName
            }
            setList([...list, student])
        }
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
                <label>Name: </label>
                <input onChange={addName} type="text" name="name"/>
                <label>Last Name: </label>
                <input onChange={addLastName} type="text" name="lastName"/>
                <button onClick={addNewStudent}>Add new student!</button>
                {list.map((student, index) => <div>
                    {student.name} {student. lastName}
                </div>
                )}
            </form>
        </div>
    )

}

export default ListOfStudents