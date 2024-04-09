
  var lista = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < lista.length; i++) {
    var span = document.createElement("SPAN");
    span.className = "cerrar";
    span.appendChild(txt);
    lista[i].appendChild(span);
  }
  
  var cerrar = document.getElementsByClassName("cerrar");
  var i;
  for (i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
  function nuevoElemento() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("escrito").value;
    const fecha = Date(Date.now());
    var t = document.createTextNode(inputValue + " " + fecha);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Escriba un texto");
    } else {
      document.getElementById("seccionUL").appendChild(li);
    }
    document.getElementById("escrito").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "cerrar";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < cerrar.length; i++) {
      cerrar[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
