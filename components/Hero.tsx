import AppStoreButtons from './AppStoreButtons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500 pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zm40 0v1H0V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 rounded-full px-4 py-2 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
          Science-backed quit smoking support
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Break Free From<br />
          <span className="text-emerald-300">Smoking.</span> For Good.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          iQuit tracks your health recovery in real time, fights cravings when they hit, and
          keeps you motivated every smoke-free hour.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4">
          <AppStoreButtons />
          <p className="text-teal-200 text-sm">Free to download · No credit card required</p>
        </div>

        {/* App preview mock */}
        <div className="mt-16 relative">
          <div className="mx-auto w-64 sm:w-80 bg-white/10 backdrop-blur-sm rounded-3xl p-1 shadow-2xl border border-white/20">
            <div className="bg-gradient-to-b from-teal-800 to-teal-900 rounded-3xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-xl">🚭</div>
                <div>
                  <div className="text-white font-semibold text-sm">iQuit</div>
                  <div className="text-teal-300 text-xs">Day 14 smoke-free 🎉</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 mb-3">
                <p className="text-teal-100 text-xs font-medium mb-2">Health recovery</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-teal-200 mb-1">
                      <span>Lung capacity</span><span>+14%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full">
                      <div className="h-1.5 bg-emerald-400 rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-teal-200 mb-1">
                      <span>Blood oxygen</span><span>Normal</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full">
                      <div className="h-1.5 bg-emerald-400 rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-teal-600/50 rounded-2xl p-4">
                <p className="text-emerald-300 text-xs font-medium mb-1">💰 Money saved</p>
                <p className="text-white text-lg font-bold">$84.70</p>
                <p className="text-teal-200 text-xs">168 cigarettes not smoked</p>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 sm:right-12 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="text-xl">❤️</span>
            <div>
              <div className="text-gray-800 font-bold text-xs">Heart rate</div>
              <div className="text-gray-500 text-xs">Back to normal</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 sm:left-12 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2" style={{ animation: 'bounce 3s infinite 1.5s' }}>
            <span className="text-xl">🏆</span>
            <div>
              <div className="text-gray-800 font-bold text-xs">14-day streak</div>
              <div className="text-gray-500 text-xs">Keep it up!</div>
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
