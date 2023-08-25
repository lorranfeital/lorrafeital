// 1. Inicialização e Event Listeners
document.getElementById("fetchButton").addEventListener("click", fetchRedditPosts);

// 2. Variáveis Globais
let chart; // Variável para armazenar o gráfico

// 3. Funções

// Função para buscar posts do Reddit
async function fetchRedditPosts() {
    const REDDIT_TOKEN_URL = "https://celebrated-muffin-2cf7e6.netlify.app/.netlify/functions/getRedditToken";
    const REDDIT_POSTS_URL = "https://celebrated-muffin-2cf7e6.netlify.app/.netlify/functions/getRedditPosts";
    
    try {
        // Primeiro, obtenha o token de acesso
        const tokenResponse = await fetch(REDDIT_TOKEN_URL);
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Use o token de acesso para buscar as postagens
        const postsResponse = await fetch(REDDIT_POSTS_URL, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        const postData = await postsResponse.json();
        displayChart(postData.data.children); // Passa as postagens para a função displayChart

    } catch (error) {
        console.error("Erro ao buscar posts do Reddit:", error);
    }
}

// Função para exibir um gráfico com os dados do Reddit
function displayChart(posts) {
    const ctx = document.getElementById('tendenciasGerais').getContext('2d');

    // Dados para o gráfico
    const labels = posts.map(post => post.data.title);
    const data = posts.map(post => post.data.ups); // Usando upvotes como valor numérico

    if (chart) {
        chart.destroy(); // Destruir o gráfico anterior, se houver
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Upvotes',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
