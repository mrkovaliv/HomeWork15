import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ResumePage from './components/Resume/ResumePage';
import UniversityPage from './components/UniversityPage/UniversityPage';
import JobPage from './components/JobPage/JobPage';
import PersonForm from './components/PersonForm/PersonForm';
import personFormSelector from './components/PersonForm/PersonForm.selector';
import universitiesSelector from './components/UniversityPage/UniversityPage.selector';
import jobsSelector from './components/JobPage/JobPage.selector';
import './App.module.css';


function App() {
  const personFormData = useSelector(personFormSelector);
  const universities = useSelector(universitiesSelector);

  return <div>
    <BrowserRouter>
      <Switch>
        <Route path='/jobs'>
          <JobPage jobs={useSelector(jobsSelector)} prevData={universities} />
        </Route>
        <Route path='/universities'>
          <UniversityPage universities={universities} prevData={personFormData} />
        </Route>
        <Route path='/resume'>
          <ResumePage />
        </Route>
        <Route exact path='/'>
          <PersonForm values={personFormData} />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>

}

export default App;
