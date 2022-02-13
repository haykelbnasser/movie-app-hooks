import React ,{useState} from 'react'
import {Button} from 'reactstrap';
import ModalAdd from './Modal';


const AddMovie =({handleAdd})=> {
    const [show , setShow]=useState(false);
    const toggleShow = () => setShow(!show);
    return(
        <div className=''>
             <Button onClick={() => setShow(true)}>
                Add a Movie
               </Button>

            
            {show && (
        <ModalAdd isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
        </div>
        
    )
}
export default AddMovie;
