/// <reference types="cypress" />

import "cypress-localstorage-commands";

describe('Agent module API automation', function() {
  beforeEach('Call the API with details', function() {
    cy.request({
      method: 'POST',
      url: 'http://hla-keyclock-service-service-hla-qa.apps.projects.agentmicroservices.com/auth/realms/hlaqa/protocol/openid-connect/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        'client_id': 'hlaqa',
        'username': 'a0006711',
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

  describe('Agent module login - access token', function(){
    it('TC-Agent01 - Verify 200 success status', function() {
        expect(this.response.status).to.equal(200)
      })
      it('TC-Agent02 Verify that the Access token is appaering with response body', function() {
        expect(this.responseBody).to.have.property('access_token')
      })
      it('TC-Agent03 Verify that the Refresh token is appaering with response body', function() {
        expect(this.responseBody).to.have.property('refresh_token')
      })
      it('TC-Agent04 Verify that the Access tokens expires time will visible with response body', function() {
        expect(this.responseBody).to.have.property('expires_in')
      })
      it('TC-Agent05 Verify that the Refresh tokens expires time will visible with response body', function() {
        expect(this.responseBody).to.have.property('refresh_expires_in')
      })
})

  describe('Agent Qualification API automation', function() {
    Cypress.config('baseUrl', 'http://hla-gateway-service-app-hla-qa.apps.projects.agentmicroservices.com/hla-agent-service/v1/agents')
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/qualification',
        headers: {
          'wsrt': '2021-03-03T07:34:14.146Z',
          'agentcode': 'A0006711',
          'appversion': '3.22.1',
          'deviceid': '6BBB12AA-8746-467B-B6CF-ECEF273BE449',
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
    it('TC-Agent02 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
    })
  })

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
      this.response_Body = response.body
      this.access_Token = this.response_Body.access_token
    })

  })


  describe('Agent agent-profile API automation', function() {
    Cypress.config('baseUrl', 'http://hla-gateway-service-app-hla-qa.apps.projects.agentmicroservices.com/hla-agent-service/v1/agents')
    beforeEach('Before execute below test cases hit the URL', function() {
      cy.request({
        method: 'GET',
        url: '/profile',
        headers: {
          'wsrt': '2021-03-03T07:34:14.146Z',
          'agentcode': 'a0005277',
          'appversion': '3.22.1',
          'deviceid': '6BBB12AA-8746-467B-B6CF-ECEF273BE449',
          'appcode': 'IMS',
          'appchannel': 'agency',
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + this.access_Token,
        }

      }).then(function(response) {
        this.response = response
        this.responseBody = response.body
      })
    })
    it('TC-Agent06 - Verify 200 success status', function() {
      expect(this.response.status).to.equal(200)
      console.log(this.response)
    })
    it('TC-Agent07 - Verify the response message body', function() {
        expect(this.responseBody.message).to.include('Agent Profile found for Agent Code: a0005277')
      })
      it('TC-Agent08 - Verify that the LoginInfo will be visible with response body', function() {
        expect(this.responseBody.result).to.have.property('LoginInfo')
      })
      it('TC-Agent09 - Verify that the ClosedBranchCode will be visible with response body', function() {
        expect(this.responseBody.result).to.have.property('ClosedBranchCode')
      })
  })



})