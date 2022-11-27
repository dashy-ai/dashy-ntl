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
				myreveal: {
					'0%': { transform: 'translateY(-100px)', opacity: 0 },
					'80%': { transform: 'translateY(4px)', opacity: 1 },
					'90%': { transform: 'translateY(-2px)', opacity: 1 },
					'100%': { transform: 'translateY(0px)', opacity: 1 },
				},
			},
			transitionTimingFunction: {
				easeInQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
				easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
			},
		},
		animation: {
			wave: 'wave 5s ease-in-out infinite',
			myreveal: 'myreveal 0.6s easeInQuart',
		},
	},
}
