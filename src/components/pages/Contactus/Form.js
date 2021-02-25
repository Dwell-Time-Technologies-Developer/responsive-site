import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'

function Form() {

    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return {
          // window.removeEventListener('resize', showButton)
        }
      }, []);
    return (
        <>
        <div class="card-deck" id="card" style={{margin:'50px 0 0 0'}}>
  <div class="card" style={{ width: '100rem',margin:'0 40px 0 0',borderRadius:'20px',color:'#a5a5a5' }}>
    
    <div class="card-body">
      {/* <h5 class="card-title" style={{color:'#1976d2',textAlign:'left',fontSize:'25px'}}> <img src='Assets/product.svg' alt="Card image cap"/> Product</h5>
      <p class="card-text"  style={{ textAlign: 'left',
                         color: '#737373',margin:'0 0 0 10px'}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      
 
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="fullname" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullname" placeholder="Full Name"/>
                </div>
                <div class="col-md-6">
                    <label for="useremail" class="form-label">E-Mail</label>
                    <input type="email" class="form-control" id="useremail" placeholder="Email Address"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Types of Enquiries</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Type of Enquiries"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Enquiries Here</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Enquiries Here"/>
                </div>
                {/* <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div> */}
                <div class="col-12">
                  {button ? (
                  <Link to='/contact' className='btn-link'>
                    <Button buttonSize='btn--wide' buttonColor='blue-border'>Send Message</Button>
                  </Link>
                ) : (
                  <Link to='/contact' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonColor='blue-border'
                      buttonSize='btn--mobile'
                    >
                      Send Message
                    </Button>
                  </Link>
                )}
                </div>
                </form>
                </div>
      </div>
  </div>
        </>
    )
}
export default Form
