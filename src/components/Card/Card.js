import React from 'react';
import 'tachyons';


const ImageCard = props => (
        <div className="card">
          <a onClick={() => props.handleClick(props.name)}>
            <img className="card-img-top" alt={props.name} src={require(`${props.image}`)} />
          </a>
        </div>
      );

export default ImageCard;
