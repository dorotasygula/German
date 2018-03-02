import React from 'react';
import ImageScore from './image_score';

const CategoryDetail = (props) => {

    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.category.link}/>
            </div>

            <div className="media-body">
                 <h4 className="media-heading">
                    {props.category.title}
                 </h4>
                    <ImageScore />
            </div>
       </li>
    );
}

export default CategoryDetail;