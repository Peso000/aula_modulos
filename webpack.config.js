const { watch } = require("fs")
const path = require("path")

module.exports = {//aqui são os arquivos de entrada, onde a biblioteca deve pegar
    entry:{
        index: "./src/index.js"
    },

    mode: 'development',

    output:{ //Faz uma definição padrão para o nome do arquivo transpilado, aqui ele faz a definição e mostra onde colocar
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    module:{ //Define regras, neste caso, todo arquivo com final .js ele vai executar
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    devServer:{ // server para toda vez que for atualizado, ele recarrecar o servidor, como eu tenho o live server, não é necessario
        static: {
            directory: path.join(__dirname, 'dist'), // Caminho para os arquivos estáticos
          },
        watchFiles: ["./src/**/*"],
        liveReload: true,
        hot: true

    } 

}