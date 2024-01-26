let overlay = document.getElementById("overlay");
let text = document.getElementById("text");

// Hàm làm mờ ảnh khi load trang
function applyBlur() {
    overlay.style.filter = 'blur(0px)';
    setTimeout(fadeIn, 2000); // Sau 1 giây, bắt đầu hiệu ứng rõ dần
}

// Hàm hiệu ứng rõ dần và biến mất
function fadeIn() {
    let opacityValue = 0; // giá trị độ mờ
    function updateOpacity() {
        opacityValue += 0.01;
        overlay.style.opacity = opacityValue;
        text.style.opacity = opacityValue;
        text.innerHTML = Math.floor(opacityValue * 100) + '%';
        if (opacityValue < 1) {
            requestAnimationFrame(updateOpacity);
        } else {
            setTimeout(fadeOut, 2000);
        }
    }
    updateOpacity();
}

// Hàm hiệu ứng mờ và biến mất
function fadeOut() {
    let opacityValue = 1; // giá trị độ mờ
    function updateOpacity() {
        opacityValue -= 0.01;
        overlay.style.opacity = opacityValue;
        text.style.opacity = opacityValue;
        text.innerHTML = Math.floor(opacityValue * 100) + '%';
        if (opacityValue > 0) {
            requestAnimationFrame(updateOpacity);
        }
    }
    updateOpacity();
}

applyBlur(); // Bắt đầu hiệu ứng mờ khi load trang