document.addEventListener('DOMContentLoaded', function() {
    const calendario = document.getElementById('calendario');
    const dataAtual = new Date();
    let mes = dataAtual.getMonth();
    let ano = dataAtual.getFullYear();

    function criarCalendario(mes, ano) {
        const diasNoMes = new Date(ano, mes + 1, 0).getDate();
        const primeiroDiaDaSemana = new Date(ano, mes, 1).getDay();

        const mesesDoAno = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];

        const nomeMes = mesesDoAno[mes];
        
        let html = `
            <div class="header">
                <button id="anterior">&lt;</button>
                <h2>${nomeMes} ${ano}</h2>
                <button id="proximo">&gt;</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Domingo</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                        <th>Sábado</th>
                    </tr>
                </thead>
                <tbody>
        `;

        let contador = 1;
        for (let i = 0; i < 6; i++) {
            html += '<tr>';

            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < primeiroDiaDaSemana) || contador > diasNoMes) {
                    html += '<td></td>';
                } else {
                    html += `<td>${contador}</td>`;
                    contador++;
                }
            }

            html += '</tr>';
        }

        html += `
                </tbody>
            </table>
        `;

        calendario.innerHTML = html;

        document.getElementById('anterior').addEventListener('click', function() {
            if (mes === 0) {
                mes = 11;
                ano--;
            } else {
                mes--;
            }
            criarCalendario(mes, ano);
        });

        document.getElementById('proximo').addEventListener('click', function() {
            if (mes === 11) {
                mes = 0;
                ano++;
            } else {
                mes++;
            }
            criarCalendario(mes, ano);
        });
    }

    criarCalendario(mes, ano);
});
