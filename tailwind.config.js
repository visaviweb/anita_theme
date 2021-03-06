module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: {
      content: [
      './templates/**/*.twig',
      './assets/src/js/**/*.js',
      ]
    },
    theme: {
        extend: {
          width: {
            '1/7': '14.2857143%',
            '1/8': '12.5%',
          },
          padding: {
            'full': '100%'
          },
          fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
            'raleway': ['Raleway', 'sans-serif']
          },
        },
      },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  