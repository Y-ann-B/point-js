

let otherStuff = document.querySelectorAll(".sub-item");

otherStuff.forEach(counter => {
    let ajout = counter.querySelector(".add");
    let moins = counter.querySelector(".remove");
    let valeur = counter.querySelector(".value");
    let suppr = counter.querySelector(".sup");
    let like = counter.querySelector(".like");

    ajout.addEventListener('click', () => {
        let currentValue = parseInt(valeur.textContent);
        valeur.textContent = currentValue + 1;
        updateTotal();
    });

    moins.addEventListener('click', () => {
        let currentValue = parseInt(valeur.textContent);
        if (currentValue > 0) {
            valeur.textContent = currentValue - 1;
            updateTotal();
        }
    });

    suppr.addEventListener('click', () => {
        counter.remove();
        updateTotal();
    });

    like.addEventListener('click', () => {
        like.classList.toggle('active');
    });
});

function updateTotal() {
    let total = 0;
    let values = document.querySelectorAll(".value");
    values.forEach(value => {
        total += parseInt(value.textContent);
    });
    document.getElementById("total").textContent = total;
}