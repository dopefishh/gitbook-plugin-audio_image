// Based on my fiddle http://jsfiddle.net/xgrommx/577pn/5
function (body){
    return 'this is supposed to be an audio image';
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
