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
          }
        },
      },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  