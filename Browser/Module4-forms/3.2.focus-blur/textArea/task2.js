import TextArea from "./textArea.js";

const fields = document.querySelectorAll('.quadrant__item');

const textAreaInstances = [];

fields.forEach((field, index) => textAreaInstances[index] = new TextArea(field));
