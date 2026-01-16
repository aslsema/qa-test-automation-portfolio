describe('API testing', () => {

//listing all resources (GET)    
it('tc01_GET istegi', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
        assert.equal(response.status, 200); 
        console.log("response ::::::::", response) 
        cy.log("response ::::::::",JSON.stringify(response)); 
     })
 });

//creating a resource(POST)
it('tc02_POST istegi', () => {
    const rq = {  
     method: 'POST',  
     url:'https://jsonplaceholder.typicode.com/posts',  
    }                 
    cy.request(rq).then((response) => {   
        assert.equal(response.status, 201); 
        cy.log("response ::::::::", JSON.stringify(response));
    });    
  });

//Asserting response body
it('tc03_POST istegi_body asserting', () => {
    const rq = {  
     method: 'POST',  
     url:'https://jsonplaceholder.typicode.com/posts', 
     body: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
    }                 
    cy.request(rq).then((response) => {   
     assert.equal(response.status, 201); 
     cy.log("response ::::::::", JSON.stringify(response));
     expect(response.body.title).to.eq("foo")
     expect(response.body.body).to.eq("bar")
     expect(response.body.userId).to.eq(1)
 });    
});

//Response Body full asserting
it('tc04_POST istegi_response body full asserting', () => {
    const rq = {
    method: 'POST',  
     url:'https://jsonplaceholder.typicode.com/posts', 
     body: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
    }                 
    cy.request(rq).then((response) => {   
     assert.equal(response.status, 201); 
     cy.log("response ::::::::", JSON.stringify(response));
     expect(response.body).to.include({
      title: 'foo',
      body: 'bar',
      userId: 1
    }); 
 });    
});

//Header eklenmesi ve asserting
it('tc05_POST istegi_header ekleme ve asserting', () => {
    const rq = {  
     method: 'POST',  
     url:'https://jsonplaceholder.typicode.com/posts', 
     body: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
     headers: {
      'Content-Type': 'application/json; charset=UTF-8',
     },
    }                 
    cy.request(rq).then((response) => {   
     assert.equal(response.status, 201); 
     cy.log("response ::::::::", JSON.stringify(response));
     expect(response.headers['content-type']).to.include('application/json')
 });    
});

//Query parameters eklenmesi ve asserting
it('tc06_GET istegi_query_params ekleme ve asserting', () => {
  cy.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    qs: {
      userId: 1,
    },
   }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.be.an('array')
    expect(response.body[0].userId).to.eq(1)
  })
})

//Response time testing
it('tc07_GET istegi_response time testing', () => {
    const rq = {  
     method: 'POST',  
     url:'https://jsonplaceholder.typicode.com/posts', 
    }                 
    cy.request(rq).then((response) => {   
     assert.equal(response.status, 201); 
     console.log("response ::::::::", response)
     expect(response.duration).to.be.lessThan(1000);
 })
})

//Updating a resource(PUT)
it('tc08_PUT istegi', () => {
    const rq = {  
     method: 'PUT',  
     url:'https://jsonplaceholder.typicode.com/posts/1'  
    }                 
    cy.request(rq).then((response) => {   
        assert.equal(response.status, 200); 
        console.log("response ::::::::", response)
        cy.log("response ::::::::", JSON.stringify(response));
    });    
  });

//Patching a resources(PATCH)
it('tc09_PATCH istegi', () => {
    const rq = {  
     method: 'PATCH',  
     url:'https://jsonplaceholder.typicode.com/posts/1'  
    }                 
    cy.request(rq).then((response) => {   
        assert.equal(response.status, 200); 
        console.log("response ::::::::", response)
        cy.log("response ::::::::", JSON.stringify(response));
    });    
  });


//Deleting a resource(DELETE)
it('tc10_DELETE istegi', () => {
    const rq = {  
     method: 'DELETE',  
     url:'https://jsonplaceholder.typicode.com/posts/1'  
    }                 
    cy.request(rq).then((response) => {   
        assert.equal(response.status, 200); 
        console.log("response ::::::::", response)
        cy.log("response ::::::::", JSON.stringify(response));
    });
    });
});