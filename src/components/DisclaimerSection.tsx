import React from "react";

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mx-auto">
            Zyon Grand
          </h1>

          <h2 className="text-xl font-bold text-gray-900 mb-6 mx-auto">
            Disclaimer
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              This website is independently managed by marketing agents and is not the official website of the developer.
              Our role is to provide general information about the property and assist with arranging showflat visits.
              While every effort has been made to ensure accuracy, neither the developer nor its marketing agents shall be held responsible for any inaccuracies, omissions, or changes.
            </p>
            
            <p>
              All information provided may contain forward-looking statements that involve assumptions, risks, and uncertainties.
              To the extent permitted by law, the statements, depictions, and information on this website should not be relied upon as statements of fact and do not form any part of a contractual agreement for the sale of housing units.
            </p>
            
            <p>
              Visual representations, including renderings, illustrations, and images, are artistic impressions for reference only.
              Photographs are for decor suggestion purposes and should not be regarded as factual representations.
            </p>
            
            <p>
              We strive to provide the latest updates on this development and will work with the developer and/or partners to provide accurate information.
            </p>
            
            <p>
              For inquiries or appointments, please contact us via phone.
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">PropNex Realty Pte Ltd</p>
                <p>License Number: L3008022J</p>
                <p>Address: 480 Lor 6 Toa Payoh #18-01 East Wing, HDB Hub, Singapore 310480</p>
              </div>
              
              <div className="mt-4 space-y-1">
                <p className="font-semibold text-gray-900">Alvin Kwan J.X</p>
                <p>92262233</p>
                <p>License Number: R031981G</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
