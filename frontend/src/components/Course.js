import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Course() {
    const { id } = useParams(); 
    const [course, setCourse] = useState({});

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:5000/courses/${id}`)
        .then(res => res.json())
            .then(data => {
                setCourse(data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
      <div className="course">
        <div className="row title">
            <div className="col-sm">
                <h3>{course.name}</h3>
            </div>
        </div>
        <div className="row info"></div>
      </div>
    );
}
  
export default Course;