import Button from "../elements/Button/Button";
import ArticleCards from "../fragments/articleCards";
import { IoIosArrowRoundForward } from "react-icons/io";

const ArticleLayouts = () => {
    return (
        <div className="px-7 md:px-6 md:py-10 lg:px-34">
            <div className="flex justify-between py-7">
                <h1 className="text-3xl font-semibold text-amber-800">
                    Articles
                </h1>
                <Button
                    variant="flex items-center group underline underline-offset-5 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                        More Articles
                        <IoIosArrowRoundForward size={25} className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                </Button>
            </div>
            <ArticleCards />
        </div>
    );
};

export default ArticleLayouts;