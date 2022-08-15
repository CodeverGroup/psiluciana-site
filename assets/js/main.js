
(function () {
    'use strict'
    const forms = document.getElementById('formContact')
    const errorField = document.getElementById('message-alert')
    
    window.addEventListener('load', () => {
        var validation = Array.prototype.filter.call(forms, (item) => {
            if (item.type == 'submit') {
                item.addEventListener('click', (e) => {
                    if(checkValidation()) {
                        errorField.children[0].innerHTML = 'Formulário Enviado!'
                        errorField.hidden = false
                    } else {
                        e.preventDefault()
                    }
                })
            }
        })

        function checkValidation() {
            var hasValid = true
            var emptyFields = false
            var validation = Array.prototype.filter.call(forms, (item) => {
                if (item.type != 'submit' && item.value == '' ) {
                    item.classList.add('alert')
                    item.classList.remove('was-validated')
                    hasValid = false
                    emptyFields = true
                } 
                else {

                    if (item.type == 'tel' && isNaN(item.value)) {
                        item.classList.add('alert')
                        item.classList.remove('was-validated')
                        hasValid = false
                        item.placeholder = 'Digite apenas números'
                        item.value = ''
                        return
                    }
                    
                    if (item.name == 'mensagem' && item.value.length <= 5) {
                        item.classList.add('alert')
                        item.classList.remove('was-validated')
                        hasValid = false
                        item.placeholder = 'Mensagem muito curta.'
                        item.value = ''
                        return
                    }

                    item.classList.remove('alert')
                    item.classList.add('was-validated')
                }
            })  

            if (emptyFields) {
                errorField.hidden = false
            } else {
                errorField.hidden = true
            }
            
            return hasValid
        }
    })
})()