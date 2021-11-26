let div_dis = document.getElementById('auto');
    var timer;
    function toggle() {
        timer = setTimeout(function () {
            main();
        }, 2000)

    }

    async function main() {
        let movies = await autosuggest();
        appendsuggest(movies);
    }

    async function autosuggest() {
        let query = document.getElementById("input").value;
        if (query.length == 0) {
            return false;
        }
        let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
        let data = await res.json();
        //console.log(data)
        return (data.results);
        //appendsuggest(data.results);
    }
    //autosuggest()

    function appendsuggest(d) {
        div_dis.innerHTML = null;
        d.forEach((el) => {
            console.log(el.name)
            let div = document.createElement("div");
            div.innerHTML = el.name;
            div.addEventListener('click', function () {
                window.location.href='page2.html'
                nextpage(el);
            })
            div_dis.append(div);
        });
    }

    function nextpage(el){
        let arr = el;
        localStorage.setItem('starwar', JSON.stringify(arr));
    }