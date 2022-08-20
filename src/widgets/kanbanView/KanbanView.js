import React from 'react';
import { useState } from 'react';
import './kanban.scss';
import './column/column.scss';
import {DraggableCard} from './card/card';
import Filter from '../../Assets/filter.svg';
import Sort from '../../Assets/sort.svg';
import Recommended from '../../Assets/recommended.svg';

function KanbanView({columns, moveCard, cards}) {
    console.log(cards, ' ->>>>>>>>>>>>>>>>>>>>')
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [isSortOpen, setSortOpen] = useState(false);
    const [isPreferencesOpen, setPreferencesOpen] = useState(false);
    // console.log(data, " data");

    const handleIsFilterIcon = () => {
      setFilterOpen(true);
    }

    const handleIsFilterOpen = () => {
      setFilterOpen(false);
    }

    const handleIsSortIcon = () => {
      setSortOpen(true);
    }

    const handleIsSortOpen = () => {
      setSortOpen(false);
    }

    const handleIsPreferencesIcon = () => {
      setPreferencesOpen(true);
    }

    const handleIsPreferencesOpen = () => {
      setPreferencesOpen(false);
    }
    console.log(columns, ' columns')
    return(
        <div style={{display: 'flex', overflowX: 'scroll'}}>
            <>
                {columns.length ? columns.map((col,i)=>{
                    return(
                        <div className="column-section">
                            <div className="data-section">
                                <div className="d-flex">
                                <div className="title-content">{col.title}</div>
                                <div className="d-flex img-content">
                                    <div className="filterimg-content" onClick={handleIsFilterIcon}><img src={Filter} alt="Filter" /></div>
                                    {isFilterOpen &&
                                    <div className="filterwhole-content" onClick={handleIsFilterOpen}>
                                        <div className="filterheading-content">Sort by</div>
                                        <div className="filter-content">Relevant</div>
                                        <div className="filter-content">A to Z</div>
                                        <div className="filter-content">Z to A</div>
                                    </div>
                                    }
                                    <div className="filterimg-content" onClick={handleIsSortIcon}><img src={Sort} alt="Sort" /></div>
                                    {isSortOpen &&
                                    <div className="sortwhole-content" onClick={handleIsSortOpen}>
                                        <div className="filter-content">Favourites</div>
                                        <div className="filter-content">Save Search</div>
                                    </div>
                                    }
                                    <div className="preferencesimg-content" onClick={handleIsPreferencesIcon}><img src={Recommended} alt="Preferences" /></div>
                                    {isPreferencesOpen &&
                                    <div className="preferenceswhole-content" onClick={handleIsPreferencesOpen}>
                                        <div className="filter-content">Save Preferences</div>
                                    </div>
                                    }
                                </div>
                                </div>
                                
                                <div >
                                    {col.cardList
                                        .map(cid => cards.find(c => c.id === cid))
                                        .map((card,colIndex)=>(
                                        <DraggableCard 
                                            key={card.id}
                                            id={card.id}
                                            columnId={col.id}
                                            columnIndex={colIndex}
                                            moveCard={moveCard}
                                            data={card}
                                        />
                                    ))}
                                    {
                                        col.cardList.length === 0 && (
                                            <DraggableCard
                                                isSpacer
                                                moveCard={cardId => moveCard(cardId, col.id, 0)}
                                            /> 
                                        )
                                    }
                                </div>
                            </div>                
                        </div>
                    )
                }
                    
                ):null}
            </>
        </div>
    )
}
export default KanbanView;