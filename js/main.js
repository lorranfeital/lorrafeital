let ctx = document.getElementById('tendenciasGerais').getContext('2d');
let tendenciasGeraisChart = new Chart(ctx, {
    type: 'bar', // ou 'line', 'pie', etc.
    data: {
        labels: ['Tendência 1', 'Tendência 2', 'Tendência 3'], // Tópicos das tendências
        datasets: [{
            label: 'Número de Menções',
            data: [12, 19, 3], // Dados fictícios; você substituirá isso pelos dados reais
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        // Opções adicionais do gráfico (opcional)
    }
});