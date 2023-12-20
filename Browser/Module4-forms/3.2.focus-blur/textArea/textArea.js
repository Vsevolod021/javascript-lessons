class TextArea {
  value;
  textInput;

  constructor(field) {
    this.field = field;

    this.textInput = document.createElement('textarea');
    this.textInput.id = 'textarea';

    this.value = '';

    this.addEventListeners();
  }

  addEventListeners() {
    this.field.addEventListener('click', this.onStartEdit.bind(this)); 
    this.textInput.addEventListener('blur', this.onEndEdit.bind(this)); 
  }

  onStartEdit() {
    this.field.replaceWith(this.textInput);

    this.textInput.focus();

    this.textInput.onblur = () => {
      this.onEndEdit();
    }
  }

  onEndEdit() {
    this.textInput.replaceWith(this.field);

    this.value = this.textInput.value;
    this.field.innerHTML = this.value;
  }
}

export default TextArea;