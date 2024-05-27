module.exports = {

    friendlyName: 'Format surname',
    description: 'Format surname to lower case and remove spaces.',
  
    inputs: {
      surname: {
        type: 'string',
        example: 'surname',
        description: 'The surname of the user.',
        required: true
      },
    },
  
    fn: async function (inputs, exits) {
        if (typeof inputs.surname !== 'string') {
          return exits.invalidInput({ message: 'Invalid input: surname must be a string' });
        }
        const trimmedSurname = inputs.surname.trim();
        if (trimmedSurname.length < 3 || trimmedSurname.length > 50) {
          return exits.invalidInput({ message: 'Invalid input: surname must be between 3 and 50 characters' });
        }
        return exits.success(trimmedSurname.toLowerCase());
      },
  
    exits: {
      success: {
        description: 'Surname formatted successfully.',
      },
      invalidInput: {
        description: 'Invalid input provided.',
      },
    }
  
  };