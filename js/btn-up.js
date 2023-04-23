const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up__hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.remove('btn-up__hide');
            this.el.classList.add('btn-up__hiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn-up__hiding');
            }, 200);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up__hiding')) {
            this.el.classList.add('btn-up__hiding');
            window.setTimeout(() => {
                this.el.classList.add('btn-up__hide');
                this.el.classList.remove('btn-up__hiding');
            }, 200)
        }
    },
    addEventListener() {
        //при прокрутки содержимого страницы
        window.addEventListener('scroll', ()=> {
            //величина прокрутки страницы
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            //если страница прокрученна больше 400px
            if (scrollY > 400) {
                //кнопка btn-up проявляется
                this.show();
            } else {
                // иначе кнопка btn-up скрыта
                this.hide();
            }
        });
        //при нажатии на кнопку btn-up
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            //прокрутка в начало страницы
            window.scrollTo({
                top: 0,
                left:0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();