let user = {
    address : undefined
};

// чтобы при обращении к глубокому значению не вылетала ошибка
/* alert(user.address ? user.address.street ? user.address.street.name : null : null);
alert(user.address && user.address.street && user.address.street.name); */

alert(user?.address?.street)  // undefined

// Если значение перед .? - null или undefined, возвращается undefined


let userAdmin = {
    name: 'Admin',
    admin() {
        return 'Я админ';
    }
};

let userGuest = { };

alert(userAdmin.admin());
alert(userGuest.admin?.() ?? 'Я не админ'); // не вернет ошибку