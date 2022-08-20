import { useState } from 'react';
import './card.scss'
// import Google from '../../../Assets/google.png';
// import Tata from '../../../Assets/tata.png';
// import Orange from '../../../Assets/orange.svg';
// import Green from '../../../Assets/green.svg';
// import Wishlist from '../../../Assets/wishlist.svg';
// import WishlistOpen from '../../../Assets/wishlistopen.svg';
// import Recommended from '../../../Assets/recommended.svg';
// import Arrow from "../../../Assets/arrow_dropdown.svg";
import { DragSource, DropTarget } from "react-dnd";
import _ from "lodash";
import cn from "classnames";

export function Card(props) {
    return _.flowRight(
      props.connectDragSource,
      props.connectDropTarget
    )(
      <div
        className={cn("Card", {
          "Card--dragging": props.isDragging,
          "Card--spacer": props.isSpacer
        })}
      >
        <div className="Card__title flex-wrap">{props.data.name}</div>
      </div>
    );
  }

  export const DraggableCard = _.flowRight([
    DropTarget(
      "Card",
      {
        hover(props, monitor) {
          const { columnId, columnIndex } = props;
          const draggingItem = monitor.getItem();
          if (draggingItem.id !== props.id) {
            console.log(draggingItem.id, columnId, columnIndex, " latest detail")
            props.moveCard(draggingItem.id, columnId, columnIndex);
          }
        }
      },
      (connect) => ({
        connectDropTarget: connect.dropTarget()
      })
    ),
    DragSource(
      "Card",
      {
        beginDrag(props) {
          return { id: props.id };
        },
  
        isDragging(props, monitor) {
          return props.id === monitor.getItem().id;
        }
      },
      (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
      })
    )
  ])(Card);
// function Card(props){
//     console.log("props", props)
//     const [card, setCard] = useState(props.data);
//     const [isWishIcon, setWishIcon] = useState(true)
//     const [isWishlistIcon, setWishlistIcon] = useState(false)
//     const [isRecommendedOpen, setRecommendedOpen] = useState(false);
//     const handleIswishIcon = ()=> {
//         setWishIcon(false);
//         setWishlistIcon(true);
//      }
  
//      const handleIsWishlistIcon = ()=> {
//         setWishIcon(true);
//         setWishlistIcon(false);
//      } 

//      const handleIsRecommendedIcon = () => {
//         setRecommendedOpen(true);
//      }

//      const handleIsRecommendedOpen = () => {
//         setRecommendedOpen(false);
//      }

//     return(
//       <div className="card-section">       
//         {card.cardList.map((item,key)=>{
//           return(
//            <>
//             <div className="card-content" key={key}>
//                 <button data-bs-toggle="collapse" className='expand-button' data-bs-target={`#collapse${item.id.toString()}`}> <img src={Arrow} alt="Arrow"/> </button>
//               <div className="d-flex">
//                <div className="name-content">{item.name}</div>
//                <div className="d-flex whole-content">
//                  <div className="wishlist-content">
//                    {item.wishlist.map((wishlist) => (
//                         <div className='col-5 p-0 m-0'>
//                             {/* {isWishIcon &&
//                               <img className="wishlist" src={Wishlist} alt="wishlist" onClick={handleIswishIcon} />
//                             }
//                             {isWishlistIcon &&
//                             <img className="wishlist" src={WishlistOpen} alt="wishlistOpen" onClick={handleIsWishlistIcon} />
//                             } */}
//                             <span >{wishlist === 'false' ? <img src={Wishlist} alt='wishlist'/> : <img src={WishlistOpen} alt='wishlistOpen'/> }</span>
//                         </div>
//                     ))}
//                  </div>
//                  <div className="recommendedimg-content" onClick={handleIsRecommendedIcon}><img src={Recommended} alt="Recommended" /></div>
//                  {isRecommendedOpen &&
//                    <div className="recommendedwhole-content" onClick={handleIsRecommendedOpen}>Remove Recommendation</div>
//                  }
//                </div>
//               </div>
//               <div className="position-content">{item.position} - {item.company} ({item.place})</div>         
//                 <div className="panel-content">{item.panel.length > 0 ? 
//                     <div>Panel on                
//                         {item.panel.map((imgSrc,id) => {
//                             return(                        
//                             <>
//                                 {imgSrc === 'Google' ? <img src={Google} key={id} alt="google" /> : null } 
//                                 {imgSrc === 'Tata' ? <img src={Tata} key={id} alt="tata" /> : null } 
//                             </>
//                             )
//                             })}
//                     </div> : null}
//                 </div>
//                 <div className="row">
//                     {item.skills.map((skills) => (
//                         <div className='col-5 p-0 m-0 language-wrapper'>
//                             <span >{skills.percentage === '50' ? <img src={Orange} alt='orange'/> : <img src={Green} alt='green'/> }{skills.language}</span>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='details-section' class="collapse" id={`collapse${item.id.toString()}`}>
//                     <div className="p-0">
//                         <div className="detail-wrapper">
//                             <div className="row p-0 m-0">
//                                 <div className="col-4 p-0 m-0">
//                                   <div className="heading-content">Billing Rate</div>
//                                   <div className="values-content">${item.billingRate}</div>
//                                 </div>
//                                 <div className="col-4 p-0 m-0">
//                                    <div className="heading-content">Availability</div>
//                                    <div className='values-content'>{item.availabilty} slots/day</div>
//                                 </div>
//                                 <div className="col-4 p-0 m-0">
//                                     <div className="heading-content">Rating</div>
//                                     <div className="values-content">{item.rating}</div>
//                                 </div>
//                                 <div className="col-12 p-0 m-0">
//                                     <div className="preference-content">Location Preference</div>
//                                     <div className="location-content">{item.location}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </>  
//           )
//         })}        
//       </div>
//     )
// }
// export default Card;