document.getElementById('change_style').addEventListener('change', handleCheckboxChange);

function handleCheckboxChange() {
    let checkbox = document.getElementById('change_style');
    let change_container = document.getElementById('change_container');
    while (change_container.firstChild) {
        change_container.removeChild(change_container.firstChild);
    }
    change_container.style.backgroundColor = '';


    if (checkbox.checked) {
        let div_font_size = document.createElement('div');
        let sizeText = document.createElement('h4');
        let sizePlus = document.createElement('button');
        let sizeMinus = document.createElement('button');
        sizeText.innerHTML = 'Font size';
        sizePlus.innerHTML = '+';
        sizeMinus.innerHTML = '-';
        div_font_size.appendChild(sizeText);
        div_font_size.appendChild(sizePlus);
        div_font_size.appendChild(sizeMinus);

        let div_color_text = document.createElement('div');
        let colorText = document.createElement('h4');
        let colorInput = document.createElement('input');
        colorText.innerHTML = 'Text color';
        colorInput.type = "color";
        colorInput.value = "#000000"
        div_color_text.appendChild(colorText);
        div_color_text.appendChild(colorInput);

        let div_color_bg = document.createElement('div');
        let colorBgInput = document.createElement('input');
        let colorBgText = document.createElement('h4');
        colorBgText.innerHTML = 'Background color';
        colorBgInput.type = "color";
        colorBgInput.value = "#FFFFFF"    
        div_color_bg.appendChild(colorBgText);
        div_color_bg.appendChild(colorBgInput);    

        sizePlus.addEventListener('click', function () {
            let currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
            console.log(currentFontSize);
            document.body.style.fontSize = (currentFontSize + 1) + 'px';
        });

        sizeMinus.addEventListener('click', function () {
            let currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
            console.log(currentFontSize);
            document.body.style.fontSize = (currentFontSize - 1) + 'px';
        });

        colorInput.addEventListener('change', function () {
            document.body.style.color = colorInput.value;
        });

        colorBgInput.addEventListener('change', function () {
            document.body.style.backgroundColor = colorBgInput.value;
        });

       
        change_container.appendChild(div_font_size);
        change_container.appendChild(div_color_text);
        change_container.appendChild(div_color_bg);
    }
}