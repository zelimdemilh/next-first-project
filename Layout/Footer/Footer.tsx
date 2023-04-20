import React, {FC} from 'react';
import {FooterProps} from "@/Layout/Footer/Footer.props";
import styles from "@/styles/layout/Footer.module.scss"
import cn from "classnames";
import {format} from "date-fns"

const Footer: FC<FooterProps> = ({className, ...props}): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
            </div>
            <a href="#" target="_blank">Пользовательское соглашение</a>
            <a href="#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
};

export default Footer;