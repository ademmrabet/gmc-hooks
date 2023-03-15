import React, {useState} from 'react'
import Modal from 'react-modal'
import StarRating from './StarRating'

function AddNewMovie({handleAdd}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")
    const [rating, setRating] = useState("")

    const handleRating = (rating) =>{
        setRating(rating)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newMovie = {
            id:Math.random(),
            name,
            image,
            date,
            rating
        };
        handleAdd(newMovie);
        closeModal();
        setName("");
        setImage("");
        setDate("");
        setRating(0);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button className='btn-primary' onClick={openModal}>Ajouter un film</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <label>Nom du film</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} required />
                    <label>Affiche du film</label>
                    <input type='text' value={image} onChange={e => setImage(e.target.value)} required />
                    <StarRating rating={rating} handleRating={handleRating} />
                    <label>Date</label>
                    <input type='date' value={date} onChange={e => setDate(e.target.value)} required/>
                    <div>
                        <button className='btn' type='submit'>Ajouter</button>
                        <button className='btn' onClick={closeModal}>Annuler</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
export default AddNewMovie