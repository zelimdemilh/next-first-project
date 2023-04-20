import React, { FC } from 'react';
import { ButtonProps } from "@/components/Tags/Button/Button.props";
import styles from "@/styles/components/tags/Button.module.scss"
import cn from "classnames"
import ArrowIcon from "./arrow.svg"
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";

export const Button: FC<ButtonProps> = ({children, arrow= "none", appearance, ...props}) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: appearance === "primary",
            [styles.ghost]: appearance === "ghost"
        })}
                {...props}
        >
            {children}
            {arrow !== "none" && <span className={cn(styles.arrow, {
                [styles.down]: arrow === "down"
            })}>
                <ArrowIcon/>
            </span>}
        </button>
    );
};