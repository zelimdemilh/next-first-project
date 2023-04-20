import React, {FC, useEffect, useState} from 'react';
import { RatingProps } from './Rating.props';
import StartIcon from "./StarIcon.svg"
import cn from "classnames";
import styles from "@/styles/components/Rating.module.scss";

export const Rating: FC<RatingProps> = ({isEditable= false, rating, setRating, ...props}) => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateRating = ratingArray.map((r, i) => {
            return(
                <span
                    className={cn(styles.star, {
                [styles.filled]: i < currentRating,
                [styles.editable]: isEditable
                })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                >
                    <StartIcon />
                </span>
            )
        } )

        setRatingArray(updateRating)
    }

    const changeDisplay = (r: number) => {
        if(!isEditable){
            return
        }
        constructRating(r)
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    );
};