function onPreload (t, v) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}


export default function (v) {
    console.log("loading")

    onPreload(1000)
}

