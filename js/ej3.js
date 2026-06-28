let apariciones = [];

for (let i = 0; i <= 12; i++) {
    apariciones[i] = 0;
}

for (let i = 1; i <= 50; i++) {

    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    apariciones[suma]++;
}

document.write("<table border='1'>");
document.write("<tr>");
document.write("<th>Suma</th>");
document.write("<th>Apariciones</th>");
document.write("</tr>");

for (let i = 2; i <= 12; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + apariciones[i] + "</td>");
    document.write("</tr>");
}

document.write("</table>");