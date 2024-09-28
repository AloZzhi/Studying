
import PropTypes from 'prop-types'

export default function List(props) {
  console.log(props);


  return (
    <div>
      <ul>
        {
          props.colors.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

List.propTypes = {
  colors: PropTypes.array
}