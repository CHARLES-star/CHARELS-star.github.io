window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    function simple() {
        console.log('simple');
        simpleFunctionDisplay.textContent = "simple";
    }
    functionCallsAction .onclick = simple;   
}