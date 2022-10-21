import Modal from 'react-bootstrap/Modal';

function ThankYou(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modals'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"green"}}>
            Thank You!
          </Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{ width:"100%", display:"flex", justifyContent:"space-around"}}>
                <img src="http://clipart-library.com/new_gallery/22-220535_pokemon-png.png" style={{height:"15vh"}} />
                <img src='http://clipart-library.com/images_k/pokemon-transparent-background/pokemon-transparent-background-6.png' style={{height:"15vh"}} />
                <img src='http://clipart-library.com/images_k/pokemon-transparent-background/pokemon-transparent-background-5.png' style={{height:"15vh"}} />
                <img src='http://clipart-library.com/images_k/pokemon-transparent-background/pokemon-transparent-background-24.png'style={{height:"15vh"}} />
            </div>
            <br/>
            <p>I will reach out to you as soon as possible to schedule a follow up appointment.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default ThankYou;