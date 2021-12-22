export default function convertToString(input) {
    let ssr = [], sr = [], r = [], _input = [], _output = [];

    //Split the text doc into 3 arrays when a new line is started
    _input = input.split(/\r\n+/);

    //Split the text doc into it's given rarities based on the header it's provided
    for(let i = 0; i < _input.length; i++) {
        if(_input[i].includes("SSR:")) {
            _input[i] = _input[i].replace("SSR:", "");
            ssr = _input[i].split(/,+/);
        } else if (_input[i].includes("SR:")) {
            _input[i] = _input[i].replace("SR:", "");
            sr = _input[i].split(/,+/);
        } else {
            _input[i] = _input[i].replace("R:", "");
            r = _input[i].split(/,+/);
        };
    };

    //Trim each array for ease of reading/display
    ssr = ssr.map(arr => arr.trim());
    sr = sr.map(arr => arr.trim());
    r = r.map(arr => arr.trim());
    //Set output as an array with three array based on rarity
    _output.push(ssr, sr, r);

    return {
        output: _output,
        ssr: ssr,
        sr: sr,
        r: r,
    };
};