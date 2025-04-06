import React from "react";
import StarRating from 'react-native-star-rating-widget';

export default function Rating(props) {
    return (
        <StarRating
            disabled={false}
            enableHalfStar={true}
            starSize={20}
            maxStars={5}
            rating={props.rating}
            color={'#F5AA34'}
        />
    );
}


