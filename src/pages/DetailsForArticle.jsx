import HeaderSection from '../components/DetailsComponents/HeaderSection';
import MainContent from '../components/DetailsComponents/MainContent';
import SelectedArticles from '../components/DetailsComponents/SelectedArticles';
import Sidebar from '../components/DetailsComponents/Sidebar';


export default function DetailsForArticle({ article }) {

    
    
    return (
        <>
            <article className="bg-[#0a0a0a] min-h-screen">
                <HeaderSection article={article}/>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                        <MainContent article={article}/>
                        <Sidebar article={article}/>
                    </div>
                    <SelectedArticles currentSlug={article.slug}/>
                </div>
            </article>
        </>
    );
}
