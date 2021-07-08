
function main()

{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => console.log(data))

}

main()