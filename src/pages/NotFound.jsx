
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-white mb-2">عذراً، الصفحة غير موجودة</h2>
            <p className="text-neutral-400 mb-6">الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
            <Link to="/home" className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                العودة للرئيسية
            </Link>
        </div>
    </>
  )
}
