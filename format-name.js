module.exports = {

  friendlyName: 'Format name',
  description: 'Format name to lower case and remove spaces.',

  inputs: {
    name: {
      type: 'string',
      example: 'name',
      description: 'The name of the user.',
      required: true
    },
  },

  fn: async function (inputs, exits) {
    if (typeof inputs.name !== 'string') {
      return exits.invalidInput({ message: 'Invalid input: name must be a string' });
    }
    const trimmedName = inputs.name.trim();
    if (trimmedName.length < 3 || trimmedName.length > 50) {
      return exits.invalidInput({ message: 'Invalid input: name must be between 3 and 50 characters' });
    }
    return exits.success(trimmedName.toLowerCase());
  },
  exits: {
    success: {
      description: 'Name formatted successfully.',
    },
    invalidInput: {
      description: 'Invalid input provided.',
    },
  }

};
