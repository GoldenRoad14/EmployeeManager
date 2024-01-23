const ascii = require('ascii-art-font');


function generateAsciiArt(){
    console.log('ascii hit');
ascii.create('INITECH   HR', 'doom', function(err, result){
    if(!err){
    const asciiArtFinal = `\n${result}`;
    console.log(asciiArtFinal);
    } else{
        console.error(err);
    };
});
}
module.exports = {
    generateAsciiArt
};