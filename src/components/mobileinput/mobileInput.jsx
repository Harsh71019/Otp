import React from "react";

const Mobile = ({ onRouteChange }) => (
  <div className=" tc pa2">
    <h1> DEFAULT OTP IS 1234 </h1>
    <h1> IF YOU ENTER 1234 IT WILL SHOW REGISTRATION SUCESSFULL </h1>

    <main className="pa5 white-60">
      <article className="br3  ba shadow-5 b--white-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <form action="" id="cusCreate" autocomplete="off">
          <input
            className="pa3 ba b--green bg-lightest-blue tc "
            type="tel"
            name="telphone"
            placeholder="Please Enter Your Mobile Number"
            maxlength="10"
            title="Ten digits code"
            required
          />{" "}
          <br></br>
          <div className="pa2">
            <input
              onClick={onRouteChange}
              className="b ph3 pv2 input-reset ba b--black  bg-transparent grow pointer f6 dib black pa2"
              type="submit"
              value="Send OTP"
            />
          </div>
        </form>
      </article>
    </main>
  </div>
);

export default Mobile;
