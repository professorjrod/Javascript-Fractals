const canvas = document.getElementById('canvas');

const clearRender = () => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}