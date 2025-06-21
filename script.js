
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;

            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            if (name.value.trim() === '') {
                document.getElementById('nameError').textContent = 'Por favor, digite seu nome.';
                isValid = false;
            }

            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                document.getElementById('emailError').textContent = 'Por favor, digite seu e-mail.';
                isValid = false;
            } else if (!emailPattern.test(email.value.trim())) {
                document.getElementById('emailError').textContent = 'Por favor, digite um e-mail válido.';
                isValid = false;
            }

            
            if (subject.value === '') {
                document.getElementById('subjectError').textContent = 'Por favor, selecione um motivo.';
                isValid = false;
            }

            
            if (message.value.trim() === '') {
                document.getElementById('messageError').textContent = 'Por favor, digite sua mensagem.';
                isValid = false;
            }

            if (isValid) {
                
                alert('Sua solicitação foi registrada com sucesso! Entraremos em contato em breve.');
                contactForm.reset(); 
                
            } else {
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    }

    //ESSA É A PARTE DOS LIVROS 
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const bookListContainer = document.getElementById('bookListContainer');
    const searchMessage = document.getElementById('searchMessage');

    if (searchInput && searchButton && bookListContainer) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const bookCards = bookListContainer.querySelectorAll('.book-card');
            let foundBooks = 0;

            bookCards.forEach(card => {
                const title = card.dataset.title.toLowerCase(); 
                if (title.includes(searchTerm)) {
                    card.style.display = 'block'; 
                    foundBooks++;
                } else {
                    card.style.display = 'none'; 
                }
            });

            if (searchTerm === '') {
                searchMessage.textContent = ''; 
            } else if (foundBooks === 0) {
                searchMessage.textContent = 'Nenhum livro encontrado com o termo "' + searchTerm + '".';
            } else {
                searchMessage.textContent = '';
            }
        }
    }
});