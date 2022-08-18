import React from 'react'
import './column.scss';
import Card from '../card/card';
import Filter from '../../../Assets/filter.svg';
import Sort from '../../../Assets/sort.svg';
import Recommended from '../../../Assets/recommended.svg';

function Column({data}) {
    // console.log(data, " data");
    return(
        <div className="column-section">
          <div className="data-section">
            <div className="d-flex">
              <div className="title-content">{data.title}</div>
              <div className="d-flex img-content">
                <div className="filterimg-content"><img src={Filter} alt="Filter" /></div>
                <div className="filterimg-content"><img src={Sort} alt="Sort" /></div>
                <div><img src={Recommended} alt="Recommended" /></div>
              </div>
            </div>
            
            <div >
                <Card data={data}/>
            </div>
          </div>                
        </div>
    )
}
export default Column;