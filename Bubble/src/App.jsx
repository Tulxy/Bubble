import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './components/Card.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import TaskBoard from "./pages/TaskBoard.jsx";
import PlanBoard from "./pages/PlansBoard.jsx";


function Calendar() {
  return <h2 className="text-center mt-5">📅 Calendar / Plans Page</h2>;
}

function Team() {
  return <h2 className="text-center mt-5">👥 Team Work Page</h2>;
}

function Dashboard() {
  return (
    <>
      <h2 className="text-center mt-5">Dashboard</h2>
      <div className="row">
        <div className="col">
          <TaskBoard />
        </div>
        <div className="col">
          <PlanBoard />
        </div>
      </div>

    </>

  )
}

function Personal() {
  return <h2 className="text-center mt-5">🙋 Personal Page</h2>;
}

function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
          <Card title="Teams" description="Organize your team and its workflow."/>
        </div>
        <div className="col">
          <Card title="Dashboard" description="Plan your day and keep track of your tasks and plans."/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card title="Files" description="Plan your day and keep track of your tasks and plans."/>
        </div>
        <div className="col">
          <Card title="Communication" description="Communicate with your team or with anyone."/>
        </div>
        <div className="col">
          <Card title="Personal" description="Communicate with your team or with anyone."/>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/team" element={<Team />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
