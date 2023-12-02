function main () {
    document.querySelector('.more').addEventListener('click', function() {
        document.querySelector('.two').scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    })
    
    document.querySelector('.consult').addEventListener('click', function() {
        document.querySelector('.three').scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    })
    
var feedback = document.querySelector('.feedback');
    
    feedback.addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.querySelector('.name').value;
        let phone = document.querySelector('.phone').value;
        let email = document.querySelector('.email').value;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "index.php", true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('name=' + encodeURIComponent(name) + '&phone=' + encodeURIComponent(phone) + '&email=' + encodeURIComponent(email));
        document.querySelector('.h2_three').setAttribute('style', 'display:none');
        document.querySelector('.p_three').setAttribute('style', 'display:none');
        feedback.setAttribute('style', 'display:none');
        document.querySelector('.approval').setAttribute('style', 'display:none');
        document.querySelector('.three').setAttribute('style', 'height: 30vh;padding: 0;');
        document.querySelector('.successfully').setAttribute('style', 'transform:scale(1); opacity:1;');
    })
}

window.addEventListener("load", function(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "index.php", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
        let prices = xhr.responseText.split("ㅤ");
        let blockprice = document.querySelectorAll('.new_price');
        let index = 0;
        for (let newprice of blockprice) {
            newprice.insertAdjacentHTML('afterbegin', prices[index]);
            index++;
            }
        }
    }
    main();
});