const features = [
  {
    icon: '📖',
    title: 'The Allen Carr Method',
    description:
      'Ten chapters that dismantle every false belief keeping you hooked. No willpower battles, no white-knuckling. You simply read, understand, and the desire to smoke fades — for good.',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
  },
  {
    icon: '🤖',
    title: 'AI Coach, 24/7',
    description:
      'Powered by Claude, your AI coach is ready whenever a craving hits or doubt creeps in. Ask anything — about the method, your progress, or what to do right now. It knows where you are.',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: '📊',
    title: 'Progress You Can See',
    description:
      'Real-time health milestones, money saved, cigarettes avoided, and a daily streak. Watch your body heal hour by hour — and your savings grow every day you stay smoke-free.',
    bg: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
  },
];

const stats = [
  { value: '10', label: 'Chapters in the program' },
  { value: '11', label: 'Health milestones tracked' },
  { value: '4.8★', label: 'App Store rating' },
  { value: '1×', label: 'Pay once, free forever' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A different kind of quit app
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Most quit apps help you fight cravings. iQuit helps you stop wanting cigarettes in the first place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div
                className={`${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-700 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
