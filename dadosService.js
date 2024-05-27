module.exports = {

    friendlyName: 'Validate data',
    description: 'Validate data of various types.',
  
    inputs: {
      data: {
        type: 'ref',
        description: 'The data to be validated.',
        required: true
      },
      type: {
        type: 'string',
        description: 'The type of data to be validated (e.g., "email", "name", "password").',
        required: true
      }
    },
  
    fn: async function (inputs, exits) {
      switch (inputs.type) {
        case 'email':
          try {
            const validatedEmail = await sails.helpers.formatEmail.with({ email: inputs.data });
            return exits.success(validatedEmail);
          } catch (error) {
            return exits.invalidInput({ message: error.message || 'An error occurred while validating email' });
          }
        case 'name':
          try {
            const validatedName = await sails.helpers.formatName.with({ name: inputs.data });
            return exits.success(validatedName);
          } catch (error) {
            return exits.invalidInput({ message: error.message || 'An error occurred while validating name' });
          }
        case 'password':
          try {
            const validatedPassword = await sails.helpers.formatPassword.with({ password: inputs.data });
            return exits.success(validatedPassword);
          } catch (error) {
            return exits.invalidInput({ message: error.message || 'An error occurred while validating password' });
          }
        case 'surname':
          try {
            const validatedSurname = await sails.helpers.formatSurname.with({ surname: inputs.data });
            return exits.success(validatedSurname);
          } catch (error) {
            return exits.invalidInput({ message: error.message || 'An error occurred while validating surname' });
          }
        // Adicione mais casos para outros tipos de validação, se necessário
        default:
          return exits.invalidInput({ message: 'Invalid input type specified' });
      }
    },
  
    exits: {
      success: {
        description: 'Data validated successfully.',
      },
      invalidInput: {
        description: 'Invalid input provided.',
      },
    }
  
  };
  