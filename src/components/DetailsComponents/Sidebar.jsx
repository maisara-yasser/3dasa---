import { Link } from "react-router-dom";

export default function Sidebar({article}) {
    const parts = article.content.split('##').map(part => part.trim());

    const sections = parts.slice(1).map(section => {
        const lines = section.split('\n\n');
        const heading = lines[0]; 
        const body = lines.slice(1).join('\n\n'); 
        return { heading, body };
    });
  return (
    <>
        <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                            <i className="fa-solid fa-list text-orange-500" />
                        </div>
                        <h3 className="font-bold text-white">محتويات المقال</h3>
                    </div>
                    <nav className="space-y-2">
                        {
                            sections.map((section,index)=>(
                                <a key={`#section-${index}`} href={`#section-${index}`}
                                    className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group" >
                                    <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                                        {index+1}
                                    </span>
                                    <span className="text-sm">{section.heading}</span>
                                </a>
                            ))
                        }
                    </nav>
                </div>
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                            <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                            <p className="text-white font-bold">{article.readTime}</p>
                            <p className="text-neutral-500 text-xs">وقت القراءة</p>
                        </div>
                        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                            <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                            <p className="text-white font-bold text-sm">{article.date}</p>
                            <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                    <div className="text-center">
                        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i className="fa-solid fa-envelope text-orange-500 text-xl" />
                        </div>
                        <h3 className="font-bold text-white mb-2">
                            لا تفوّت جديدنا
                        </h3>
                        <p className="text-neutral-400 text-sm mb-4">
                            اشترك للحصول على أحدث المقالات
                        </p>
                        <Link
                            className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                            to="/blog" data-discover="true" >
                            تصفح المزيد
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    </>
  )
}
