import {FirstLevelMenuItem} from "@/types/IMenu";
import CoursesIcon from "@/Layout/Menu/icons/courses.svg";
import {TopLevelCategory} from "@/types/ICourse";
import ServicesIcon from "@/Layout/Menu/icons/services.svg";
import ProductsIcon from "@/Layout/Menu/icons/product.svg";
import BooksIcon from "@/Layout/Menu/icons/books.svg";

export const products: FirstLevelMenuItem[] = [
    {route: "courses", name: "Курсы",icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    {route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services },
    {route: "products", name: "Продукты", icon: <ProductsIcon/>, id: TopLevelCategory.Products },
    {route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books  }
]
