/////////////HEADER
const html = document.querySelector('html');
const headerCurrent = document.querySelectorAll('.header-list--item')
headerCurrent[0].classList.add('setColor')
headerCurrent.forEach(value=>{
    value.addEventListener('click', (e)=>{
        headerCurrent.forEach(value => value.classList.remove('setColor'))
        e.target.classList.add('setColor')
    })
})

//////////header responsive

const headerBar = document.querySelector('.header--bar__icon');
const headerControl = document.querySelector('.header--bar__control');
const headerOverlay = document.querySelector('.header--bar__overlay');
const headerMark = document.querySelector('.header--bar__xmark');

// Sự kiện khi nhấn vào icon để mở/đóng menu
headerBar.addEventListener('click', () => {
    const isControlVisible = getComputedStyle(headerControl).display !== 'none';
    
    if (!isControlVisible) {
        headerControl.style.display = 'flex';
        html.style.overflow = 'hidden'; 
    } else {
        headerControl.style.display = 'none';
        html.style.overflow = 'visible'; 
    }
});

headerControl.addEventListener('click', () => {
    headerControl.style.display = 'none';
    html.style.overflow = 'visible'; 
});

headerOverlay.addEventListener('click', (e) => {
    e.stopPropagation(); 
});

headerMark.addEventListener('click', () => {
    headerControl.style.display = 'none'; 
    html.style.overflow = 'visible'; 
});




//header search

const search = document.querySelector('.header-search--item')
const searchConverage = document.querySelector('.header--search__converage')
const headerIcon = document.querySelector('.header--container__icon')

const mediaQuery = window.matchMedia('(max-width: 63.9375em)')
function handleMedia(mediaQuery){
    if(mediaQuery.matches){ 
        search.addEventListener('click', ()=>{
            searchConverage.style.display = "flex"
            html.style.overflow = 'hidden'
        })
        headerIcon.addEventListener('click', () =>{
            searchConverage.style.display = "none"
            html.style.overflow = 'visible'
        })
    }
    else {
        searchConverage.style.display = 'none';
        html.style.overflow = 'visible';
    }
}
mediaQuery.addEventListener('change', handleMedia)
handleMedia(mediaQuery)


///////////////login/signup
//login
const loginElement = document.querySelector('.header-access--login')
const accessOverlay = document.querySelector('.header-access--overlay')
const loginOverlay = document.querySelector('.access--overlay__login')

loginElement.addEventListener('click', ()=>{
    accessOverlay.style.display = 'flex'
    loginOverlay.style.display = 'block'
    html.style.overflow = 'hidden'; 
    
})
loginOverlay.addEventListener('click',(e)=>{
    e.stopPropagation()
})

//singup
const signupElement = document.querySelector('.header-access--signup')
const signupOverlay = document.querySelector('.access--overlay__signup')

signupElement.addEventListener('click', (e)=>{
    accessOverlay.style.display = 'flex'
    signupOverlay.style.display = 'block'
    html.style.overflow = 'hidden'; 
    
})
signupOverlay.addEventListener('click',(e)=>{
    e.stopPropagation()
})
accessOverlay.addEventListener('click', ()=>{
    accessOverlay.style.display = 'none'
    loginOverlay.style.display = 'none' 
    signupOverlay.style.display = 'none'
    html.style.overflow = 'visible'; 
})



////////////SLIDER
const slider = document.querySelector('.slider--container');
const sliderList = document.querySelectorAll('.slider--img');
var index = 0;

setInterval(() => {
    index++;
    let width = sliderList[0].offsetWidth;
    const sliderListLength = sliderList.length
    if (index >= sliderListLength) {
        index = 0; 
    }
    slider.style.transform = `translateX(${-width * index}px)`;
}, 2000);



///////////////FOLLOW FOCUS
const follow = document.querySelector('.follow--header')
const followCon = document.querySelector('.follow-content')
const followHdRight = document.querySelector('.follow--right')

follow.addEventListener('click',()=>{
    followHdRight.classList.toggle('rotate')
    followCon.classList.toggle('hidden')
})


/////////UPDATENEW
const btnUpdate = document.querySelectorAll('.btn-updateNew')

function effectBtn(nodeList){
    nodeList.forEach(value=>{
        nodeList[0].classList.add('setColorText')
        value.addEventListener('click', e =>{
            nodeList.forEach(value => value.classList.remove('setColorText'))
            e.target.classList.add('setColorText')
        })
    })
}
effectBtn(btnUpdate)

//////Propose
const btnPropose = document.querySelectorAll('.btn-propose')
effectBtn(btnPropose)




 