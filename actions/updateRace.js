export default (context, payload, done) => {
    context.dispatch('UPDATE_RACE', payload);
    done();
};
