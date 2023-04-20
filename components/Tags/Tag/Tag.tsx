import React, {FC} from 'react';
import styles from "@/styles/components/tags/Tag.module.scss"
import cn from "classnames";
import {TagProps} from "@/components/Tags/Tag/Tag.props";

export const Tag: FC<TagProps> = ({children, color, size="s", href, className, ...props}) => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.ghost]: color === "ghost",
                [styles.grey]: color === "grey",
                [styles.primary]: color === "primary",
                [styles.green]: color === "green",
                [styles.red]: color === "red",
            })}
            {...props}
        >
            {href? <a href={href}>children</a>: children}
        </div>
    );
};