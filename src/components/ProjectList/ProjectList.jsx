import './ProjectList.css';
import React from 'react'

function ProjectList(props) {
   let projects = [];
   if (props.selected !== 'All') {
      projects = props.projects.filter(
      (item) => item.category === props.selected
      )     
   } else {
      projects = [...props.projects];
   }

   return (
      <div className='projectlist'>
         {projects.map((item, index) =>
            <img
              className='projectlist-item'
              src={item.img}
              alt={item.category}
              key={index}
            />
         )}
      </div>
   )
}

export default ProjectList

