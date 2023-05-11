import React from 'react';
import Card from './Card';
import './Swimlane.css';
import Dragula from 'react-dragula';
import { useEffect } from 'react';


function Swimlane ({name, clients, dragulaRef}) {

  useEffect(() => {
    if (dragulaRef.current) {
      Dragula([dragulaRef.current]);
    }
  }, [dragulaRef]);

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
