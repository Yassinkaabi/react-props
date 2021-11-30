import Profile from './Profile/Profile';
import './App.css';

const App =()=> {
  const handleName = (name) => {
    alert(name)
  }
  return (
    <div className="App">
      <div class="card-holder">
  <div class="card bg-aurora">
  <Profile fullname="Yassine kaabi" handleName={handleName}><img src="/img1.jpeg" style={{width:'55%',borderRadius:'50%', opacity: 0.5 }}/> </Profile>

  </div>
</div>

    </div>
  );
}

export default App;