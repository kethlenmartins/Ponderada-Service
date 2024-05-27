module.exports = {

  friendlyName: 'Format email',
  description: 'Format email to lower case and remove spaces.',

  inputs: {
    email: {
      type: 'string',
      example: 'myemail@site.com',
      description: 'The email of the user.',
      required: true
    },
  },

  fn: async function (inputs) {
    if (typeof inputs.email !== 'string') {
      throw new Error('Invalid input: email must be a string');
    }
    if (!inputs.email.includes('@')) {
      throw new Error('Invalid input: email must contain an "@" symbol');
    }
    return inputs.email.toLowerCase().trim();
  },

  exits: {
    success: {
      description: 'Email formatted successfully.',
    },
    invalidInput: {
      description: 'Invalid input provided.',
    },
  }

};
