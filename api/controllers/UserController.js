/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function createUser(req, res) {
	console.log("entramos al controlador ");
	User.create({
		nombre: req.body.nombre,
		password: req.body.password,
		edad: req.body.edad,
	}).exec((err, user)=>{
		if(err)
			return res.status(500).send("ERROR");
		return  res.ok(foundUsers);
	});
}

function readUser(req,res){
	return User.find()
	.then((foundUsers) => {
		res.status(200).render('readUser',{
			title: "Usuarios",
			users: foundUsers,
			layout: 'layout',
		});
	})
	.catch((err) =>{
		res.status(500).send("algo ocurrio");
	})
}

function saludo(req, res) {
  servicio(req.params.nombre);
	color("hola "+ req.params.nombre);
	res.ok("hola "+ req.params.nombre);
}
module.exports = {
	createUser,
	readUser,
	saludo,
};
