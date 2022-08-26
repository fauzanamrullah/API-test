describe('Update new user', () =>{
    it('Succesfully update new user', () => {
        var user = {
            "name": "Udin",
            "Job": "Satpam"
        }
        
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((Response) => {
            expect(Response.status).equal(200)
            expect(Response.body.name).to.eq(user.name)
            expect(Response.body.Job).to.eq(user.Job)
        })
    });
})