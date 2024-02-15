import React from "react";

export const OrderForm = () => {
  return (
    <form className="black space-y-4 rounded border border border-black p-4">
      <h3 className="mb-4 text-2xl font-medium">Contact Information</h3>
      <div className="flex w-full gap-4">
        <div className="w-full space-y-2">
          <label htmlFor="firstname" className="label">
            First Name *
          </label>
          <input
            name="firstname"
            type="text"
            placeholder="First Name"
            className="input"
            required
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="name" className="label">
            Name *
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="label">
          Phone Number
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="input"
        />
      </div>
      <div className="space-y-2 pb-4">
        <label htmlFor="email" className="label">
          Email Adress *
        </label>
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="input"
          required
        />
      </div>
    </form>
  );
};
