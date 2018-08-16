import React from 'react'

import people from '../../../images/people.jpg'

import ContentCard from '../../UI/ContentCard/ContentCard'

const WelcomeCard = () => (
  <ContentCard inverse={true}>
    <img className="" src={people} alt="happy children" />
    <div className="article-text">
      <h2>All Are Welcome</h2>
      <p>
        Trinity Episcopal Church is an open and affirming, welcoming community.
        We strive to love our neighbors as ourselves and respect the dignity of
        every person. We welcome all to find a spiritual home in the Episcopal
        Church. We welcome everyone to the table to worship together to the
        Glory of God. Amen.
      </p>
    </div>
  </ContentCard>
)

export default WelcomeCard
