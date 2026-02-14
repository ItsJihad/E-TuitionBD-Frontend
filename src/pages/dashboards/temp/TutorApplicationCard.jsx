export const TutorApplicationCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Info */}
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
          className="w-20 h-20 rounded-2xl bg-indigo-50 object-cover" 
          alt="Tutor"
        />
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Dr. Sarah Miller</h3>
              <p className="text-indigo-600 font-medium text-sm">MSc in Applied Mathematics, DU</p>
            </div>
            <div className="text-right">
              <span className="block text-lg font-bold text-slate-900">5,500 BDT</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Expected Salary</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
            <div className="bg-slate-50 p-3 rounded-xl">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Experience</p>
              <p className="text-sm font-semibold text-slate-800">4+ Years</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Rating</p>
              <p className="text-sm font-semibold text-slate-800">⭐ 4.9 (24 Reviews)</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="flex-1 btn bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-xl">
              Approve & Pay
            </button>
            <button className="flex-1 btn btn-outline border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 rounded-xl">
              Reject Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};