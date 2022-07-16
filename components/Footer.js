import React from "react";

function Footer() {
  return (
    <div
      className="text-xs text-gray-600  grid grid-cols-1 
       md:grid-cols-4 gap-y-10  bg-gray-100 py-14 px-32">
      <div className="space-y-4">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb luxe</p>
      </div>

      <div className="space-y-4">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not real site</p>
        <p>asdf</p>
        <p>Airbnb Plus</p>
        <p>Airbnb luxe</p>
      </div>

      <div className="space-y-4">
        <h5 className="font-bold">HOST</h5>
        <p>Presnts</p>
        <p>Join Now</p>
        <p>How Airbnb works</p>
        <p>Airbnb Plus</p>
        <p>Airbnb luxe</p>
      </div>

      <div className="space-y-4">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Investors</p>
        <p>For the win</p>
        <p>Airbnb luxe</p>
      </div>
    </div>
  );
}

export default Footer;
