import React from "react";

export const ShippingForm = () => {
  return (
    <form className="black rounded border border border-black p-4">
      <h3 className="mb-4 text-2xl font-medium">Shipping Address</h3>
      <div className="space-y-2 pb-4">
        <label htmlFor="street" className="label">
          Street Adress *
        </label>
        <input
          name="street"
          type="text"
          placeholder="Street Address"
          className="input"
        />
      </div>
      <div className="space-y-2 pb-4">
        <label htmlFor="country" className="label">
          Country *
        </label>
        <input
          name="country"
          type="text"
          placeholder="Country"
          className="input"
        />
      </div>
      <div className="space-y-2 pb-4">
        <label htmlFor="city" className="label">
          Town / City *
        </label>
        <input
          name="city"
          type="text"
          placeholder="Town / City"
          className="input"
          required
        />
      </div>
      <div className="flex w-full gap-4">
        <div className="w-full space-y-2">
          <label htmlFor="state" className="label">
            State
          </label>
          <input
            name="state"
            type="text"
            placeholder="State"
            className="input"
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="zip" className="label">
            Zip code *
          </label>
          <input
            name="zip"
            type="text"
            placeholder="Zip Code"
            className="input"
            required
          />
        </div>
      </div>
    </form>
  );
};
