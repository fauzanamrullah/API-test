describe('Delete user', () => {
    it('succesfully delete user', () => {
        cy.get('DELETE', 'https://reqres.in/api/users/2').then((Response) => {
            expect(Response.status).equal(204)
        })
    });
})