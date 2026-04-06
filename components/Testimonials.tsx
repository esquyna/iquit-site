const testimonials = [
  {
    name: 'James R.',
    role: 'Smoked for 12 years, quit in 2024',
    avatar: '👨‍💼',
    text: 'I was skeptical of the "no willpower" thing — sounded like a gimmick. But after chapter four I realized I was already thinking about cigarettes differently. By chapter eight I had quit without even setting a quit date. Day 120 today.',
    stars: 5,
  },
  {
    name: 'Sarah M.',
    role: 'Former pack-a-day smoker',
    avatar: '👩‍💻',
    text: 'The AI coach got me through some rough evenings. I could just type "I really want a cigarette right now" at midnight and get a real response about what I was feeling. No judgment, no generic tips — it actually understood where I was in the program.',
    stars: 5,
  },
  {
    name: 'David K.',
    role: 'Quit after 20+ years',
    avatar: '👨‍🔬',
    text: 'Every other app made me fight my cravings. iQuit made me understand them. There is a huge difference. Once you see that the cigarette was never actually giving you anything, the whole trap collapses. I have not smoked in seven months.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real people. Real results.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            People who quit not by fighting cigarettes — but by understanding them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 hover:shadow-lg transition-shadow border border-teal-100"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center text-2xl">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-gray-500 text-sm">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
