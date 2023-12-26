/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
        colors :{
            nilla: "#00baf2",
            darkNilla: '#002970',
            lightColor:'#f5f5f5',
            lightNilla:'#00afe3',
            lightDarkNilla:'#0f4a8a',
            bgColor:'#f5f7fa',
            ultalightNilla :'#4ccff6',
            line:'#cccccc',
            fontColor:'#505050',
            smallFontColor:'#707086'
        },
        screens : {
            'verySmall' : {'max' : "399px"},
            'small' : {'max' :"550px"},
            'medium' :{'max' :"768px"},
            'large': {'max':'1070px'},
        }
    },
  },
  plugins: [],
}

