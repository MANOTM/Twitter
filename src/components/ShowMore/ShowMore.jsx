import './ShowMore.css'
import { Link } from 'react-router-dom'

export const ShowMore = ({to}) => {
  return (
    <Link to={to} className='show__more hover'>
        <p>Show more</p>
    </Link>
  )
}
