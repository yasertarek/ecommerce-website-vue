/* Trash */
navShow(e) {
        e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.add('nav__sub_menu--active')
    },
    handleNav(e) {
        // check for X and Y
        if (e.target.closest('.nav__sub_menu')) {
            e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.add('nav__sub_menu--active')
            console.log('You still on !', e.target)
        } else {
            e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.remove('nav__sub_menu--active')
            console.log('You went off !', e.target)
        }
        // if (e.clientX >= e.currentTarget.offsetLeft && e.clientX <= e.currentTarget.offsetLeft + e.currentTarget.offsetWidth) {
        //   console.log('You still on', e.currentTarget)
        //   e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.add('nav__sub_menu--active')
        // } else {
        //   console.log('You went off !', e.currentTarget)
        //   e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.remove('nav__sub_menu--active')
        // }
    }
navShow(e) {
        e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.add('nav__sub_menu--active')
    },
    handleNav(e) {
        // check for X and Y
        if (e.target.closest('.nav__sub_menu')) {
            e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.add('nav__sub_menu--active')
            console.log('You still on !', e.target)
        } else {
            e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.remove('nav__sub_menu--active')
            console.log('You went off !', e.target)
        }
        // if (e.clientX >= e.currentTarget.offsetLeft && e.clientX <= e.currentTarget.offsetLeft + e.currentTarget.offsetWidth) {
        //   console.log('You still on', e.currentTarget)
        //   e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.add('nav__sub_menu--active')
        // } else {
        //   console.log('You went off !', e.currentTarget)
        //   e.currentTarget.parentElement.querySelector('.nav__sub_menu').classList.remove('nav__sub_menu--active')
        // }
    }