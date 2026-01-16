//debugger modunu pratik etme
describe('API testing', () => {
    it('tc01_GET 03 istegi', () => {
    
    const rq ={      
     method: 'GET',  
     url:'https://httpbin.org/get',
     failOnStatusCode: false
    }        
 
     cy.request(rq).then((response) => {  
     debugger;

     assert.equal(response.status, 200);  
     debugger; 
     expect(response.status).to.eq(200);
     debugger;
     });
    });
})
