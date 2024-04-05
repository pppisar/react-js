import ApproachDesc from "./ApproachDesc"
import { ways } from '../data'

export default function TeachingSection() {
  return (
    <section>
      <h3>Our approach</h3>
      <ul>
        {/* <ApproachDesc {...ways[0]} />
        <ApproachDesc {...ways[1]} />
        <ApproachDesc {...ways[2]} />
        <ApproachDesc {...ways[3]} /> */}

        {ways.map(way => <ApproachDesc key={way.title} {...way} />)}

      </ul>
    </section>
  )
}