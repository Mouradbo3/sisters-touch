module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#ca8a04',
        beige: '#f5ede6',
        'amber-100': '#fef3c7',
        'amber-50': '#fffbeb',
        'emerald-600': '#059669',
        'emerald-500': '#10b981',
        'emerald-700': '#047857',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(202, 138, 4, 0.18)',
        'luxury': '0 30px 80px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'hero-salon': "linear-gradient(180deg, rgba(202, 138, 4, 0.1), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80')",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
