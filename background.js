import VirtualGamepad from 'virtualGamepad.js';

const onPress = key => ({ gamepad }) => gamepad.onPressButton(key);

const initialState = () => ({ enabled: false, gamepad: new VirtualGamepad() });

const isEnabled = ({ enabled }) => !!enabled;
const enableExtension = state => state.enabled = true;
const disableExtension = state => state.enabled = false;

const EVENTS = {
  KeyW: onPress('up'),
  KeyA: onPress('left'),
  KeyS: onPress('down'),
  KeyD: onPress('right')
};

const state = initialState();
const handleKeyboardEvent = event => isEnabled(state) && EVENTS[event.code] && EVENTS[event.code](state);

document.addEventListener("keydown", handleKeyboardEvent);
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === "enableExtension") enableExtension(state);
  if (message.command === "disableExtension") disableExtension(state);
})
