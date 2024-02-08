const randomColor = function () 
{
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++)
    {
        color = color + hex[Math.ceil(Math.random()*16)];
    }
    return color;
}
let intervalId;
const startChange = function() {

    intervalId = setInterval(changeBgColor, 1000);

    function changeBgColor()
    {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChange = function() 
{
    clearInterval(intervalId);

};


document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);