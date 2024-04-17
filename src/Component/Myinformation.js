import React from 'react';
import '../assets/CSS/Navbar.css'

function Myinformation() {
  return (
    <section className="p-4">
      <h3 className="display-4">Hello,</h3>
      <h1 className="display-1 font-weight-bold">I am Charles.</h1>
      <h5 className="text-orange display-3">UI/UX Designer</h5>
      <p className="text-secondary lead mt-4 mb-5">
        Hello, I am an aspiring UI/UX designer with the ability to translate
        designs into functional front-end.
      </p>

      <button className="btn bg-orange rounded-pill px-4 py-2 shadow-lg">
        Hire Me
      </button>
    </section>

  )
}

export default Myinformation