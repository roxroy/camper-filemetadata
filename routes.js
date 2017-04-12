var fs = require('fs'),
    path = require('path');


const remove_file = function(file_path) {
fs.unlink(file_path, function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully: ' + file_path);
   });  
}
   
exports.index = function(req, res){
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index', {url: fullUrl } )
};

exports.meta = function(req, res){
  var meta_data = {size: req.file.size };
  
  remove_file(path.join(__dirname, req.file.path));

  return res.json(meta_data); 
};
