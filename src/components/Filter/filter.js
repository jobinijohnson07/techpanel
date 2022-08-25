/* eslint-disable */
import { useEffect, useState } from 'react';
import './filter.scss'
import Search from '../../Assets/search.svg';
import Graph from '../../Assets/graph.svg';
import Interviewers from '../Interviewers/interviewers';
import Position from '../Position/position';
import Active from '../../Assets/green.svg';
import Navbar from '../Navbar/navbar'

function Filter() {
  const [posts, setPosts] = useState([]);
  const [interviewers, setInterviewers] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/AllLanguages`)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      }); 
  }, []);

  function onchangeTab(event, param){ 
    console.log(param,"first data")
    let val = param === 'interviews' ? true : false;
    setInterviewers(val);
    console.log(interviewers);
  }

  
  return(
    <div data-testid="filter">
      <div><Navbar /></div>
      <div className="filter-section"> 
        <div className="d-flex topsection-content">
            <div className="dropdown-content">
              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                {posts.map((post) => (
                  <option value="" className="dropdown-content">{post.language}</option>
                ))}
              </select>
            </div>
            <div className="tab">
              <div className={'interviews' ? 'interviewers-content' : 'positions-content' } onClick={event => onchangeTab(event, 'interviews')}>Interviewers</div>
              <div className={'position' ? 'positions-content' : 'positions-content' } onClick={event => onchangeTab(event, 'position')}>Positions</div>
            </div>
            <div className="d-flex">
              <div className="search-content"><img src={Search} alt="search" /></div>
              <div className="graph-content"><img src={Graph} alt="Graph" /></div>
              <div className="lastdropdown-content">
                <select class="form-select form-select-sms" aria-label=".form-select-sms example">
                  <option><div className="color-content" /><img src={Active} alt="active" />Active</option>
                  <option value="2">In Actice</option>
                </select>
              </div>
            </div>
            
        </div>
        {interviewers?<Interviewers/>:<Position/>}
    </div>
    </div>
  );
}
export default Filter;