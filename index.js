const changeColor = document.getElementById("changeColorBtn");
const boxes = document.querySelectorAll('[data-component="box"]');

changeColorBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        console.log(box);
        box.style.backgroundColor = getRandomColor();
    })
});

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color +=letters[Math.floor(Math.random() * 16)];
        
    }
    return color;
}