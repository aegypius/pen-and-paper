export default (context, payload, done) => {
    context.dispatch('RECEIVE_CHARACTERS_START', payload);
    context.service.read('character', {}, {}, (err, characters) => {
        if (err) {
            context.dispatch('RECEIVE_CHARACTERS_FAILURE', payload);
            done();
            return;
        }
        context.dispatch('RECEIVE_CHARACTERS_SUCCESS', characters);
        done();
    });
};
