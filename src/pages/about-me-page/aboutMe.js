import React from 'react'
import FrontPage from './front-page/FrontPageAboutMe';
import MoreInformation from './more-information/moreInformation';
import Timeline from './timeline/timeline'

export default function aboutMe() {
    return (
        <div>
           <FrontPage />
           <Timeline  />
           <MoreInformation />
        </div>
    )
}
