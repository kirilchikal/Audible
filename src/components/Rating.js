import React from "react";
import StarRating from 'react-native-star-rating';

export default function Rating(props) {
    return (
        <StarRating
            disabled={false}
            emptyStar={'star-outline'}
            fullStar={'star-rate'}
            halfStar={'star-half'}
            iconSet={'MaterialIcons'}
            starSize={20}
            maxStars={5}
            rating={props.rating}
            fullStarColor={'#F5AA34'}
        />
    );
}


