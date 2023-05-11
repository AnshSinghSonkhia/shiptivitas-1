import React from 'react';
import Card from './Card';
import './Swimlane.css';

function Swimlane ({name, clients, dragulaRef}) {

    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{name}</div>
        <div className="Swimlane-dragColumn" ref={dragulaRef}>
          { clients.map((client)=>{
            return<Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
          }) }
        </div>
      </div>);

}
export default Swimlane;
