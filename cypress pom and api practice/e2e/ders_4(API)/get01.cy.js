//çeşitli API testlerinin hepsi burda

describe('API testing', () => {
 //en basic request test yazımı
it('tc01_GET istegi', () => {
    cy.request('https://httpbin.org/get').then((response) => {
        assert.equal(response.status, 200); 
        expect(response.status).to.eq(200); 
     })
});

//object ile test yazımı ve loglamalar
it('tc02_GET istegi', () => {
    const rq = {  
     method: 'GET',  
     url:'https://httpbin.org/get'   
         }     
                  
    cy.request(rq).then((response) => {   
 
      assert.equal(response.status, 200); 
      expect(response.status).to.eq(200); 

    console.log("response ::::::::", response) 
    cy.log("response ::::::::",JSON.stringify(response)) 

    cy.log("response headers ::::::::",JSON.stringify(response.headers))
    cy.log("response status ::::::::",JSON.stringify(response.status))
    cy.log("response statusText ::::::::",JSON.stringify(response.statusText))
    cy.log("response duration ::::::::",JSON.stringify(response.duration))

      })
 });

//query params verileri ekleme (qs)
it('tc03_GET istegi QS', () => {
   const rq = {      
     method: 'GET',  
     url:'https://httpbin.org/get',
     qs:{
        id:"1"
     }, 
    
    failOnStatusCode: false
    }        
 
    cy.request(rq).then((response) => {   
      assert.equal(response.status, 200); 
      expect(response.status).to.eq(200); 
      cy.log("response body ::::::::",JSON.stringify(response.body))
    }) 
  }); 

//POST isteklerinde body verileri ekleme
it('tc04_POST istegi body', () => {
   const rq ={      
     method: 'POST',  
     url:'https://httpbin.org/post',
     body:{
       name:"Mr.",
       role:"QA",
       age:30
        },
    
    failOnStatusCode: false 
    }        
 
    cy.request(rq).then((response) => {   
      assert.equal(response.status, 200); 
      expect(response.status).to.eq(200); 
      cy.log("response body ::::::::",JSON.stringify(response.body))
    }) 
  }); 

//body'i daha derli toplu yazma(ayrı bir variableda tutma)
it('tc05_POST istegi body_2', () => {
   const body={       	
    name:"Mr.",
    role:"QA",
    age:30
    }        

   const rq ={      
     method: 'POST',  
     url:'https://httpbin.org/post',
     body:body,
     failOnStatusCode: false 
    }        
 
    cy.request(rq).then((response) => {   
      assert.equal(response.status, 200); 
      expect(response.status).to.eq(200); 
      cy.log("response body ::::::::",JSON.stringify(response.body))
    }) 
  }); 
//POST isteğinde header ekleme
it('tc06_POST istegi body_2 with headers', () => {
  const body={       	
    name:"Mr.",
    role:"QA",
    age:30
    } 

   const rq ={      
     method: 'POST',  
     url:'https://httpbin.org/post',
     body:body,
     header:{
       'Content-Type':"application/json",
       'Connection':'keep-alive'
     },            
    failOnStatusCode: false 
    }        
 
    cy.request(rq).then((response) => {   
      assert.equal(response.status, 200); 
      expect(response.status).to.eq(200); 
      cy.log("response body ::::::::",JSON.stringify(response.body))
    }) 
    });
//User-agent ekleme
it('tc07_POST istegi body_2 with headers and user-agent', () => {
  const body={       	
    name:"Mr.",
    role:"QA",
    age:30
    } 

   const rq ={      
     method: 'POST',  
     url:'https://httpbin.org/post',
     body:body,
     header:{
       'Content-Type':"application/json",
       'Connection':'keep-alive', 
       'user-agent':' Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
    },   
         
     failOnStatusCode: false 
    }        
 
    cy.request(rq).then((response) => {   
      assert.equal(response.status, 200); 
      expect(response.status).to.eq(200); 
      cy.log("response body ::::::::",JSON.stringify(response.body))
      cy.log("response body ::::::::",JSON.stringify(response.headers))
    }) 
  }); 


})

