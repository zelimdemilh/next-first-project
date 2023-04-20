import React, { FC } from 'react';
import { LayoutProps } from './Layout.props';
import styles from "@/styles/layout/Layout.module.scss";
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import {AppContextProvider, IAppContext} from "@/context/app.context";

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
                <Sidebar className={styles.sidebar}/>
                <div className={styles.body}>
                    {children}
                </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        )
    }
}