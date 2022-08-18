import React from 'react';
import './card.scss'
import Google from '../../../Assets/google.png';
import Tata from '../../../Assets/tata.png';
import Orange from '../../../Assets/orange.svg';
import Green from '../../../Assets/green.svg';
import { DragSource, DropTarget } from "react-dnd";
import { useState } from 'react';
import Arrow from "../../../Assets/arrow_dropdown.svg";
import _ from "lodash";

// function Card(props){
//     console.log(props, ' prosp')
//     return (
//         <div>
//             {props.data.cardList.map(card=>(
//                 <div>{card.name}</div>
//             ))}
//             <h1>The Card</h1>
//         </div>
//     )
// }
// export default Card;

function Card(props){
    console.log("props", props)
    const [card, setCard] = useState(props.data);
    // function expand(item, index){
    //     let arr = card;
    //     arr.cardList[index].expanded = !arr.cardList[index].expanded;
    //     setCard(arr);
    //     console.log(card.cardList, ' index');
    // }
    return(
      <div className="card-section">       
        {card.cardList.map((item,key)=>{
          return(
           <>
            <div className="card-content" key={key}>
                <button data-bs-toggle="collapse" className='expand-button' data-bs-target={`#collapse${item.id.toString()}`}> <img src={Arrow} alt="Arrow"/> </button>
              <div className="name-content">{item.name}</div>
              <div className="position-content">{item.position} - {item.company} ({item.place})</div>         
                <div className="panel-content">{item.panel.length > 0 ? 
                    <div>Panel on                
                        {item.panel.map((imgSrc,id) => {
                            return(                        
                            <>
                                {imgSrc === 'Google' ? <img src={Google} key={id} alt="google" /> : null } 
                                {imgSrc === 'Tata' ? <img src={Tata} key={id} alt="tata" /> : null } 
                            </>
                            )
                            })}
                    </div> : null}
                </div>
                <div className="row">
                    {item.skills.map((skills) => (
                        <div className='col-5 p-0 m-0 language-wrapper'>
                            <span >{skills.percentage === '50' ? <img src={Orange} alt='orange'/> : <img src={Green} alt='green'/> }{skills.language}</span>
                        </div>
                    ))}
                </div>
                <div className='details-section' class="collapse" id={`collapse${item.id.toString()}`}>
                    <div className="p-0">
                        <div className="detail-wrapper">
                            <div className="row p-0 m-0">
                                <div className="col-4 p-0 m-0">
                                  <div className="heading-content">Billing Rate</div>
                                  <div className="values-content">${item.billingRate}</div>
                                </div>
                                <div className="col-4 p-0 m-0">
                                   <div className="heading-content">Availability</div>
                                   <div className='values-content'>{item.availabilty} slots/day</div>
                                </div>
                                <div className="col-4 p-0 m-0">
                                    <div className="heading-content">Rating</div>
                                    <div className="values-content">{item.rating}</div>
                                </div>
                                <div className="col-12 p-0 m-0">
                                    <div className="preference-content">Location Preference</div>
                                    <div className="location-content">{item.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>  
          )
        })}        
      </div>
    )
}
export default Card;