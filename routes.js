
exports.index = function(req, res){
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index', {url: fullUrl } )
};

exports.meta = function(req, res){
  return res.json({Error: 'Cannot read file information'}); 
};
