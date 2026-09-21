import { Link } from "react-router-dom";
import articlesData from "../../data/posts.json";

export default function SelectedArticles({currentSlug}) {
    const displayedArticles = articlesData.posts.filter(article => article.slug !== currentSlug).slice(0,3);
  return (
    <>
        <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-images text-orange-500 text-xl" />
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            مقالات قد تعجبك
                        </h2>
                        <p className="text-neutral-500 text-sm">
                            استكشف المزيد من المحتوى المميز
                        </p>
                    </div>
                </div>
                <Link className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                    to="/blog" data-discover="true" >
                    عرض الكل
                    <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    displayedArticles.map((article,index) =>(
                        <Link key={index} className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                            to={`/blog/${article.slug}` }data-discover="true" >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src={article.image}/>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                                <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                                    {article.category}
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                                    {article.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-neutral-500">
                                    <span className="flex items-center gap-2">
                                        <img
                                            alt={article.author.name}
                                            className="w-6 h-6 rounded-full"
                                            src={article.author.avatar}/>
                                        {article.author.name}
                                    </span>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </>
  )
}
