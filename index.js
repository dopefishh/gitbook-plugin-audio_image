function parse_arguments(item, kwargs){
	s = '';
	for(var key in kwargs){
		if(key.indexOf(item) == 0){
			s += ' ' + key.substr(item.length);
			if(kwargs[key] != ""){
				s += '="' + kwargs[key] + '"';
			}
		}
	}
	return s;
}

module.exports={
	blocks: {
		aimg: {
			process: function(block) {
				args = block.body.match(/(\\.|[^,])+/g);
				imgtags = parse_arguments('img', block.kwargs);
				audiotags = parse_arguments('audio', block.kwargs);
				if(args.length >= 2){
					var iid = Math.random().toString(16).substr(2);
					s = ''.concat(
						'<img src="',
					 	args[0].replace('\\,', ','),
					 	'" onclick="document.getElementById(\'aimg-',
						iid,
					 	'\').play()"',
					 	imgtags, '/><br />');
					if (this.generator == 'website') {
						s = s.concat('<audio id="aimg-', iid, '"', audiotags, '>');
						for(var i = 1; i<args.length; i++){
							s += '<source src="' + args[i].replace('\\,', ',') + '" />';
						}
					}
					return s + args.slice(1) + '</audio>';
				} else {
					return ">2 arguments required separated by ','";
				}
			}
		}
	}
};
