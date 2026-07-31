const inputElement = document.getElementById('doc-code');

inputElement.addEventListener('input', (e) => {
    // 1. Remove tudo que não for letra ou número e transforma em Maiúsculas
    let value = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    
    // 2. Limita o máximo a 32 caracteres puros (sem contar os traços)
    if (value.length > 32) {
        value = value.slice(0, 32);
    }
    
    // 3. Aplica a quebra com traços a cada 8 caracteres
    let formatted = [];
    for (let i = 0; i < value.length; i += 8) {
        formatted.push(value.slice(i, i + 8));
    }
    
    // 4. Devolve o texto formatado para o input (ex: XXXXXXXX-XXXXXXXX...)
    e.target.value = formatted.join('-');
});