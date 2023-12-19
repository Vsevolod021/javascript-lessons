export function useState() {
  console.log('this is useState')
}

export function useEffect() {
  console.log('this is useEffect')
}

export function useContext() {
  console.log('this is useContext')
}

export function useRef() {
  console.log('this is useRef')
}


class React {
  constructor(useState, useEffect, useContext, useRef) {
    this.useState = useState;
    this.useEffect = useEffect;
    this.useContext = useContext;
    this.useRef = useRef;
  }
}

const react = new React(useState, useEffect, useContext, useRef); 

export default react;