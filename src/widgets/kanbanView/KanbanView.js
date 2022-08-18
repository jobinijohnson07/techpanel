import React from 'react';
import Column from './column/column';
import './kanban.scss'

function KanbanView({columns}) {
    console.log(columns, ' columns')
    return(
        <div style={{display: 'flex', overflowX: 'scroll'}}>
            <>
                {columns.length ? columns.map((col,i)=>{
                    return(
                        <Column 
                            key={i}
                            data={col}
                        >
                        </Column>
                    )
                }
                    
                ):null}
            </>
        </div>
    )
}
export default KanbanView;