import { Link } from 'react-router-dom'
import './PageNotFound.css'


function PageNotFound() {
  return (
    <div className='not-found'>
      <h1>Sorry</h1>
      <p>That page cannot be found </p>
      <Link to='/'>Back to homepage...</Link>
    </div>
  )
}

export default PageNotFound