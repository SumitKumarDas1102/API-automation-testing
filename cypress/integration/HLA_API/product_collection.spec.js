/// <reference types="cypress" />

describe('Product Module API automation', function(){
    beforeEach('Call the API with details', function() {
        cy.request({
          method: 'POST',
          url: 'http://hla-keyclock-service-service-hla-qa.apps.projects.agentmicroservices.com/auth/realms/hlaqa/protocol/openid-connect/token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: {
            'client_id': 'hlaqa',
            'username': 'a0005277',
            'password': 'welcome@123',
            'grant_type': 'password',
            'client_secret': '92d79ea8-fad3-4ed7-87d6-aea5c574aa6f'
          }
        }).then(function(response) {
          
          this.response = response
          this.responseBody = response.body
          this.accessToken = this.responseBody.access_token
        })
      })
    
      describe('Product Module - login for access token', function() {
        it('TC-POD01  Get 200 success status', function() {
          expect(this.response.status).to.equal(200)
        })
        it('TC-POD02 Verify that the Access token is appaering with response body', function() {
          expect(this.responseBody).to.have.property('access_token')
        })
        it('TC-POD03 Verify that the Refresh token is appaering with response body', function() {
          expect(this.responseBody).to.have.property('refresh_token')
        })
        it('TC-POD04 Verify that the Access tokens expires time will visible with response body', function() {
          expect(this.responseBody).to.have.property('expires_in')
        })
        it('TC-POD05 Verify that the Refresh tokens expires time will visible with response body', function() {
          expect(this.responseBody).to.have.property('refresh_expires_in')
        })
      })

      describe('Basic Plans - All Product lists', function(){
          describe('All_Products_List', function(){
            Cypress.config('baseUrl', 'http://hla-product-service-service-hla-qa.apps.projects.agentmicroservices.com/hla-product-service/v1')
            beforeEach('Before execute below test cases hit the URL', function() {
            cy.request({
                method: 'GET',
                url: '/products',
                headers: {
                  'wsrt': '1613623480',
                  'agentcode': 'A0006711',
                  'appversion': '3.22.1',
                  'deviceid': '0F3CE4F9-CE5E-40B4-8FA9-EA35F316474E',
                  'appcode': 'IMS',
                  'appchannel': 'agency',
                  'Content-Type': 'application/json',
                  'authorization': 'Bearer ' + this.accessToken,
                }
        
              }).then(function(response) {
                this.response = response
                this.responseBody = response.body
              })
          })
          it('TC-POD06 - Verify 200 success status', function() {
            expect(this.response.status).to.equal(200)
            //console.log(this.responseBody.result)
          })
          it('TC-POD07 - Verify the response message body', function() {
            expect(this.responseBody.message).to.include('List of products found successfully')
          })
      })
      describe('All_Products_List_With_ChannelID', function(){

      })
    })
      

})