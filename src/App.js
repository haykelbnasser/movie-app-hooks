import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import MovieRouter from './components/MovieRouter'
import { Button  } from 'reactstrap';

function App () {
    return (
        <div>
            <BrowserRouter>
                <Button><Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link></Button>
                
                <Routes>
                    <Route path='/:id' element={<MovieRouter />} />
                    <Route exact path='/' element={<Movies/>}/>
                </Routes>
            </BrowserRouter>


        </div>
    );
}
export default App;