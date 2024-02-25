class VirtualGamepad {

  onPressButton(button) {
      this.buttonsState[button] = true;
      console.log("Botón presionado:", button);
  }

  onReleaseButton(button) {
      this.buttonsState[button] = false;
      console.log("Botón liberado:", button);
  }
}

export default VirtualGamepad;