/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'NavColor':'#F2EBE0',
        'NavColor1':'#DCD2BB',
        'green':'#164F49',
        'btn-active':'#164F49'


      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}
