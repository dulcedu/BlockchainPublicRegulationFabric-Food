/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const supplierJSON = {
    'supplierB': {
        'countryId': 'NL',
        'orgId': 'ABC'
    },
    'supplierC': {
        'countryId': 'NL',
        'orgId': 'XYZ'
    }
};

const importerJSON = {
    'importerB': {}
};

const retailerJSON = {
    'retailerB': { 'products': [] }
};

// DEMO SETUP FUNCTIONS
/**
 * Create the participants & assets to use in the demo
 * @param {composer.demosetup.food.supply.SetupDemo} setupDemo - the SetupDemo transaction
 * @transaction
 */
async function setupDemo() {
    console.log('running setupDemo()...');

    const factory = getFactory();
    const namespace = 'composer.food.supply';

    let suppliers;
    let importers;
    let retailers;

    /*
    // Sample code from other demo that illustrates how variables below could be set.
      
    customers = Object.keys(customerData).map(function (customerID) {
       const customer = customerData[customerID]; // customer i from test data

       //populate customer particpant resource with JSON from customer i
       const customerResource = factory.newResource(namespace, 'Customer', customerID);
       customerResource.name = customer.name;
       customerResource.kvkNumber = customer.kvkNumber;
       customerResource.address = factory.newConcept('composer.base', 'Address');
       customerResource.address.street = customer.address.street;
       customerResource.address.postalCode = customer.address.postalCode;
       customerResource.address.city = customer.address.city;
       customerResource.address.country = customer.address.country;
       return customerResource;
    });
    */

    // create array of Supplier particpant resources identified by the top level keys in supplierJSON const
    suppliers = Object.keys(supplierJSON).map(function (supplierID) {
        const supplier = supplierJSON[supplierID]; // supplier i from test data

        //populate customer particpant resource with JSON from customer i

    });

    // create array of Importer participant resources indentified by the top level keys in importerJSON const
    importers = Object.keys(importerJSON).map(function(importerID) {
        // implement very simple body here :-)
    });

    // create array of Retailer participant resources indentified by the top level keys in retailerJSON const
    retailers = Object.keys(retailerJSON).map(function(retailerID) {
        const retailer = retailerJSON[retailerID]; // retailer i from test data

        //populate retailer particpant resource with JSON from retailer i

    });

    // add all suppliers to participant registry

    // add all importers

    // add all retailers

}
