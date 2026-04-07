const comparisons = [
  {
    method: 'Willpower',
    icon: '💪',
    description: 'You fight the urge every single day. The craving is still there — you just white-knuckle through it. One weak moment undoes everything.',
    outcome: 'Average: 8 failed attempts',
    bad: true,
  },
  {
    method: 'Patches & Gum',
    icon: '🩹',
    description: 'You replace one nicotine source with another. The psychological addiction — the belief that smoking gives you something — remains completely untouched.',
    outcome: '95% relapse within a year',
    bad: true,
  },
  {
    method: 'iQuit (Allen Carr)',
    icon: '🧠',
    description: "You understand exactly why smoking felt good and why it never actually was. Once the illusion is broken, there's nothing to fight. The desire disappears — not suppressed, gone.",
    outcome: 'No cravings. No willpower. Free.',
    bad: false,
  },
];

export default function WhyItWorks() {
  return (
    <section className="py-24 bg-gray-50" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            The real reason you failed before
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why willpower fails.<br className="hidden sm:block" />
            Why this doesn&apos;t.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Most quit methods treat smoking as a habit to resist. Allen Carr discovered it&apos;s a{' '}
            <strong>trap built on false beliefs</strong> — and beliefs can be dismantled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 relative overflow-hidden ${
                item.bad
                  ? 'bg-white border border-gray-200'
                  : 'bg-gradient-to-br from-teal-600 to-emerald-500 text-white shadow-xl shadow-teal-200'
              }`}
            >
              {!item.bad && (
                <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ✓ iQuit Method
                </div>
              )}
              <div className={`text-4xl mb-4`}>{item.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${item.bad ? 'text-gray-800' : 'text-white'}`}>
                {item.method}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${item.bad ? 'text-gray-500' : 'text-teal-100'}`}>
                {item.description}
              </p>
              <div
                className={`text-sm font-semibold rounded-xl px-4 py-2.5 inline-block ${
                  item.bad
                    ? 'bg-red-50 text-red-600 border border-red-100'
                    : 'bg-white/20 text-white'
                }`}
              >
                {item.bad ? '✗ ' : '✓ '}
                {item.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Allen Carr quote block */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-teal-100 shadow-sm max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">💡</div>
          <blockquote className="text-xl sm:text-2xl font-bold text-gray-900 leading-relaxed mb-4">
            &ldquo;The only reason smokers find it difficult to quit is that they believe they are giving up a genuine pleasure or crutch. Remove that belief, and it becomes easy.&rdquo;
          </blockquote>
          <cite className="text-gray-500 not-italic text-sm">
            Allen Carr, author of <em>Easy Way to Stop Smoking</em> — sold 15 million copies worldwide
          </cite>
        </div>
      </div>
    </section>
  );
}
