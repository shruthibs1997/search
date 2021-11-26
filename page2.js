let arr = JSON.parse(localStorage.getItem('starwar'));

console.log(arr);
function displaydetails(arr) {
    let name = document.getElementById('name');
    name.innerHTML = arr.name.toUpperCase();
    let b12 = document.getElementById('b12');
    b12.innerHTML = arr.birth_year;
    let b22 = document.getElementById('b22');
    b22.innerHTML = arr.gender.toUpperCase();;
    let b32 = document.getElementById('b32');
    b32.innerHTML = arr.hair_color.toUpperCase();;
    let b42 = document.getElementById('b42');
    b42.innerHTML = arr.height;
    let b52 = document.getElementById('b52');
    b52.innerHTML = arr.mass;
    let b62 = document.getElementById('b62');
    b62.innerHTML = arr.skin_color.toUpperCase();;
}
displaydetails(arr);

function backtohome() {
    window.location.href='page1.html'
}
