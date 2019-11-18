window.onload = () => {
    const feetToInchesAction = 
        document.getElementById('feetToInchesAction');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };
};

const feetToInches = (feet) => {
    return feet * 12;
};
window.onload = () => {
    const milesToFeetAction = 
        document.getElementById('milesToFeetACtion');

    feetToInchesAction.onclick = () => {
        const milesToFeetInput = document.getElementById('milesToFeetInput');
        const milesToFeetDisplay = document.getElementById('milesToFeetDisplay');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
    };
};

const milesToFeet = (miles) => {
    return miles * 5280;
};    
window.onload = () => {
    const areaOfCircleAction = 
        document.getElementById('areaOfCircleAction');

    feetToInchesAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('areaOfCircleInput');
        const areaOfCircleDisplay = document.getElementById('areaOfCircleDisplay');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    };
};

const areaOfCircle = (area) => {
    return area;
};

