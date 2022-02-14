import React from 'react'
import { Card, CardTitle, CardImg, CardBody, CardText  } from 'reactstrap';
import {Link} from 'react-router-dom'


const Moviecard = ({ movie: { id,title, posterUrl, description , src } }) => {
    return (
        <div className='col-2 mt-4'>
            
            <Card style={{ height: `600px` }}>
                <CardTitle>
                    <div className='row text-align-center mt-2'>
                        <h6 style={{textAlign:'center' }}>{title}</h6>
                    </div>
                </CardTitle>
                <Link to={`/${id}`} 
            state = 
            {{title : title , description : description , src : src}}
            >
                <CardImg
                    top
                    width='100%'
                    style={{ height: `400px` }}
                    src={posterUrl}
                    alt='Card image cap'
                />
                </Link>
                <CardBody>

                    <div className='row'>
                        <CardText>{description}</CardText>
                    </div>
                    <div className='row'>
                      
                    </div>
                </CardBody>
            </Card>
           
        </div>
    );
}

export default Moviecard;
