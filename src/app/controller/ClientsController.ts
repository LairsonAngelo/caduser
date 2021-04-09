class ClientsController {
    index(req: any, res: any) {
        return res.json({
            msg: 'olá mundo vim para ficar'
        })
    }
}


export default new ClientsController();