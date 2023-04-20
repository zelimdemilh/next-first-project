import React from 'react';
import {withLayout} from "@/Layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {baseService} from "@/helpers/baseService";
import {IMenuItem} from "@/types/IMenu";
import {ICourse} from "@/types/ICourse";
import {ParsedUrlQuery} from "querystring";

const firstCategory = 0

const Course = ({menu, course, firstCategory}: CourseProps): JSX.Element => {
    return (
        <div>
            {firstCategory}
        </div>
    );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await baseService.post<IMenuItem[]>("/top-page/find", { firstCategory })

    return{
        paths: menu.flatMap(m => m.pages.map(p => "/courses/" + p.alias)),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({params} : GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params){
        return {
            notFound: true
        }
    }
    const { data: menu } = await baseService.post<IMenuItem[]>("/top-page/find", { firstCategory })
    const { data: course} = await baseService.get<ICourse>("top-page/byAlias/" + params.name)

    return{
        props: {
            menu,
            firstCategory,
            course
        }
    }
}

interface CourseProps extends Record<string, unknown>{
    menu: IMenuItem[]
    firstCategory: number
    course: ICourse
}