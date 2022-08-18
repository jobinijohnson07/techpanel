import { useEffect, useState } from 'react';
import './interviewers.scss';
import KanbanView from '../../widgets/kanbanView/KanbanView';

function Interviewers() {
  const [interviewers, setInterviewers] = useState([]);
  const [interviewersColumn, setInterviewersColumn] = useState([])
  
  useEffect(() => {
    getAllInterviews();
  }, []);

  function getAllInterviews() {
    fetch(`http://localhost:5000/allInterviews`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result, '------------->')
        setInterviewers(result);
        getAllColumn(result);
      });
  }

  function getAllColumn(result) {
    let columns = ["Recommended", "Applied", "Empanelled", "Rejected", "On Hold"];
    let updatedCol = [];
    const interviews = result;
    columns.map(async(res, i) => {
      let cards = interviews.filter((item) => {
        console.log(item.status, "item 2")
        if(item.status === res){
          item.expanded = false;
          return item;
        }
      })
      updatedCol.push({
        title: res,
        id: i,
        cardList: cards
      })
    })
    console.log(updatedCol, 'cards');
    setInterviewersColumn(updatedCol);
  }
  return(
    <div>
      {
        interviewersColumn.length?
        <KanbanView
            columns={interviewersColumn}
          />:null
      }         
    </div>
  );
}
export default Interviewers;