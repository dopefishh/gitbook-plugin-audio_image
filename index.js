module.exports = {
	blocks: {
		audio_image: {
			process: function(block) {
					var args = block.body.split(' ');
					return 'Number of arguments: ' + args.length;
			}
		}
	}
};
