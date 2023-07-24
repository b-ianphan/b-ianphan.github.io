/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'Dove-Gray': '#666666',
      'Background-Gray': '#f6f6f6',
      'lime-green' : '#32CD32',
      'forest-green' : "#228b22",
      'black' : '#000000',
      'white' : '#FFFFFF',
      'java-orange': '#f96900',
      "javascript-yellow": '#f0db4f',
      'typescript-blue': '#007acc',
      'html-orange': '#f06529',
      'css-blue': '#264de4',
      "c++-blue": '#044F88',
      "csharp-purple": '#682876',
      "tan": '#D2B48C',
      "powder-pink": '#ffa6a3',
      "plum": '#673147',
      "silver-gray": '#ADADC9',
      "mongoDB-green": '#3FA037',
      "spring-boot-green": '#c6d7b9',
      "regularGray": '#808080',
      "git-hub": '#333333',
      "linked-in":'#0077b5',
    },
    extend: {
      fontSize: {
        'head1': '3rem', // Adjust the value as per your preference
        'head2': '2rem',
        'head3': '1.2rem',
        'head4': '1.1rem',
      },
      fontFamily : {
        'bree-serif': ['Bree Serif', 'sans-serif'],
        'ace-sans': ['Ace Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
