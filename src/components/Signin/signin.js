import React from "react";
import "tachyons";

const Signin = () => {
  return (
    <article id="smine" className="br3 ba dark-gray b--black-10 mv3 w-100 w-50-m w-25-l shadow-5 mw6 center">
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
            </div>

          </fieldset>
          <div className="">
            <input style={{ display: 'block', position: 'absolute', top: '60%', left: '45%' }} className="b3 ph4 pv2 input-reset  b--black bg-transparent  pointer f6 dib" type="submit" value="Sign in" />
          </div>

        </form>
      </main>
    </article>
  );
};

export default Signin;
