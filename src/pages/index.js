import * as React from "react"
import '../styles/index-styles.sass';
import blackphillip from '../images/black-phillip.jpeg'
import jurassicgoat from '../images/jurassicgoat.jpeg'

const IndexPage = () => {
  return (
    <body>
      <header>Goats on Film</header>
      <main>
        <title>Goats on Film</title>
        <p>Some notable goats</p>
        <ul>
          <li>
            <h4>Black Phillip</h4>
            <span>The Witch</span>
            <p>dir. Robert Eggers, 2015</p>
            <img src={blackphillip} alt="Black Phillip"></img>
            <p>Wouldst thou like to live deliciously?</p>
            <p>Rating:
              <span>
                🐐🐐🐐🐐🐐
              </span>
            </p>
          </li>
          <li>
            <h4>Anonymous Goat</h4>
            <span>Jurassic Park</span>
            <p>dir. Steven Spielberg, 1994</p>
            <img src={jurassicgoat} alt="Jurassic Park Goat"></img>
            <p>This goat has nothing to say.</p>
            <p>Rating:
              <span>
                🐐🐐🐐
              </span>
            </p>
          </li>
        </ul>
      </main>
    </body>
  )
}

export default IndexPage;
