import { useState } from "react";
import ArticlesCard from "./ArticlesCard";
import articlesData from '../data/posts.json'
export default function Articles() {

    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('جميع المقالات')
    const [viewMode, setViewMode] = useState("grid");
    const [page, setPage] = useState(1);
    function handleSearch(e) {
        setSearch(e.target.value)
    }


    const postsPage = 6;

    // const filterArticles = articlesData.posts.filter((article) => article.title.toLowerCase().includes(search.toLowerCase))
    const filterArticles = articlesData.posts.filter((article) => {
        const matchSearch = article.title.toLowerCase().includes(search.toLowerCase());
        const matchCategory = selectedCategory === 'جميع المقالات' || article.category === selectedCategory;
        return matchCategory && matchSearch;
    })
    const totalPages = Math.ceil(filterArticles.length / postsPage) || 1;
    const indexOfLastPost = page * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentArticles = filterArticles.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
                <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="relative w-full md:w-80">
                                <input value={search} onChange={handleSearch} placeholder="ابحث في المقالات..." className="input-dark w-full px-5 py-3 pr-12" type="text" />
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                <button onClick={() => setSelectedCategory("جميع المقالات")}
                                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                    جميع المقالات
                                </button>
                                <button onClick={() => setSelectedCategory("إضاءة")} className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30" >
                                    إضاءة
                                </button>
                                <button
                                    onClick={() => setSelectedCategory("بورتريه")}
                                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                                >
                                    بورتريه
                                </button>
                                <button
                                    onClick={() => setSelectedCategory("مناظر طبيعية")}
                                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                                >
                                    مناظر طبيعية
                                </button>
                                <button
                                    onClick={() => setSelectedCategory("تقنيات")}
                                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                                >
                                    تقنيات
                                </button>
                                <button
                                    onClick={() => setSelectedCategory("معدات")}
                                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                                >
                                    معدات
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Articles */}
                <div className="mb-8 px-8 py-4 flex items-center justify-between">
                    <p className="text-neutral-400">
                        عرض{" "}
                        <span className="font-bold text-white">
                            {filterArticles.length}
                        </span>{" "}
                        مقالات
                        {selectedCategory !== "جميع المقالات" && (
                            <span>
                                {" "}
                                في{" "}
                                <span className="text-orange-500 font-semibold">
                                    {selectedCategory}
                                </span>
                            </span>
                        )}
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                            <button onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white ${viewMode === "grid" ? " bg-orange-500 text-white" : ""} `} title="عرض شبكي">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white ${viewMode === "list" ? " bg-orange-500 text-white" : ""} `} title="عرض قائمة">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* articles */}
                {filterArticles.length > 0 ? (
                    <ArticlesCard articles={currentArticles} viewMode={viewMode} />
                ) : (
                    <div className="text-center py-16 bg-[#111111] rounded-2xl border border-[#262626] my-8">
                        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                            <i className="fa-solid fa-triangle-exclamation text-orange-500 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            عذراً، لم نجد نتائج
                        </h3>
                        <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                            لم نتمكن من العثور على أي مقالات تطابق بحثك. جرب البحث بكلمات
                            أخرى أو اختر تصنيفاً مختلفاً.
                        </p>
                    </div>
                )}
                {/* tabs */}
                <div className="flex justify-center items-center gap-2 mt-12">
                    <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}
                        className={`p-3 rounded-xl border transition-all duration-300 ${page === 1 ? 'bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed' : 'bg-[#161616] border-[#262626] text-white hover:border-orange-500/50'}`}>
                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex items-center gap-1">
                        <button onClick={() => setPage(1)} className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${page === 1 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white'}`}>
                            1
                        </button>
                        <button onClick={() => setPage(2)} className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${page === 2 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white'}`}>
                            2
                        </button>
                        <button onClick={() => setPage(3)} className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${page === 3 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white'}`}>
                            3
                        </button>
                        <button onClick={() => setPage(4)} className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${page === 4 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white'}`}>
                            4
                        </button>
                        <button onClick={() => setPage(5)} className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${page === 5 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white'}`}>
                            5
                        </button>
                    </div>
                    <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}
                        className={`p-3 rounded-xl border transition-all duration-300 ${page === totalPages ? 'bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed' : 'bg-[#161616] border-[#262626] text-white hover:border-orange-500/50'}`}>
                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* pages */}
                <p className="text-center text-neutral-500 mt-4 text-sm"> صفحة 1 من 5 </p>
            </div>
        </>
    );
}
