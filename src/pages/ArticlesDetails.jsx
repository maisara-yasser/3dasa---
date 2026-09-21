import { useParams } from 'react-router-dom';
import articlesData from '../data/posts.json'
import DetailsForArticle from './DetailsForArticle';
export default function ArticlesDetails() {

    const {slug} = useParams()
    
    return (
        <>
        <main className="flex-grow pt-20">
        {articlesData.posts.filter(article=>article?.slug==slug).map(ele=>(

            
                <DetailsForArticle key={ele.id || ele.slug} article={ele} ></DetailsForArticle>
            
        ))}
        </main>
        </>
    );
}
