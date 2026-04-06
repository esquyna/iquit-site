const features = [
  {
    icon: '📊',
    title: 'Real-Time Health Recovery',
    description:
      'Watch your body heal hour by hour. Track lung capacity, blood pressure, circulation, and dozens of health milestones as your body bounces back from smoking.',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
  },
  {
    icon: '💪',
    title: 'Craving Crusher',
    description:
      'When the urge hits, iQuit is ready. Breathing exercises, NRT reminders, distraction techniques, and motivational boosts to get you through the tough moments.',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: '💰',
    title: 'Money & Time Saved',
    description:
      'See exactly how much cash you are saving, cigarettes you have avoided, and life you have gained back. Every hour smoke-free adds up to real, measurable progress.',
    bg: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
  },
];

const stats = [
  { value: '10k+', label: 'Smokers quit' },
  { value: '$2.4M', label: 'Saved by users' },
  { value: '4.8★', label: 'App Store rating' },
  { value: '94%', label: 'Craving reduction' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to quit smoking
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Powerful, science-backed tools that go beyond willpower — because quitting is a
            journey, not a single decision.
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
