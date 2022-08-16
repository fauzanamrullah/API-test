describe('Create new user', () => {
    it('succesfully create new user', () => {
        var user = {
            "name": "ojan",
            "job" : "leader"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.name).to.eq(user.name)
            expect(Response.body.job).to.eq(user.job)
        })
    })
})