module.exports = {
	darkMode: 'class',
	content: [],
	theme: {
		plugins: [],
		extend: {
			colors: {
				'cobolt-blue': '#0011AE',
				'my-yellow': '#FAFF00',
			},
			keyframes: {
				wave: {
					'0%': { transform: 'translateX(-400px)' },
					'50%': { transform: 'translateX(300px)' },
					'100%': { transform: 'translateX(-400px)' },
				},
			},
		},
		animation: {
			wave: 'wave 5s ease-in-out infinite',
		},
	},
}
