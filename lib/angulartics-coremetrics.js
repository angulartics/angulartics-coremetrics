/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
(function(window, angular, undefined) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.coremetrics.analytics
   * Enables analytics support for IBM Coremetrics
   */
  angular.module('angulartics.coremetrics.analytics', ['angulartics'])
    .config(['$analyticsProvider', function($analyticsProvider) {

      // GA already supports buffered invocations so we don't need
      // to wrap these inside angulartics.waitForVendorApi

      $analyticsProvider.settings.trackRelativePath = true;

      // Set the default settings for this module
      $analyticsProvider.settings.coremetrics = {
        additionalAccountIDs: undefined,
        userId: null
      };

      $analyticsProvider.registerPageTrack(function(path) {
        if (window.cmCreatePageviewTag) {
          window.cmCreatePageviewTag(path, null, null, null)
        }
      });

      /**
       * Track Event in Coremetrics
       * @name eventTrack
       *
       * @param {string} action Required 'action' (string) associated with the event
       * @param {object} properties Comprised of the mandatory field 'category' (string)
       *
       * @link http://www-01.ibm.com/support/knowledgecenter/SSZLC2_7.0.0/com.ibm.commerce.Coremetrics.doc/refs/rmtuseelemcore.htm
       */
      $analyticsProvider.registerEventTrack(function(action, properties) {

        if (!properties || !properties.category) {
          properties = properties || {};
          properties.category = 'Event';
        }

        if (window.cmCreateElementTag) {
          window.cmCreateElementTag(action, properties.category);
        }
      });

      $analyticsProvider.registerSetUsername(function(userId) {
        $analyticsProvider.settings.coremetrics.userId = userId;
      });

    }]);
})(window, window.angular);
