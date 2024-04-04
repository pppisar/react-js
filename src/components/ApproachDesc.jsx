// function ApproachDesc(props) {
function ApproachDesc({title, description}) {
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  )
}

export default ApproachDesc