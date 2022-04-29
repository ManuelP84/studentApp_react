
const ListStudent = (props) =>{

    
    return(
        props.students.map((student, index) => 
            <div>
                {student.document} --- {student.name} {student. lastName}
            </div>
        )
    )
}


export default ListStudent