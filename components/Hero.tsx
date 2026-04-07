import AppStoreButtons from './AppStoreButtons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080f1a] pt-16">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500 rounded-full filter blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-400 rounded-full filter blur-[100px] opacity-8 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Empathy hook */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 rounded-full px-5 py-2 text-sm font-medium mb-8">
          <span className="text-base">✋</span>
          Tried quitting before? So did 95% of our users.
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
          Quit smoking without<br />
          <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
            fighting a single craving.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Patches, gum, and willpower ask you to endure. iQuit is different — it removes{' '}
          <em>the desire to smoke</em>, not just the cigarettes. Based on the Allen Carr method.
        </p>
        <p className="text-teal-400 font-semibold text-base mb-10">
          10 chapters. No withdrawal torture. No day-count anxiety.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <AppStoreButtons />
          <p className="text-gray-500 text-sm">Free to start · Available on iOS & Android</p>
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-16">
          {[
            { value: '1,200+', label: 'smoke-free users' },
            { value: '4.8★', label: 'App Store rating' },
            { value: '10', label: 'guided chapters' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-teal-400 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* App preview mock */}
        <div className="relative max-w-sm mx-auto">
          <div className="mx-auto w-64 sm:w-72 bg-white/5 backdrop-blur-sm rounded-3xl p-1 shadow-2xl border border-white/10">
            <div className="bg-gradient-to-b from-[#0d1a2e] to-[#080f1a] rounded-3xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-xl border border-teal-500/30">🚭</div>
                <div>
                  <div className="text-white font-semibold text-sm">Day 14 smoke-free 🎉</div>
                  <div className="text-teal-400 text-xs">Chapter 4 in progress</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 mb-3 border border-white/5">
                <p className="text-gray-400 text-xs font-medium mb-2">Health recovery</p>
                <div className="space-y-2">
                  {[
                    { label: '❤️ Heart rate', status: 'Normalized', done: true },
                    { label: '🫁 CO levels', status: 'Clear', done: true },
                    { label: '👃 Smell & taste', status: 'Restored', done: true },
                    { label: '💨 Lung capacity', status: 'In progress…', done: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-gray-300">{item.label}</span>
                      <span className={item.done ? 'text-emerald-400 font-semibold' : 'text-white/30'}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-teal-500/10 rounded-2xl p-3 border border-teal-500/20">
                <p className="text-teal-400 text-xs font-medium mb-1">💰 Money saved</p>
                <p className="text-white text-xl font-black">$84.70</p>
                <p className="text-gray-400 text-xs">168 cigarettes not smoked</p>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-6 sm:right-[-2rem] bg-white rounded-2xl px-3 py-2.5 shadow-xl flex items-center gap-2">
            <span className="text-lg">🧠</span>
            <div>
              <div className="text-gray-800 font-bold text-xs">No cravings</div>
              <div className="text-gray-400 text-xs">Chapter 6 done</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-6 sm:left-[-2rem] bg-white rounded-2xl px-3 py-2.5 shadow-xl flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <div>
              <div className="text-gray-800 font-bold text-xs">14-day streak</div>
              <div className="text-gray-400 text-xs">Keep it up!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 40 1440 20V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
