  import { useState } from 'react'
  import './App.css'
  import {People} from './components/People';

  function App() {
    const [people, setPeople] = useState([
      {
        id: 1,
        personName: "Andres Moreno",
        role: "Backend Developer",
        img:"https://bootdey.com/img/Content/avatar/avatar7.png"
      },
      {
        id: 2,
        personName: "Kahetin Torres",
        role: "FrontEnd Developer",
        img:"https://bootdey.com/img/Content/avatar/avatar8.png"
      },
      {
        id: 3,
        personName: "Samantha Moreno",
        role: "Fullstack Developer",
        img:"https://bootdey.com/img/Content/avatar/avatar3.png"
      },
    ]);

    return (
      <div>
        <People
          people={people}
          setPeople={setPeople}
        />
      </div>
    )
  }

  export default App;
