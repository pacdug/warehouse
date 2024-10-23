const lamp = new Lamp();
const lampSwitch = new Switch(lamp);

function toggleLamp() {
    lampSwitch.press();
    updateLampState();
}

function updateLampState() {
    const lampElement = document.getElementById('lamp');
    if (lamp.isOn) {
        lampElement.classList.add('on');
        lampElement.classList.remove('off');
    } else {
        lampElement.classList.add('off');
        lampElement.classList.remove('on');
    }
}
