import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {HTag, Button, PTag, Tag, Rating} from "@/components"
import {withLayout} from "@/Layout/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {baseService} from "@/helpers/baseService";
import { IMenuItem } from '@/types/IMenu';
import {json} from "stream/consumers";

const inter = Inter({ subsets: ['latin'] });

function Home({ firstCategory, menu}: HomeProps) {
  return (
    <>
      <HTag tag="h1">Это заголовок</HTag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <PTag size="l"> Большой текст</PTag>
      <PTag> Средний текст</PTag>
      <PTag size="s"> Маленький текст</PTag>
      <Tag color="red"> Красный </Tag>
      <Tag color="green"> Зеленый </Tag>
      <Tag color="ghost"> Гост </Tag>
      <Tag color="primary"> Основной </Tag>
      <Rating rating={3} isEditable={true} />
    </>
  );
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await baseService.post<IMenuItem[]>("/top-page/find", { firstCategory })
  return{
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: IMenuItem[]
  firstCategory: number
}