
let app = require('./config/server')
const rotas = require('./app/routes/routes')

//módulo
//let msg = require('./modulo1.js')

//console.log('Mensagem vinda do modulo: ', msg)

//app.use(bodyParser.urlencoded()) 

rotas.rotaHome(app)
rotas.rotaEstudante(app)
rotas.rotaProfessor(app)
rotas.rotaConteudo(app)








