

const CardeImage = ({image, children, handleGendre}) => {
  return (
      <div className="card d-flex align-items-center" style={{width: "18rem", cursor:'pointer'}} 
      onClick={()=>{handleGendre(children);}}>
        <img src={image} className="card-img-top"  style={{width:'50%', padding:'20px'}}/>
        <div>
          <h5 className="card-title"> {children} </h5>
        </div>
      </div>

  );
}

export default CardeImage
