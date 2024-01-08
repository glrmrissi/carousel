let count = 1; 
const ttlSlides = 4;

document.getElementById("radio1").checked = true;

setInterval(function() {
    pass_img();
}, 6000);


function pass_img() {
    const radioSelect = document.querySelector('input[name="btn_radio"]:checked')

    if (!radioSelect || parseInt(radioSelect.id.replace('radio', '')) === ttlSlides) {
        count = 1;
    } else {
        count = parseInt(radioSelect.id.replace('radio', '')) +1;
    }

    document.getElementById('radio' + count).checked = true;
    updateLabelBackground();
}

function updateLabelBackground() {
    var radioBtns = document.querySelectorAll('input[type="radio"]');
    var manualLabels = document.querySelectorAll('.btn_p');

    radioBtns.forEach(function (radio, index) {
        if (radio.checked) {
            manualLabels[index].classList.add('checked');
        }  else {
            manualLabels[index].classList.remove('checked');
        }
    });
}

updateLabelBackground();

document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
    radio.addEventListener('change', updateLabelBackground);
});