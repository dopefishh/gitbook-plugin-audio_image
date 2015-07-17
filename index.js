// Based on my fiddle http://jsfiddle.net/xgrommx/577pn/5
function (body){
	var args = body.split(' ');
	return 'Number of arguments: ' + args.length;
}

module.exports = {
	blocks: {
		audio_image: {
			process: function(block) {
				return makeAudioImage(block.body);
			}
		}
	}
};
