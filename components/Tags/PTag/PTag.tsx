import React, {FC} from 'react';
import {PTagProps} from "@/components/Tags/PTag/PTag.props";
import styles from "@/styles/components/tags/PTag.module.scss"
import cn from "classnames";

export const PTag: FC<PTagProps> = ({children, size="m", className, ...props }) => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === "s",
                [styles.l]: size === "l",
                [styles.m]: size === "m"
            })}
            {...props}
        >
            {children}
        </p>
    );
};