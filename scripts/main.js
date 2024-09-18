/////////////HEADER

const headerCurrent = document.querySelectorAll('.header-list--item')
headerCurrent[0].classList.add('setColor')
headerCurrent.forEach(value=>{
    value.addEventListener('click', (e)=>{
        headerCurrent.forEach(value => value.classList.remove('setColor'))
        e.target.classList.add('setColor')
    })
})

//header search
const hmtl = document.querySelector('html')
const search = document.querySelector('.header-search')
const searchCoverage = document.querySelector('.header--search__converage')
const headerIcon = document.querySelector('.header--container__icon')

const mediaQuery = window.matchMedia('(max-width: 63.9375em)')
function handleMedia(mediaQuery){
    if(mediaQuery.matches){ 
        search.onclick = () => {
            searchCoverage.style.display = "flex"
            hmtl.style.overflow = 'hidden'
        }
        headerIcon.onclick = () =>{
            searchCoverage.style.display = "none"
            hmtl.style.overflow = 'visible'
        }
    }
}
//kiểm tra sự thay đổi và gọi lại hàm handleMedia
mediaQuery.addEventListener('change', handleMedia)
//gọi đến hàm handleMedia và để kiểm tra và áp dụng điều kiện 
handleMedia(mediaQuery)


////////////SLIDER
const slider = document.querySelector('.slider--container');
const sliderList = document.querySelectorAll('.slider--img');
var index = 0;

setInterval(() => {
    index++;
    let width = sliderList[0].offsetWidth;
    const sliderListLength = sliderList.length
    console.log(sliderListLength)
    if (index >= sliderListLength) {
        index = 0; 
    }
    slider.style.transform = `translateX(${-width * index}px)`;
}, 3000);



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




 