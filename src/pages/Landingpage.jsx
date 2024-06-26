import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
    <div className="row mt-5 w-100 justify-content center align-items-center">
    <div className="col-md-1"></div>
    <div className="col-md-5 p-5">
      <h3>Welcome to<span classname='text-warning'> Media Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque obcaecati, ipsa, vel autem beatae quidem veritatis quod assumenda nisi officia animi modi excepturi eum suscipit non ullam deleniti. Commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, itaque eos rem nobis quia perspiciatis cum? Aliquam maiores ea non assumenda, optio praesentium ullam doloremque quis quos rem voluptatum suscipit.</p>
      <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecorationColor:'none',color:'white'}}>Get Started</Link></button>
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-5 d-flex justify-content center align-items-center p-md-5">
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75'/>

    </div>
   </div>

   <div className="row w-100 mt-4">
    <h3 className='mt-5 text-center mb-5'>Features</h3>
    <div className="col-md-1 me-md-5"></div>
    <div className="col-md-3 px-5 px-md-4 mt-4">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://24.media.tumblr.com/d36278415ea2632bb223d8e736a93a6b/tumblr_n6akz39WvM1shpedgo1_500.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3 px-5 px-md-4 mt-4">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3 px-5 px-md-4 mt-4">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media1.tenor.com/images/18a0a33c874e26a55fe2456347567ae9/tenor.gif?itemid=16911003" className='w-100' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-1"></div>
   </div>

   <div className="row w-100 mt-5 ms-1 ms-md-0 p-4">
    <div className="col-md-1"></div>
    <div className="col-md-10 border p-5 rounded m-md-5">
      <div className="row w-100 ">
        <div className="col-md-6">
          <h3 className='text-warning mt-3'>Simple fast and Powerful</h3>
          <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias neque velit sit nisi, rem facere sequi laborum labore assumenda. Eum quae enim, est quos quod autem aut exercitationem ab!</p>
          <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias neque velit sit nisi, rem facere sequi laborum labore assumenda. Eum quae enim, est quos quod autem aut exercitationem ab!</p>
          <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias neque velit sit nisi, rem facere sequi laborum labore assumenda. Eum quae enim, est quos quod autem aut exercitationem ab!</p>
        </div>
        <div className="col-md-6">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yH7eDWTH5iM" title="Illuminati (Music Video) | Sushin Shyam | Dabzee | Vinayak Sasikumar | Think Originals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div className="col-md-2"></div>
   </div>

    </>
  )
}

export default Landingpage