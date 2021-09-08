import './Toolbar.css';
import React from 'react'
// import PropTypes from 'prop-types'

function Toolbar(props) {
   return (
      <ul className='toolbar'>
         { props.filters.map((filter) => {
            const className = filter === props.selected ? 'toolbar-item selected' : 'toolbar-item';
            return (
               <li 
                  key={filter} 
                  className={className} 
                  onClick={() => props.onSelectFilter(filter)}
               >{filter}</li>
            );
         })}
      </ul>
   )
}

export default Toolbar;

