/// <reference types="cypress" />

import "cypress-localstorage-commands";

describe('Master Data automation', function() {
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

  describe('Master data login for access token', function() {
    it('TC-key01  Get 200 success status', function() {
      expect(this.response.status).to.equal(200)
    })
    it('TC-key02 Verify that the Access token is appaering with response body', function() {
      expect(this.responseBody).to.have.property('access_token')
    })
    it('TC-key03 Verify that the Refresh token is appaering with response body', function() {
      expect(this.responseBody).to.have.property('refresh_token')
    })
    it('TC-key04 Verify that the Access tokens expires time will visible with response body', function() {
      expect(this.responseBody).to.have.property('expires_in')
    })
    it('TC-key05 Verify that the Refresh tokens expires time will visible with response body', function() {
      expect(this.responseBody).to.have.property('refresh_expires_in')
    })
  })

  describe('MasterData_FetchAll API automation', function() {
    Cypress.config('baseUrl', 'http://hla-gateway-service-app-hla-qa.apps.projects.agentmicroservices.com/hla-general-service/v1/masterdata')
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/ALL',
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

    it('TC-Master01 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
    })
    it('TC-Master02 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types')
    })
    it('TC-Master03 - Verify that the DIRECT_CREDIT_BANK will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('DIRECT_CREDIT_BANK')
    })
    it('TC-Master04 - Verify that the ADDRESS_TYPE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('ADDRESS_TYPE')
    })
    it('TC-Master05 - Verify that the COUNTRY will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('COUNTRY')
    })
    it('TC-Master06 - Verify that the INSURANCE_COMPANY will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('INSURANCE_COMPANY')
    })
    it('TC-Master07 - Verify that the MARITAL_STATUS will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('MARITAL_STATUS')
    })
    it('TC-Master08 - Verify that the NATIONALITY will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('NATIONALITY')
    })
    it('TC-Master09 - Verify that the OCCUPATION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('OCCUPATION')
    })
    it('TC-Master10 - Verify that the PAYMENT_FREQUENCY will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('PAYMENT_FREQUENCY')
    })
    it('TC-Master11 - Verify that the POST_CODE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('POST_CODE')
    })
    it('TC-Master12 - Verify that the RACE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('RACE')
    })
    it('TC-Master13 - Verify that the RELATION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('RELATION')
    })
    it('TC-Master14 - Verify that the RELIGION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('RELIGION')
    })
    it('TC-Master15 - Verify that the SALUTATION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('SALUTATION')
    })
    it('TC-Master16 - Verify that the STATE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('STATE')
    })

  })

  describe('MasterData_ADDRESS_TYPE API automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/ADDRESS_TYPE',
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
    it('TC-Master17 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master18 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [ADDRESS_TYPE]')
    })
    it('TC-Master19 - Verify that the ADDRESS_TYPE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('ADDRESS_TYPE')
    })
  })

  describe('MasterData_COUNTRY automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/COUNTRY',
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
    it('TC-Master20 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master21 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [COUNTRY]')
    })
    it('TC-Master22 - Verify that the COUNTRY will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('COUNTRY')
    })
  })

  describe('MasterData_DIRECT_CREDIT_BANK automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/DIRECT_CREDIT_BANK',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [DIRECT_CREDIT_BANK]')
    })
    it('TC-Master25 - Verify that the DIRECT_CREDIT_BANK will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('DIRECT_CREDIT_BANK')
    })
  })

  describe('MasterData_INSURANCE_COMPANY automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/INSURANCE_COMPANY',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [INSURANCE_COMPANY]')
    })
    it('TC-Master25 - Verify that the INSURANCE_COMPANY will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('INSURANCE_COMPANY')
    })
  })

  describe('MasterData_MARITAL_STATUS automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/MARITAL_STATUS',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [MARITAL_STATUS]')
    })
    it('TC-Master25 - Verify that the MARITAL_STATUS will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('MARITAL_STATUS')
    })
  })

  describe('MasterData_OCCUPATION automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/OCCUPATION',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [OCCUPATION]')
    })
    it('TC-Master25 - Verify that the OCCUPATION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('OCCUPATION')
    })
  })

  describe('MasterData_PAYMENT_FREQUENCY automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/PAYMENT_FREQUENCY',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [PAYMENT_FREQUENCY]')
    })
    it('TC-Master25 - Verify that the PAYMENT_FREQUENCY will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('PAYMENT_FREQUENCY')
    })
  })

  describe('MasterData_POST_CODE automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/POST_CODE',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [POST_CODE]')
    })
    it('TC-Master25 - Verify that the POST_CODE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('POST_CODE')
    })
  })

  describe('MasterData_RACE automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/RACE',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [RACE]')
    })
    it('TC-Master25 - Verify that the RACE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('RACE')
    })
  })

  describe('MasterData_RELIGION automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/RELIGION',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [RELIGION]')
    })
    it('TC-Master25 - Verify that the RELIGION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('RELIGION')
    })
  })

  describe('MasterData_RELATION automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/RELATION',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [RELATION]')
    })
    it('TC-Master25 - Verify that the RELATION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('RELATION')
    })
  })

  describe('MasterData_SALUTATION automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/SALUTATION',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [SALUTATION]')
    })
    it('TC-Master25 - Verify that the SALUTATION will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('SALUTATION')
    })
  })

  describe('MasterData_STATE automation', function() {
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/STATE',
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
    it('TC-Master23 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      //console.log(this.response)
    })
    it('TC-Master24 - Verify the response message body', function() {
      expect(this.responseBody.message).to.include('Master data found successfully for the given types : [STATE]')
    })
    it('TC-Master25 - Verify that the STATE will be visible with response body', function() {
      expect(this.responseBody.result).to.have.property('STATE')
    })
  })



})