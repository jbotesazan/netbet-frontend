import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import Home from './Home';
import NavBar from './NavBar';
import Bets from './Bets';
import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const [bets, setBets] = useState([]);
  const [league, setLeague] = useState('39');
  const [matches, setMatches] = useState([]);
  const [errors, setErrors] = useState([]);
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);


  // Auto-login
  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
    .catch((error) => {
      console.error(error)
    });
  },[]);
  
  // Grabs the bets from the backend and displays them in the bets component
  useEffect(() => {
    fetch('/bets')
    .then((r) => {
      if(r.ok) {
        r.json().then((bets) => setBets(bets));
      }
    })
    .catch((error) => {
      console.error(error)
    });
  },[]);
  
  // Takes the data from the form for a new bet and posts it to the bets component
  const addBet = (formData) => {
    fetch("/bets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((r) => {
      if (r.ok) {
        r.json().then(
          (newBet) => setBets([...bets, newBet]),
          setShow(false),
          setOpen(true),
          setErrors([])
          );
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }


  useEffect(() => {
    setIsLoading(true);
    setArr([]);
    fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&next=10&timezone=America%2FNew_York`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "5e876e98aemsh0731d0a00f95178p1083a4jsn89e0a75263e9"
      }
    })
    .then((r) => {
      if(r.ok) {
        r.json().then((matches) => {
          setMatches(matches.response)
        });
      }
    })
    .catch((error) => {
      console.error(error)
    });
  }, [league]);

  useEffect(() => {
      let newArr = []
    if (!!matches?.length) {
      matches.forEach((match) => {
        fetch(`https://api-football-v1.p.rapidapi.com/v3/odds?fixture=${match.fixture.id}&bookmaker=7`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "5e876e98aemsh0731d0a00f95178p1083a4jsn89e0a75263e9"
          }
        })
        .then((r) => {
          if(r.ok) {
            r.json().then((matchOdds) => {
              // console.log(matchOdds)
                let date = new Date (match.fixture.date)
                let newDate = new Date(date.toJSON()).toUTCString()
                // console.log(date)
              let gameObj = {
                fixtureId: match.fixture.id,
                awayTeam: match.teams.away.name,
                awayTeamLogo: match.teams.away.logo,
                homeTeam: match.teams.home.name,
                homeTeamLogo: match.teams.home.logo,
                venue: match.fixture.venue.name,
                date: newDate,
                homeOdds: matchOdds.response[0].bookmakers[0].bets[0].values[0].odd,
                drawOdds: matchOdds.response[0].bookmakers[0].bets[0].values[1].odd,
                awayOdds: matchOdds.response[0].bookmakers[0].bets[0].values[2].odd,
              };
                newArr.push(gameObj)
                if (newArr.length === matches.length || newArr.length > 7)
                setArr(newArr);
                setIsLoading(false);
              });
          }
        })
        .catch((error) => {
          console.error(error)
        });
      })
    }
  }, [matches])
    

  // conditionally renders the login page based on if the user is logged in or not
  if (!user) return <LoginPage setUser={setUser} open={open} setOpen={setOpen} />
  
  return (
    <div className='background'>
      <Router>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            <Home setShow={setShow} show={show} user={user} arr={arr} setLeague={setLeague} league={league} addBet={addBet} open={open} setOpen={setOpen} errors={errors} isLoading={isLoading}/>
          </Route>
          <Route exact path="/bets">
            <Bets bets={bets} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
