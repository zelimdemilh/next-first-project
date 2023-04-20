import React, { FC } from 'react';
import { HTagProps } from "@/components/Tags/HTag/HTag.props";
import styles from "@/styles/components/tags/HTag.module.css"

export const HTag: FC<HTagProps> = ({ tag, children}) => {
    switch (tag) {
        case "h1":
            return <h1>{children}</h1>
        case "h2":
            return <h2>{children}</h2>
        case "h3":
            return <h3>{children}</h3>
        default:
            return <></>
    }
};
