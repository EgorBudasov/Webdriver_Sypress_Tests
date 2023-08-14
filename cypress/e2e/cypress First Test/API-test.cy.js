    const baseUrl = 'https://automationintesting.online/'
    const userAdmin = {
        name:'admin',
        password:'password'
    }

let token;
let regec = /token=([^;]+)/;

describe('APi', () => {
    it('check data from api', () => {
       
        cy.request('POST',`${baseUrl}auth/login`,{username:userAdmin.name,password: userAdmin.password}).then((response)=>{
            expect(response.status).to.equal(200);
            token = response.headers['set-cookie']//[0].split(';')[0]
            const tokenValue = units.

        })
    });
});