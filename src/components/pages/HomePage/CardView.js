import React from 'react'


function CardView() {
    return (
        <div>
            <div>

<div class="card-deck" id="card" style={{margin:'50px 0 0 100px'}}>
  <div class="card" style={{ width: '25rem',margin:'0 40px 0 0',borderRadius:'20px' }}>
    
    <div class="card-body">
      <h5 class="card-title" style={{color:'#1976d2',textAlign:'left',fontSize:'25px'}}> <img src='Assets/product.svg' alt="Card image cap"/> Product</h5>
      <p class="card-text"  style={{ textAlign: 'left',
                         color: '#737373',margin:'0 0 0 10px'}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
  </div>
  <div class="card" style={{ width: '25rem',margin:'0 40px 0 0',borderRadius:'20px' }}>
     <div class="card-body">
    <h5 class="card-title" style={{color:'#1976d2',textAlign:'left',fontSize:'25px'}}> <img src='Assets/service.svg' alt="Card image cap"/> Services</h5>
     <p class="card-text"  style={{ textAlign: 'left',
                         color: '#737373',margin:'0 0 0 10px'}}>This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
  </div>
  <div class="card" style={{ width: '25rem',margin:'0 40px 0 0',borderRadius:'20px' }}>
    <div class="card-body">
    <h5 class="card-title" style={{color:'#1976d2',textAlign:'left',fontSize:'25px'}}> <img src='Assets/acad.svg' alt="Card image cap"/> Acadamics</h5>
     <p class="card-text"  style={{ textAlign: 'left',
                         color: '#737373',margin:'0 0 0 10px'}}>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default CardView
