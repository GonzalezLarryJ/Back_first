const compradorService = require('../service/compradorService');

exports.getCompradores = async(req, res)=>{
    try {
        let compradores = await compradorService.getCompradores();
        res.status(200).send(compradores)
    } catch (error) {
        res.status(500).send('Hubo un error el intentar recuperar a los compradores')
    }
}

exports.getComprador = async(req, res)=>{
    let id = req.params.id;
    try {
        let comprador = await compradorService.getComprador(id);
        res.status(200).send(comprador);
    } catch (error) {
        res.status(500).send('hubo un error en la consulta del registro comprador');
        console.log(error);
    }
}

exports.createComprador = async(req, res)=>{
    try {
        let compradorCreado = await compradorService.createComprador(req.body);
        res.status(200).send(compradorCreado);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error en la creacion del registro COMP')
    }
}

