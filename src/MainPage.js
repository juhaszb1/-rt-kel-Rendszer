import React from 'react'
import Teacher from './Teacher'
import ViewPoint from './Viewpoint'

export default function MainPage() {
    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center' }}>Tanári értékelő</h1>
            <div style={{ border: '1px solid black', padding: '10px', margin: '10px'}}>
                <Teacher />
                <br/>
                <ViewPoint/>
            </div>
        </div>
    )
}