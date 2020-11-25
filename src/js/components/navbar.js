class Navbar {
    constructor(el){
        this.navbar = el;
        this.toggler = this.navbar.querySelector('.menu-toggler');
        this.menuContainer = this.navbar.querySelector('.menu-container');
        this.init();
    }

    init(){
        this.toggler.addEventListener('click', ()=>{
            if(this.menuContainer.classList.contains('open')){
                console.log("Click")
                this.menuContainer.classList.remove('open');
                this.toggler.classList.remove('open');
            }else{
                this.menuContainer.classList.add('open');
                this.toggler.classList.add('open');
            }
        })
    }
}

export default Navbar;