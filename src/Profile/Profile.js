import PropTypes from "prop-types";

const Row =props=>(
  <div style={{ color:'whitesmoke',backgroundColor:'sienna', textAlign:'center', fontSize:''}} >
    <div>
      <span>Full Name:{props.fullname} </span>
    </div>
    <div>
      <span>Bio:{props.bio} </span>
    </div>
    <div>
      <span>Profession:{props.profession} </span>
    </div>
    <div>
      <span>{props.children} </span>
    </div>
    <button className='button-73' onClick={()=>handleName(props.fullname)}>Click me </button>
  </div>
);

export const img = props => {
return (
  <div>
    {props.children}
  </div>
);
}
const handleName = (name) => {
  alert(name)
}
profile.propTypes ={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
}

function profile () {
  return (
    <div >
<Row fullname="Yassine kaabi" handleName={handleName} bio="Student" profession="Free lance" ><img src="/img1.jpg" style={{width:'55%',borderRadius:'50%' }}/> </Row>
    </div>
  );
}

export default profile;