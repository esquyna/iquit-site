const testimonials = [
  {
    name: 'James R.',
    role: 'Smoked for 12 years, quit in 2024',
    avatar: '👨‍💼',
    text: 'I tried quitting four times before iQuit. The health timeline was what got me — seeing my lungs actually recovering in real time made it feel real, not just abstract. Day 90 today and I have never felt better.',
    stars: 5,
  },
  {
    name: 'Sarah M.',
    role: 'Former pack-a-day smoker',
    avatar: '👩‍💻',
    text: 'The craving crusher tool is insane. When I got the urge at 11 PM, I would open iQuit and do the breathing exercise. It sounds simple but it actually works. Six months smoke-free now. The money I have saved paid for a vacation.',
    stars: 5,
  },
  {
    name: 'David K.',
    role: 'Quit after 20+ years',
    avatar: '👨‍🔬',
    text: 'As someone who has smoked since college, I was skeptical. But watching $1,200 accumulate in my "savings" tracker over three months made quitting feel like gaining something, not losing something. That mindset shift is everything.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real people. Real results.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Thousands of people have used iQuit to quit for good. Here are a few of their stories.
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
