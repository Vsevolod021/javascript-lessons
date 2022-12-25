let func = new Function('a', 'b', 'alert(\'Hello world\')');

func();

function getFunc() {
    let value = 'Alex';

    let func = () => {alert(value)};

    return func;
}

getFunc()();