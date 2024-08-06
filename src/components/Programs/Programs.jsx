import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Products</span>
            <span className='stroke-text'>for your requirements</span>
        </div>
        <div className="program-categories">
            {programsData.map((program) => (
                <div className={`category ${program.heading === 'Kerbs' ? 'category-kerbs' : ''}`}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <button className='btn'>View More</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
