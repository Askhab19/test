
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$("#net").hover(function () { 
    $(this).css({
        top: getRandomInt(0, 300)+"px",
        left: getRandomInt(0, 300)+"px",
        right: getRandomInt(0, 300)+"px",
        bottom: getRandomInt(0, 300)+"px"
    });
}, function () { });

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$("#beg").hover(function () { 
    $(this).css({
        top: getRandomInt(0, 300)+"px",
        left: getRandomInt(0, 300)+"px",
        right: getRandomInt(0, 300)+"px",
        bottom: getRandomInt(0, 300)+"px"
    });
}, function () { });



const da = document.querySelector('.da')

da.addEventListener('click', function(e){
    document.body.style.background="linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%"
    alert('Красава я тоже, мущщинский наш пацан ты')
})


const net = document.querySelector('.net')

net.addEventListener('click', function(e){
    alert('Не ври шалун')
    document.body.style.background="black";
})