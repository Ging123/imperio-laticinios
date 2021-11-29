const sanitizeInput = require('../../utils/sanitize').sanitizeInput;
exports.createUserRequestDto = (body) => {
    const resultBinding = {
        validatedData: {},
        errors: {},
    };

    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!body.first_name || body.first_name.trim() === '')
        resultBinding.errors.firstName = 'Campo de primeiro nome não foi preenchido';
    else
        resultBinding.validatedData.firstName = sanitizeInput(body.first_name);

    if (!body.last_name || body.last_name.trim() === '')
        resultBinding.errors.lastName = 'Campo de sobrenome não foi preenchido';
    else
        resultBinding.validatedData.lastName = sanitizeInput(body.last_name);

    if (!body.username || body.username.trim() === '')
        resultBinding.errors.username = 'Campo de username não foi preenchido';
    else
        resultBinding.validatedData.username = sanitizeInput(body.username);

    if (body.email && body.email.trim() !== '' && emailRegex.test(String(body.email).toLowerCase()))
        resultBinding.validatedData.email = sanitizeInput(body.email.toLowerCase());
    else
        resultBinding.errors.email = 'Campo de email não foi preenchido';
    
    if (body.password && body.password.trim() !== '')
        resultBinding.validatedData.password = body.password;
    else
        resultBinding.errors.password = 'Campo de senha não foi preenchido';

    return resultBinding;
};
