import React, { Component } from 'react';
import { StarFill, StarHalf, Star } from 'react-bootstrap-icons';
import { formations } from '../../../../datas/formations';

const CareScaleComponent = ({ note }) => {

    const quantityLabel = [
        <div> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /> </div>,
        <div> <StarHalf color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /></div>,
        <div> <StarFill color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /></div>,
        <div> <StarFill color='orange' /> <StarHalf color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /></div>,
        <div> <StarFill color='orange' /> <StarFill color='orange' /> <Star color='orange' /> <Star color='orange' /> <Star color='orange' /> </div>,
        <div> <StarFill color='orange' /> <StarFill color='orange' /> <StarHalf color='orange' /> <Star color='orange' /> <Star color='orange' /> </div>,
        <div> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <Star color='orange' /> <Star color='orange' /></div>,
        <div> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <StarHalf color='orange' /> <Star color='orange' /></div>,
        <div> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <Star color='orange' /> </div>,
        <div> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <StarHalf color='orange' /></div>,
        <div> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> <StarFill color='orange' /> </div>
    ]

    return (
        <div>
            {quantityLabel[note]}
            

        </div>
    )
}
export default CareScaleComponent 