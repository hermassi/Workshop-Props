import './App.css';
import Profile from './profile/Profile'


var img= "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.0-9/124824768_3371910139570812_3637779146417626089_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=uiRbE44SlKYAX8QgfYl&_nc_ht=scontent.fnbe1-2.fna&oh=e325991e493392ec86bd3e2ac473f966&oe=60416ACC" 

function App() {
  return (
    <div className="App">

      
      <Profile 
      name = "Houssem"
      bio  ="Harmessi"
      profession ="Engineer" >{img}</Profile>
      
       
       

    </div>
  );
}

export default App;
