import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import Home from './Home';
import NavBar from './NavBar';
import Bets from './Bets';

function App() {
  const [user, setUser] = useState(null);
  const [bets, setBets] = useState([]);
  const [league, setLeague] = useState('39');
  const [matches, setMatches] = useState([]);
  const [matchesOrOdds, setMatchesOrOdds] = useState(true);
  const [errors, setErrors] = useState([]);
  const [obj, setObj] = useState({});
  const [arr, setArr] = useState([]);

  // function getCSRFToken() {
  //   return unescape(document.cookie.split('=')[1])
  // }

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

  // normally sets the value of matches to whichever league is selected, but for testing purposes is currently set to EPL
  useEffect(() => {
    setArr([])
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
          // console.log(matches.response)
          setMatches(matches.response)
        });
      }
    })
    .catch((error) => {
      console.error(error)
    });
    // return () => {
    //   setMatches([])
    // }
  },[league]);
  
  // const cleanArr = async () => {
  //   await setArr([])
  // }

  useEffect(() => {
    console.log(arr)
  },[arr])

  useEffect(() => {
      let newArr = []
    if (!!matches?.length) {
      // setObj({})
      matches.forEach((match, index) => {
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
              let fixtureId = match.fixture.id;
              let gameObj = {
                awayTeam: match.teams.away.name,
                awayTeamLogo: match.teams.away.logo,
                homeTeam: match.teams.home.name,
                homeTeamLogo: match.teams.home.logo,
                venue: match.fixture.venue.name,
                // use .toUTCString() on the date to get the desired date format
                date: match.fixture.date,
                homeOdds: matchOdds.response[0].bookmakers[0].bets[0].values[0].odd,
                drawOdds: matchOdds.response[0].bookmakers[0].bets[0].values[1].odd,
                awayOdds: matchOdds.response[0].bookmakers[0].bets[0].values[2].odd,
              };
                console.log(newArr)
                newArr.push(gameObj)
                // if (newArr.length === matches.length)
                setArr(newArr)
                
              // Object.assign is a JS function that takes and existing object you have (obj), and a new object you pass in (bigObj) and combines them
              // const handleSetObj = (fixtureId, gameObj) => {
              //   let bigArr = {};
              //   bigObj[fixtureId] = gameObj;
              //   // I think this is the issue and why its compounding leagues when i click on a different league rather than resetting, its keeping the state and adding onto it
              //   setObj(Object.assign(obj, bigObj));
              // };
              // handleSetObj(fixtureId, gameObj);
              // const handleSetArray = (fixtureId, gameObj) => {
              //   let bigObj = {};
              //   bigObj[fixtureId] = gameObj;
              //   setArr([arr.push(bigObj)])
              // }
              // handleSetArray(fixtureId, gameObj);
            });
          }
        })
        .catch((error) => {
          console.error(error)
        });
      })
      // setArr(newArr);
    }
  }, [matches])
  
    console.log(arr)
    
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
        r.json().then((newBet) => setBets([...bets, newBet]));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }

  // conditionally renders the login page based on if the user is logged in or not
  if (!user) return <LoginPage setUser={setUser} />
  
  return (
    <div>
      <Router>
        <NavBar user={user} setUser={setUser} setMatchesOrOdds={setMatchesOrOdds} matchesOrOdds={matchesOrOdds}/>
        <Switch>
          <Route exact path="/login"></Route>
          <Route exact path="/">
            <Home user={user} matches={matches} setLeague={setLeague} matchesOrOdds={matchesOrOdds} addBet={addBet} errors={errors} />
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
