export default function fetchComunnity(url, target) {
    fetch(url).then(r => r.json()).then(json => {
        // console.log(json)
    })
};