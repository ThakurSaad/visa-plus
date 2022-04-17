import React from "react";

const Checkout = () => {
  return (
    <section className="mt-20 mb-52">
      <h4 className="text-center text-2xl mb-4">Thank You For Selecting</h4>
      <form>
        <input
          //   ref={passwordRef}
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Your Username"
          type="text"
          name="address"
          required
        />
        <input
          //   ref={emailRef}
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Your Email"
          type="email"
          name="email"
          required
        />
        <input
          //   ref={passwordRef}
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Your Contact Number"
          type="number"
          name="phone"
          required
        />
        <input
          //   ref={passwordRef}
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Your Address"
          type="text"
          name="address"
          required
        />
        <input
          className="text-sm rounded-md block text-white bg-sky-900 my-1 mx-auto w-72 py-4"
          type="submit"
          value="Book Now"
        />
      </form>
    </section>
  );
};

export default Checkout;
