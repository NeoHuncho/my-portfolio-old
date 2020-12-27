import React from 'react'
import FrontPage from './front-page/frontPage';
import CodingEducation from './coding-education/codingEducation';
import Timeline from './timeline/timeline'

export default function aboutMe() {
    return (
        <div>
           <FrontPage />
           <Timeline  />
           <CodingEducation />
        </div>
    )
}
