/* eslint-disable */
import { useState } from 'react';
import './card.scss'
import Google from '../../../Assets/google.png';
import Tata from '../../../Assets/tata.png';
import Beginner from '../../../Assets/orange.svg';
import NoKnowledge from '../../../Assets/noknowledge.svg';
import Basic from '../../../Assets/basic.svg';
import Intermediate from '../../../Assets/intermediate.svg';
import Advanced from '../../../Assets/green.svg';
import Wishlist from '../../../Assets/wishlist.svg';
import WishlistOpen from '../../../Assets/wishlistopen.svg';
import Recommended from '../../../Assets/recommended.svg';
import Arrow from "../../../Assets/arrow_dropdown.svg";
import { DragSource, DropTarget } from "react-dnd";
import _ from "lodash";
import cn from "classnames";

export function Card(props) {
  const [card, setCard] = useState(props.data);
  const [isRecommendedOpen, setRecommendedOpen] = useState(false);
  const [wishlist, setWishlist] = useState(true);
  const [wishlistOpen, setWishlistOpen] = useState(false)
 
  const handleIsRecommendedIcon = () => {
    setRecommendedOpen(true);
  }

  const handleIsRecommendedOpen = () => {
    setRecommendedOpen(false);
  }

  const onToggle = () => {
    setWishlistOpen(true);
    setWishlist(false)
  }

  const handleWishlist = () => {
    setWishlist(true)
    setWishlistOpen(false);
  }
  const getSkill = (skills) => {
    let code = '';
    if (Number(skills.percentage) === 0){
      code = <span ><img src={NoKnowledge} alt='orange'/>{skills.language}</span>
    }
    if (Number(skills.percentage) > 0 && Number(skills.percentage) <= 25){
      code = <span ><img src={Basic} alt='orange'/>{skills.language}</span>
    }
    if(Number(skills.percentage) > 25 && Number(skills.percentage) <= 50){
      code = <span ><img src={Beginner} alt='orange'/>{skills.language}</span>
    }
    if (Number(skills.percentage) > 50 && Number(skills.percentage) <= 75){
      code = <span ><img src={Intermediate} alt='orange'/>{skills.language}</span>
    }
    if (Number(skills.percentage) > 75 && Number(skills.percentage) <= 100){
      code = <span ><img src={Advanced} alt='orange'/>{skills.language}</span>
    }
    return code;
  }
  // function onToggle(event, param) {
  //   console.log(props.data.wishlist)
  //   let wish = param === props.data.wishlist ? true : false;
  //   console.log(param, "param")
  //   console.log(wish);
  //   setWishlist(wish);
  // }

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
      <div className="card-section" data-testid="card-1">
        <>
          <div className="card-content">
            <button data-bs-toggle="collapse" className='expand-button' data-bs-target={`#collapse${props.data ? props.data.id.toString() : null}`}> <img src={Arrow} alt="Arrow"/> </button>
            <div className="d-flex">
              <div className="name-content">{props.data ? props.data.name : null}</div>
              <div className="d-flex whole-content">
                {wishlist &&
                 <div className="wishlist-content" onClick={event => onToggle(event, props.data)}>
                  {/* {props.data ? 
                    <div className='col-5 p-0 m-0'>
                        <span >{props.data.wishlist  === false ? <img src={Wishlist} alt='wishlist'/> : <img src={WishlistOpen} alt='wishlistOpen'/> }</span>
                    </div>
                   :null
                  } */}
                  <img src={Wishlist} alt='wishlist'/> 
                </div>
                }
                {wishlistOpen &&
                  <div className="wishlist-content" onClick={handleWishlist}><img src={WishlistOpen} alt='wishlistOpen'/></div>
                }
                <div className="recommendedimg-content" onClick={handleIsRecommendedIcon}><img src={Recommended} alt="Recommended" /></div>
                  {isRecommendedOpen &&
                    <div className="recommendedwhole-content" onClick={handleIsRecommendedOpen}>Remove Recommendation</div>
                  }
              </div>
            </div>
            <div className="position-content">{props.data ? props.data.position : null} - {props.data ? props.data.company : null} ({props.data ? props.data.place : null})</div>  
            {props.data && props.data.panel.length ? 
              <div className="panel-content">Panel on 
                {props.data.panel.map((imgSrc,id) => {
                  return(                        
                    <>
                      {imgSrc === 'Google' ? <img src={Google} key={id} alt="google" /> : null } 
                      {imgSrc === 'Tata' ? <img src={Tata} key={id} alt="tata" /> : null } 
                    </>
                  )
                })}
              </div>
              :null
            } 
            <div className="row">
                {props.data ? props.data.skills.map((skills) => (
                    <div className='col-5 p-0 m-0 language-wrapper'>
                      {getSkill(skills)}
                        {/* <span >{skills.percentage === '0' ? <img src={NoKnowledge} alt='orange'/> : null }{skills.language}</span>
                        <span >{skills.percentage <= '25' ? <img src={Basic} alt='orange'/> : null }{skills.language}</span>
                        <span >{skills.percentage <= '50' ? <img src={Beginner} alt='orange'/> : null }{skills.language}</span>
                        <span >{skills.percentage <= '75' ? <img src={Intermediate} alt='orange'/> : null }{skills.language}</span>
                        <span >{skills.percentage <= '100' ? <img src={Advanced} alt='orange'/> : null }{skills.language}</span> */}
                    </div>
                )):null}
            </div>  
            <div className='details-section' class="collapse" id={`collapse${props.data ? props.data.id.toString() : null}`}>
              <div className="p-0">
                <div className="detail-wrapper">
                  <div className="row p-0 m-0">
                    <div className="col-4 p-0 m-0">
                      <div className="heading-content">Billing Rate</div>
                      <div className="values-content">${props.data ? props.data.billingRate : null}</div>
                    </div>
                    <div className="col-4 p-0 m-0">
                      <div className="heading-content">Availability</div>
                      <div className='values-content'>{props.data ? props.data.availabilty : null} slots/day</div>
                    </div>
                    <div className="col-4 p-0 m-0">
                      <div className="heading-content">Rating</div>
                      <div className="values-content">{props.data ? props.data.rating : null}</div>
                    </div>
                    <div className="col-12 p-0 m-0">
                      <div className="preference-content">Location Preference</div>
                      <div className="location-content">{props.data ? props.data.location : null}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </div>
        </>
      </div>
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