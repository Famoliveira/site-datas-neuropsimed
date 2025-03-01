document.addEventListener('DOMContentLoaded', function() {
    // Dados dos eventos
    const specificDates = [
        // MARÇO
        { month: 'Março', day: 8, title: 'Dia Internacional da Mulher', description: 'Um dia para celebrar as conquistas femininas e reforçar a importância do cuidado com a saúde mental das mulheres.', emoji: '✨' },
        { month: 'Março', day: 21, title: 'Dia Internacional da Síndrome de Down', description: 'Momento para conscientizar sobre a condição e promover a inclusão e respeito às pessoas com Síndrome de Down.', emoji: '🌈' },
        { month: 'Março', day: 24, title: 'Dia Nacional de Combate à Tuberculose', description: 'Data para informar sobre prevenção e tratamento, destacando a importância do acompanhamento psicológico durante doenças crônicas.', emoji: '🗣️' },
        
        // ABRIL
        { month: 'Abril', day: 2, title: 'Dia Mundial de Conscientização do Autismo', description: 'Data para promover a inclusão e o respeito às pessoas com TEA, destacando a importância do diagnóstico e suporte adequado.', emoji: '🧩' },
        { month: 'Abril', day: 7, title: 'Dia Mundial da Saúde', description: 'Oportunidade para enfatizar a conexão entre saúde física e mental, promovendo abordagens integrativas.', emoji: '🏃' },
        
        // MAIO
        { month: 'Maio', day: 8, title: 'Dia Nacional de Combate ao Estresse', description: 'Data para compartilhar técnicas de manejo do estresse e promover a importância do equilíbrio na vida cotidiana.', emoji: '❤️' },
        { month: 'Maio', day: 17, title: 'Dia Internacional de Combate à Homofobia', description: 'Data para discutir o impacto da discriminação na saúde mental e a importância da aceitação.', emoji: '🧠' },
        
        // JULHO
        { month: 'Julho', day: 27, title: 'Dia do Psicólogo', description: 'Celebração da profissão e sua importância para a saúde mental da sociedade.', emoji: '👨‍⚕️' },
        
        // AGOSTO
        { month: 'Agosto', day: 11, title: 'Dia do Nutricionista', description: 'Data para destacar a relação entre alimentação saudável e bem-estar emocional.', emoji: '🧠' },
        
        // SETEMBRO
        { month: 'Setembro', day: 10, title: 'Dia Mundial de Prevenção ao Suicídio', description: 'Data crucial para campanha de conscientização, prevenção e combate ao estigma relacionado à saúde mental.', emoji: '💛' },
        { month: 'Setembro', day: 21, title: 'Dia Mundial da Doença de Alzheimer', description: 'Momento para informar sobre a doença e a importância do suporte psicológico aos pacientes e familiares.', emoji: '🧠' },
        
        // OUTUBRO
        { month: 'Outubro', day: 10, title: 'Dia Mundial da Saúde Mental', description: 'Momento para reforçar a importância do bem-estar emocional e psicológico, incentivando a prevenção e os cuidados com a saúde mental.', emoji: '👧' },
        { month: 'Outubro', day: 16, title: 'Dia Mundial da Alimentação', description: 'Oportunidade para destacar a relação entre nutrição adequada e saúde mental.', emoji: '👦' },
        
        // NOVEMBRO
        { month: 'Novembro', day: 14, title: 'Dia Mundial do Diabetes', description: 'Data para abordar o impacto emocional de doenças crônicas e estratégias de enfrentamento.', emoji: '🗣️' },
        { month: 'Novembro', day: 20, title: 'Dia Nacional de Zumbi e da Consciência Negra', description: 'Momento para discutir os impactos do racismo na saúde mental e promover o bem-estar da população negra.', emoji: '👨' },
        
        // DEZEMBRO
        { month: 'Dezembro', day: 3, title: 'Dia Internacional das Pessoas com Deficiência', description: 'Data para promover a inclusão e abordar aspectos psicológicos relacionados às pessoas com deficiência.', emoji: '♿' },
        { month: 'Dezembro', day: 10, title: 'Dia Internacional dos Direitos Humanos', description: 'Oportunidade para discutir como o acesso à saúde mental é um direito humano fundamental.', emoji: '💗' }
    ];

    const monthlyCampaigns = [
        { month: 'Março', title: 'Março Azul', description: 'Prevenção e combate ao câncer colorretal', color: '#1e88e5', emoji: '💙' },
        { month: 'Março', title: 'Março Lilás', description: 'Conscientização sobre câncer de colo do útero', color: '#9c27b0', emoji: '💜' },
        { month: 'Abril', title: 'Abril Azul', description: 'Mês de Conscientização do Autismo', color: '#2196f3', emoji: '🧩💙' },
        { month: 'Maio', title: 'Maio Amarelo', description: 'Atenção ao trânsito e prevenção de acidentes', color: '#ffd600', emoji: '🚦💛' },
        { month: 'Maio', title: 'Maio Vermelho', description: 'Combate à hepatite', color: '#f44336', emoji: '❤️' },
        { month: 'Junho', title: 'Junho Vermelho', description: 'Incentivo à doação de sangue', color: '#e53935', emoji: '❤️' },
        { month: 'Junho', title: 'Junho Laranja', description: 'Conscientização sobre anemia e leucemia', color: '#ff9800', emoji: '🧡' },
        { month: 'Julho', title: 'Julho Amarelo', description: 'Conscientização sobre hepatites virais', color: '#ffeb3b', emoji: '💛' },
        { month: 'Julho', title: 'Julho Verde', description: 'Combate ao câncer ósseo', color: '#4caf50', emoji: '💚' },
        { month: 'Agosto', title: 'Agosto Dourado', description: 'Incentivo ao aleitamento materno', color: '#ffc107', emoji: '🥇' },
        { month: 'Setembro', title: 'Setembro Amarelo', description: 'Prevenção ao suicídio e valorização da vida', color: '#ffeb3b', emoji: '💛' },
        { month: 'Setembro', title: 'Setembro Verde', description: 'Conscientização sobre doação de órgãos', color: '#4caf50', emoji: '💚' },
        { month: 'Outubro', title: 'Outubro Rosa', description: 'Prevenção do câncer de mama', color: '#e91e63', emoji: '🎀' },
        { month: 'Novembro', title: 'Novembro Azul', description: 'Conscientização sobre a saúde do homem', color: '#1976d2', emoji: '💙' },
        { month: 'Novembro', title: 'Novembro Roxo', description: 'Conscientização sobre a prematuridade', color: '#9c27b0', emoji: '💜' },
        { month: 'Dezembro', title: 'Dezembro Vermelho', description: 'Combate ao HIV/AIDS', color: '#f44336', emoji: '❤️' },
        { month: 'Dezembro', title: 'Dezembro Laranja', description: 'Combate ao câncer de pele', color: '#ff9800', emoji: '🧡' }
    ];

    // Definir data atual (usando 1 de Março de 2025 como base)
    const currentDate = new Date(2025, 2, 1);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('today-date').textContent = currentDate.toLocaleDateString('pt-BR', options);

    function compareDates(date1, date2) {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }

    function getEventDate(event) {
        const monthMap = {
            'Janeiro': 0, 'Fevereiro': 1, 'Março': 2, 'Abril': 3,
            'Maio': 4, 'Junho': 5, 'Julho': 6, 'Agosto': 7,
            'Setembro': 8, 'Outubro': 9, 'Novembro': 10, 'Dezembro': 11
        };
        return new Date(2025, monthMap[event.month], event.day);
    }

    const sortedEvents = [...specificDates].sort((a, b) => getEventDate(a) - getEventDate(b));
    const upcomingEvents = sortedEvents.filter(event => getEventDate(event) >= currentDate).slice(0, 3);
    const upcomingEventsContainer = document.getElementById('upcoming-events-container');
    upcomingEventsContainer.innerHTML = '';

    if (upcomingEvents.length > 0) {
        upcomingEvents.forEach(event => {
            const eventDate = getEventDate(event);
            const formattedDate = eventDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-date">${event.emoji} ${formattedDate}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
            `;
            upcomingEventsContainer.appendChild(eventCard);
        });
    } else {
        upcomingEventsContainer.innerHTML = '<p>Nenhum evento próximo encontrado.</p>';
    }

    const eventsByMonth = {};
    specificDates.forEach(event => {
        if (!eventsByMonth[event.month]) {
            eventsByMonth[event.month] = [];
        }
        eventsByMonth[event.month].push(event);
    });

    const specificDatesGrid = document.getElementById('specific-dates-grid');
    specificDatesGrid.innerHTML = '';
    for (const month in eventsByMonth) {
        const monthCard = document.createElement('div');
        monthCard.className = 'month-card';
        let monthHTML = `<h4>${month}</h4><ul class="month-card-events">`;
        eventsByMonth[month].forEach(event => {
            monthHTML += `
                <li>
                    <span class="event-day">${event.day}</span>
                    ${event.title} ${event.emoji}
                </li>
            `;
        });
        monthHTML += '</ul>';
        monthCard.innerHTML = monthHTML;
        specificDatesGrid.appendChild(monthCard);
    }

    const campaignsByMonth = {};
    monthlyCampaigns.forEach(campaign => {
        if (!campaignsByMonth[campaign.month]) {
            campaignsByMonth[campaign.month] = [];
        }
        campaignsByMonth[campaign.month].push(campaign);
    });

    const campaignsGrid = document.getElementById('monthly-campaigns-list');
    campaignsGrid.innerHTML = '';
    for (const month in campaignsByMonth) {
        campaignsByMonth[month].forEach(campaign => {
            const campaignCard = document.createElement('div');
            campaignCard.className = 'campaign-card';
            campaignCard.style.borderLeftColor = campaign.color;
            campaignCard.innerHTML = `
                <div class="campaign-title">
                    <span>${campaign.emoji}</span>
                    <h4>${campaign.title}</h4>
                </div>
                <div class="campaign-description">${campaign.description}</div>
            `;
            campaignsGrid.appendChild(campaignCard);
        });
    }

    // Gerenciar navegação das abas internas (Datas e Campanhas)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Gerenciar navegação principal (Calendário e Sobre Nós)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Se for um link externo (como Contato), não faz o toggle
            if (this.getAttribute('href') !== '#') return;
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            // Esconde todas as seções de main
            document.querySelectorAll('main > section').forEach(section => section.style.display = 'none');
            // Exibe a seção alvo
            const target = this.getAttribute('data-target');
            document.getElementById(target).style.display = 'block';
        });
    });
});
