const colors = require('colors');

module.exports= (sails)=>{
  return{
    configure: ()=>{
      if(!sails.config.color){
        sails.config.color="cyan";
      }else {
        sails.config.color=colors[sails.config.color];
      }
    },
    initialize: (next) =>{
      global['color']=(data)=>{
        console.log(data[sails.config.color]);
      }
      return next();
    }
  }
}
