import React, {FC} from 'react';
import {SidebarProps} from "@/Layout/Sidebar/Sidebar.props";
import Menu from "@/Layout/Menu/Menu";

const Sidebar: FC<SidebarProps> = ({...props}): JSX.Element => {
    return (
        <div {...props}>
            <Menu/>
        </div>
    );
};

export default Sidebar;