import React from 'react'
import FrontPage from './front-page/FrontPageMyProjects';
import Specialties from './specialties/Specialties';
import Projects from './projects/Projecs'
export default function myProjects() {
    return (
        <div>
          <FrontPage />  
          <Specialties />
          <Projects />
        </div>
    )
}
