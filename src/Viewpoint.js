import React, { useState, useEffect } from 'react';

export default function ViewPoint() {
    const [viewpoint, setViewPoint] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7253/api/Szempont")
            .then(res => res.json())
            .then(data => setViewPoint(data))
    }, [])

    return (
        <div>
            <p>Szempont: </p>
            <select style={{ width: '50%' }} className="form-select" aria-label="Default select example">
                {
                    viewpoint.map((item) => (
                        <option key={item.id} value={item.id}>{item.szempontNev}</option>
                    ))
                }
            </select>
        </div>
    )
}