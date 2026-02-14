{tutor?.map((tutor, id) =>{
            return <div
              key={id}
              className="relative bg-white/80 backdrop-blur-lg rounded-3xl border border-white/40 shadow-xl p-10 text-center overflow-hidden"
            >
              <img
                src={dummyImage}
                alt="Tutor profile"
                className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-white shadow-xl"
              />

              <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-xs font-semibold border border-emerald-100">
                <BadgeCheck className="w-4 h-4" />
                Verified Tutor
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  <h1 className="text-3xl font-bold text-slate-900">
                    {tutor.name}
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-2 mt-3 text-slate-600 text-sm">
                  <Mail className="w-4 h-4 text-slate-400" />
                  {tutor.email}
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="mt-10 px-8 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Edit Profile
              </button>
            </div>
          })}