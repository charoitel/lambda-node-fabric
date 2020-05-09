const fabric = require('fabric').fabric;

exports.handler = async (event) => {
    var canvas = new fabric.Canvas(null, {
        width: 200,
        height: 200,
        backgroundColor: 'darkblue'
    });

    var rect = new fabric.Rect({
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        fill: 'orange'
    });

    canvas.add(rect);

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'image/png'
        },
        body: canvas.toDataURL().replace(/data:image\/png;base64,/, ''),
        isBase64Encoded: true
    }
}
