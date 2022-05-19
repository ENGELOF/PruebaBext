const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () =>{
    mainMenuElement.classList.toggle('main-menu--show');

})


// cargarAPI
const apiKey = 'yVpL7cK1Xvmi22rkxLy769kVh4QtPTCi';
const input = document.getElementById('input');



function traerGif(apiKey) {
    for (let i = 1; i < 9; i++) {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`).then((res) => res.json()

            .then(({ data }) => {

                // se desfragmenta el link
                const { url } = data.images.original
                asignaGif(url, i);

            })

        );
    }
}
traerGif(apiKey);

function asignaGif(url, i) {
    const img = document.getElementById(i);

    console.log(img);
    img.src = url
}
