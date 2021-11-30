import PropTypes from "prop-types";


const Profile =props=>{
  return(
  <div style={{ color:'whitesmoke', textAlign:'center', fontSize:''}} >
    <div>
      <span>Full Name: {props.fullname} </span>
    </div>
    <div>
      <span>Bio: {props.bio} </span>
    </div>
    <div>
      <span>Profession: {props.profession} </span>
    </div>
    <div>
      <span>{props.children} </span>
    </div>
    <button className='button-73' onClick={()=>props.handleName(props.fullname)}>Click me </button>
  </div>
)
}

Profile.defaultProps={
  FullName: "Yassine kaabi", bio: "Student", profession: "Fullstack developer" 
}


Profile.propTypes ={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
}



export default Profile;