function calcular() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    res = document.getElementById('resultado');
    let delta = (b ** 2) - (4 * a * c);

    if (delta > 0) {
     x1 = (-b + Math.sqrt(delta)) / (2 * a);
     x2 = (-b - Math.sqrt(delta)) / (2 * a);
     res.innerHTML = "O x' é: " + x1 + "<br/>" +"O x'' é: " + x2;
    } else if (delta == 0) {
        raiz = (-b + Math.sqrt(delta)) / (2 * a);
        res.innerHTML = "Raiz dupla: " + raiz;
     } else {
        real = (-b) / (2 * a);
        img1  = (Math.sqrt(-delta)) / (2 * a);
        img2  = (- Math.sqrt(-delta)) / (2 * a);
        res.innerHTML = "O x' é: " + real + "+" + img1+"i"+"<br/>" +
          "O x'' é: " + real + "+" + img2+"i"
     }
    }