console.log('This is drag and drop utility');

const img = document.querySelector('img');
const figure = document.getElementsByClassName('figure');

// Event listeners for draggable element imgBox
img.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

img.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'img';
});

for (figure of figures) {
    pizza1.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    pizza2.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    pizza3.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'figure'
    })

    box.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(box);
    })
}
