import React from 'react'
import Link from 'gatsby-link'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function leftPad(num, length = 2) {
  return `${'0'.repeat(length - num.toString().length)}${num}`
}

const IndexPage = () => (

  <div
    className="earth"
    style={{
      backgroundImage: `url("${require(`${__dirname}/../images/momentum-dash-bgs/${leftPad(getRandomInt(1,14))}.jpg`)}")`
    }}
  >
    <div className="quote">
      <p>Climb mountains not so the world can see you</p>
      <h1>But so <strong>You</strong><br/>can see the <strong>World</strong></h1>
      <Link className="button" to="/">Refresh Background</Link>
    </div>
  </div>
)

export default IndexPage
