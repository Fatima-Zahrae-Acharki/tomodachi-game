import './App.css';
import AddPlayer from './Components/AddPlayer/AddPlayer';
import CharacterName from './Components/CharacterName/CharacterName';
import Game from './Components/Game/Game';
import GuessTheSub from './Components/Guess/GuessTheSub';
import HomePage from './Components/HomePage/HomePage';
import Join from './Components/JoinGame/Join';
import Login from './Components/LoginPage/Login';
import NotObtrusive from './Components/Obtrusive/NotObtrusive';
import Obtrusive from './Components/Obtrusive/Obtrusive';
import ObtrusivePlayer from './Components/Obtrusive/ObtrusivePlayer';
import OnlineOffline from './Components/OnlineOffline/OnlineOffline';
import PlayersLoading from './Components/Loading/PlayersLoading';
import Points from './Components/Points/Points';
import Register from './Components/RegisterPage/Register';
import ViewProfile from './Components/Profile/ViewProfile';
import { Route, Routes } from 'react-router-dom';
import Vote from './Components/Vote/Vote';

function App() {
  return (
    // <div className="App">
    //   {/* <HomePage /> */}
    //   {/* <CharacterName /> */}
    //   {/* <Obtrusive /> */}
    //   {/* <ObtrusivePlayer /> */}
    //   {/* <OnlineOffline /> */}
    //   {/* <NotObtrusive /> */}
    //   {/* <Login />  */}
    //   {/* <Register /> */}
    //   {/* <GuessTheSub /> */}
    //   {/* <Join /> */}
    //   {/* <Game /> */}
    //   {/* <ViewProfile /> */}
    //   {/* <Points /> */}
    //   {/* <PlayersLoading /> */}
    //   {/* <AddPlayer /> */}

    // </div>
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CharacterName" element={<CharacterName />} />
      <Route path="/Obtrusive" element={<Obtrusive />} />
      <Route path="/ObtrusivePlayer" element={<ObtrusivePlayer />} />
      <Route path="/OnlineOffline" element={<OnlineOffline />} />
      <Route path="/NotObtrusive" element={<NotObtrusive />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/GuessTheSub" element={<GuessTheSub />} />
      <Route path="/Join" element={<Join />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/ViewProfile" element={<ViewProfile />} />
      <Route path="/Points" element={<Points />} />
      <Route path="/PlayersLoading" element={<PlayersLoading />} />
      <Route path="/AddPlayer" element={<AddPlayer />} />
      <Route path="/Vote" element={<Vote />} />
    </Routes>
    </>
  );
}

export default App;