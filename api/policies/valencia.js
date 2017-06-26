/**
 * valencia
 *
 * @module      :: Policy
 * @description :: TODO: You might write a short summary of how this policy works and what it represents here.
 * @help        :: http://sailsjs.org/#!/documentation/concepts/Policies
 */
module.exports = function(req, res, next) {
  if(req.session.nombre =="valencia")
    return next();
  return res.forbidden();

};
