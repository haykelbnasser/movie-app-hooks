import React, { useState } from "react";
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
    InputGroup,
    Label,
    Input,
} from 'reactstrap';

const ModalAdd = ({ isOpen, toggle, handleAdd }) => {
    const [newMovie, setNewMovie] = useState({
        title: ``,
        description: ``,
        urlPoster: ``,
        rate: 0
    });

    const onChangeHandler = (e) =>
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    const handleClick = (e) => {
        e.preventDefault();
        handleAdd(newMovie);
    };
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add a Movie</ModalHeader>
                <ModalBody>
                    <InputGroup row>
                        <Label for='title' sm={3}>
                            Title :
                        </Label>
                        <Input type='text' name='title' placeholder='Movie title' onChange={onChangeHandler} />
                    </InputGroup>
                    <InputGroup row>
                        <Label for='description' sm={3}>
                            Description :
                        </Label>
                        <Input type='text' name='description' placeholder='Movie Description ' onChange={onChangeHandler} />
                    </InputGroup>
                    <InputGroup row>
                        <Label for='urlPoster' sm={3}>
                            URL Poster :
                        </Label>
                        <Input type='text' name='urlPoster' placeholder='URL Poster' onChange={onChangeHandler} />
                    </InputGroup>
                    <InputGroup row>
                        <Label for='rate' sm={3}>
                            Rate :
                        </Label>
                        <Input type='text' name='Rate' placeholder='Movie Rate' onChange={onChangeHandler} />

                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color='primary'
                        onClick={(e) => {
                            handleClick(e);
                            toggle();
                        }}>
                        Add
                    </Button>
                    {'  '}
                    <Button
                        color='secondary'
                        onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>

            </Modal>
        </div>
    )
}
export default ModalAdd;
