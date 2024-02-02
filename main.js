let count = 0;

const value = document.querySelector('.counter h1');
const btns = document.querySelectorAll('.functions button');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('btn_decrease')) {
            count--;
        } else if (styles.contains('btn_increase')) {
            count++;
        } else if (styles.contains('btn_reset')) {
            count = 0;
        }

        if (count > 0) {
            document.querySelector('.counter h1').style.color = 'green'
        } else if (count < 0) {
            document.querySelector('.counter h1').style.color = 'red'
        } else {
            document.querySelector('.counter h1').style.color = 'black'
        }
        value.textContent = count;
    });
});
