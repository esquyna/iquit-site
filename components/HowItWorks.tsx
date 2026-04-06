const steps = [
  {
    number: '01',
    icon: '🎯',
    title: 'Tell us about your habit',
    description:
      'Answer a few quick questions about how long you have smoked and why you want to stop. iQuit uses your answers to personalize the journey from day one.',
    color: 'text-teal-600',
    bg: 'bg-teal-100',
  },
  {
    number: '02',
    icon: '📖',
    title: 'Read one chapter a day',
    description:
      'Each of the 10 chapters dismantles one false belief about smoking — stress relief, habit, pleasure. By the end, the desire simply isn\'t there anymore.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    number: '03',
    icon: '📈',
    title: 'Watch your recovery unfold',
    description:
      'The moment you stop, your body starts healing. Track every milestone, every dollar saved, every day of your streak — and call on your AI coach whenever you need it.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How iQuit works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Not a list of tips. A complete method — the same one that has helped millions of people quit worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-teal-200 via-emerald-300 to-cyan-200 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center group">
              <div className="inline-flex items-center justify-center mb-6">
                <div className={`${step.bg} w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>
              </div>
              <div className={`text-5xl font-black ${step.color} opacity-20 mb-1 leading-none`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Health timeline card */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-100">
            <p className="text-teal-700 text-xs font-semibold uppercase tracking-wide mb-6">
              🕐 Your body starts recovering the moment you stop
            </p>
            <div className="space-y-4">
              {[
                { time: '20 minutes', event: 'Heart rate and blood pressure return to normal', icon: '❤️' },
                { time: '8 hours', event: 'Carbon monoxide in your blood drops to normal; oxygen levels rise', icon: '🫁' },
                { time: '48 hours', event: 'Taste and smell begin to return', icon: '👃' },
                { time: '72 hours', event: 'Breathing becomes easier as bronchial tubes relax', icon: '🌬️' },
                { time: '1 year', event: 'Heart disease risk is cut in half compared to a smoker', icon: '🎉' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-teal-700 text-xs font-semibold uppercase tracking-wide">
                      {item.time}
                    </p>
                    <p className="text-gray-700 text-sm mt-0.5">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
