/* eslint-disable */
import { useEffect, useState } from 'react';
import './interviewers.scss';
import KanbanView from '../../widgets/kanbanView/KanbanView';
import _ from "lodash";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function Interviewers() {
  const [interviewers, setInterviewers] = useState([]);
  const [interviewersColumn, setInterviewersColumn] = useState([])
  const [cardIds, setIds] = useState([]);

  console.log("interviewersColumn", interviewersColumn)
  
  let columns = ["Recommended", "Applied", "Empanelled", "Rejected", "On Hold"];
  useEffect(() => {
    getAllInterviews();
  }, []);
  
  function getAllInterviews() {
    fetch(`http://localhost:5000/allInterviews`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result, '------------->')
        let tempIds = result.map(card => {return card.id} )
        setIds(tempIds)
        console.log(tempIds)
        setInterviewers(result);
        getAllColumn(result);
      });
  }

  function getAllColumn(result) {
    
    let updatedCol = [];
    const interviews = result;
    columns.map(async(res, i) => {
      let cards = interviews.map((item) => {
        console.log(item.status, "item 2")
        // if("Recommended" === "Recommended")
        if(item.status === res){
          return item.id;
        }
      }).filter((ele)=>ele !== undefined);
      updatedCol.push({
        title: res,
        id: i,
        cardList: cards,
        isSort: false,
      })
    })
    console.log(updatedCol, 'cards');
    setInterviewersColumn(updatedCol);
  }

  function moveCard(cardId, destColumnId, index) {
    console.log(cardId, destColumnId,index);
    var tempCol = {};
    tempCol = interviewersColumn.map((column) => ({
        ...column,
        // cardList: [...column.cardList.slice(0, index), cardId, ...column.cardList.slice(index)]
        cardList: _.flowRight(
          (id) =>
            column.id === destColumnId
                ? [...id.slice(0, index), cardId, ...id.slice(index)]
                : id,
          (id) => id.filter((id) => id !== cardId)
        )(column.cardList)
    }))
    console.log(tempCol);
    setInterviewersColumn(tempCol);
  };  
  function updateColumnData(data) {
    console.log(data, ' daa');
    setInterviewersColumn(data);
  }
  return(
    <div data-testid="interviewers">
      {
        interviewersColumn.length?
        <KanbanView
            cards={interviewers}
            columns={interviewersColumn}
            moveCard={moveCard}
            updateColumnData={updateColumnData}
          />:null
      }         
    </div>
  );
}
export default DragDropContext(HTML5Backend) (Interviewers);