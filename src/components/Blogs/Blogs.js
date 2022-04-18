import React from "react";

const Blogs = () => {
  return (
    <section className="text-sky-900 mt-8 mx-8 mb-40">
      <h1 className="md:text-4xl font-semibold my-4">
        {" "}
        What is the difference between authorization and authentication?
      </h1>
      <p className="md:font-semibold">
        Authentication : Is the process of identifying a user whom they are
        claiming to be. Authentication can be done through passwords,
        biometrics, one time pins, authentication apps etc. <br /> Authorization
        : Grants the user permission to access specific data(e.g. confidential
        files) and gives the user authority. The higher level of authority the
        user has, the higher his authorization is.
      </p>
      <h1 className="md:text-4xl font-semibold my-4">
        {" "}
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <p className="md:font-semibold">
        Firebase is a platform of google that helps developers to develop and
        grow applications more efficiently. We are using firebase for
        authentication cause it is easy to implement. And firebase obviously has
        better security and protection system. If we use firebase we have less
        to worry about data breach and the privacy of the user. <br /> Other
        options to implement authentication :
        
          <li>OneLogin.</li>
          <li>JumpCloud.</li>
          <li>Microsoft Azure Active Directory.</li>
          <li>CyberArk Identity (formerly Idaptive)</li>
          <li>Auth0.</li>
          <li>Rippling.</li>
          <li>SecureAuth Identity Platform.</li>
          <li>ForgeRock etc.</li>
        
      </p>
      <h1 className="md:text-4xl font-semibold my-4">
        {" "}
        What other services does firebase provide other than authentication?
      </h1>
      <p className="md:font-semibold">
        List of services provided by firebase :<li>Cloud Messaging.</li>
        <li>Predictions.</li>
        <li>Google Analytics.</li>
        <li>Cloud Storage.</li>
        <li>Hosting.</li>
        <li>Cloud Functions.</li>
        <li>Cloud Firestore.</li>
        <li>Realtime Database</li>
      </p>
    </section>
  );
};

export default Blogs;
