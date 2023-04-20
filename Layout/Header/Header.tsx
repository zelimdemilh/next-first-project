import React, {FC} from 'react';
import {HeaderProps} from "@/Layout/Header/Header.props";

const Header: FC<HeaderProps> = ({...props}): JSX.Element => {
    return (
        <div {...props}>
            header
        </div>
    );
};

export default Header;