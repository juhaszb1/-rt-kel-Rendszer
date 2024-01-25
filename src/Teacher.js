import React, { useState, useEffect } from 'react';

export default function Teacher() {
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7253/api/Screening")
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])

    return (
        <div>
            <p>Tanár neve: </p>
            <select style={{ width: '50%' }} className="form-select" aria-label="Default select example">
                {
                    teacher.map((item) => (
                        <option key={item.id} value={item.id}>{item.nev}</option>
                    ))
                }
            </select>
        </div>
    )
}