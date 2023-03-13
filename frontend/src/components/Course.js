import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Course() {
    const { id } = useParams(); 
    const [course, setCourse] = useState({});
    const [playerHistory, setPlayerHistory] = useState({});

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
        <div className="row holes">
            <table>
                <thead>
                    <tr>
                        <th>Hole #</th>
                        <th>Par</th>
                        <th>Length</th>
                        <th>Average Score</th>
                    </tr>
                </thead>
                <tbody>
                    {course.currentLayout.holes.forEach(hole => {
                        <tr>
                            <td>{hole.number}</td>
                            <td>{hole.holeLayouts.par}</td>
                            <td>{hole.holeLayouts.length}</td>
                            <td>{hole.number}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        <div className="row info"></div>
      </div>
    );
}
  
export default Course;