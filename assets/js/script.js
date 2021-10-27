const valores = [];

const agregar = () => {
    const campo = document.getElementById('campo');

    if (campo && campo.value !== '') {
        valores.push(campo.value);
        campo.value = '';
        campo.focus();
    }
}

const mostrar = () => {
    const ul = document.getElementById('lista');
    lista.innerHTML = '';

    if (valores.length > 0) {

        valores.map((valor, index) => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(valor));
            ul.appendChild(li);
        });

    }
    else {
        alert('No hay valores');
    }
    
}