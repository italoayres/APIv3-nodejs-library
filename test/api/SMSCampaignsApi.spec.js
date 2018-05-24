/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SibApiV3Sdk.SMSCampaignsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SMSCampaignsApi', function() {
    describe('createSmsCampaign', function() {
      it('should call createSmsCampaign successfully', function(done) {
        //uncomment below and update the code to test createSmsCampaign
        //instance.createSmsCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSmsCampaign', function() {
      it('should call deleteSmsCampaign successfully', function(done) {
        //uncomment below and update the code to test deleteSmsCampaign
        //instance.deleteSmsCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmsCampaign', function() {
      it('should call getSmsCampaign successfully', function(done) {
        //uncomment below and update the code to test getSmsCampaign
        //instance.getSmsCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmsCampaigns', function() {
      it('should call getSmsCampaigns successfully', function(done) {
        //uncomment below and update the code to test getSmsCampaigns
        //instance.getSmsCampaigns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('requestSmsRecipientExport', function() {
      it('should call requestSmsRecipientExport successfully', function(done) {
        //uncomment below and update the code to test requestSmsRecipientExport
        //instance.requestSmsRecipientExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendSmsCampaignNow', function() {
      it('should call sendSmsCampaignNow successfully', function(done) {
        //uncomment below and update the code to test sendSmsCampaignNow
        //instance.sendSmsCampaignNow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendSmsReport', function() {
      it('should call sendSmsReport successfully', function(done) {
        //uncomment below and update the code to test sendSmsReport
        //instance.sendSmsReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendTestSms', function() {
      it('should call sendTestSms successfully', function(done) {
        //uncomment below and update the code to test sendTestSms
        //instance.sendTestSms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSmsCampaign', function() {
      it('should call updateSmsCampaign successfully', function(done) {
        //uncomment below and update the code to test updateSmsCampaign
        //instance.updateSmsCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSmsCampaignStatus', function() {
      it('should call updateSmsCampaignStatus successfully', function(done) {
        //uncomment below and update the code to test updateSmsCampaignStatus
        //instance.updateSmsCampaignStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
