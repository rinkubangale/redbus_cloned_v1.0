import React from "react";
import styles from "./Corporate.module.css";
import { useState } from "react";

export const FAQ = () => {
  const [general, setGeneral] = useState(false);
  const [account, setAccount] = useState(false);
  const [payment, setPayment] = useState(false);
  const [safety, setSafety] = useState(false);

  return (
    <div className={styles.Faq_container}>
      <h2>FAQ</h2>
      <div
        onClick={() => {
          setGeneral(!general);
        }}
        className={styles.Faq_data}
      >
        {general ? (
          <div>
            <div className={styles.Faq_head}>
              <span>1. GENERAL</span>
              <span className={styles.Faq_add_icon}>
                <img src="./minus.png" alt="" />
              </span>
            </div>
            <div>
              <h5> What is rPool? </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                Download the redBus App, tap on the rPool tab, next complete and
                activate your rPool profile to start riding.
              </p>
            </div>
            <div>
              <h5> What is carpooling? </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                Carpooling is a smart way to commute by sharing just one
                vehicle. A car owner, offers ride and chooses fellow riders who
                travel along the same route. In addition to being a more
                affordable way to commute, it also helps the environment by
                reducing the number of cars on the road and bringing down the
                pollution.
              </p>
            </div>
            <div>
              <h5>
                How is rPool different than other carpooling cab services?{" "}
              </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                rPool is not a cab service. It is an online carpool platform
                that connects Driver(s) and Rider(s). rPool caters exclusively
                to working professionals, who are verified riders.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.Faq_head}>
              <span>1. GENERAL</span>
              <span className={styles.Faq_add_icon}>
                <img src="./add.png" alt="" />
              </span>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setAccount(!account);
        }}
      >
        {account ? (
          <div>
            <div className={styles.Faq_head}>
              <span>2. ACCOUNT</span>
              <span className={styles.Faq_add_icon}>
                <img src="./minus.png" alt="" />
              </span>
            </div>
            <div>
              <h5> How can I register for the service? </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                Download the redBus App, tap on the rPool tab, next complete and
                activate your rPool profile to start riding.
              </p>
            </div>
            <div>
              <h5>
                Can I register on rPool using my Google / Facebook account?
              </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                Yes, you can register using either your Google or Facebook
                account.
              </p>
            </div>
            <div>
              <h5>How is the verification done?</h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                We send an email verification to your corporate email ID that
                you provide us at the time of creation of your profile. You can
                either enter the 6-digit OTP sent to the email to verify the
                account or click on the link given in the mail which will
                automatically verify the account.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.Faq_head}>
              <span>2. ACCOUNT</span>
              <span className={styles.Faq_add_icon}>
                <img src="./add.png" alt="" />
              </span>
            </div>
          </div>
        )}
      </div>

      <div
        onClick={() => {
          setPayment(!payment);
        }}
      >
        {payment ? (
          <div>
            <div className={styles.Faq_head}>
              <span>3. PAYMENT</span>
              <span className={styles.Faq_add_icon}>
                <img src="./minus.png" alt="" />
              </span>
            </div>
            <div>
              <h5> How is payment handled on rPool? </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                rPool works on a system of prepaid points called rPool Points.
                These points are agreed between a Driver and Rider before
                confirmation of rendering and/or availing of a given Trip. These
                rPool points will be transferred from the rPool Wallet of the
                Rider to the rPool Wallet of the Driver after each Trip. This
                will ensure a hassle and cash free ride.
              </p>
            </div>
            <div>
              <h5> What is the default fare set by rPool? </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                rPool has a capping on fixation of maximum rPool points for
                every kilometer to be travelled on a given Trip. The maximum
                rPool Points that can be charged by a Driver from a Rider for a
                Hatchback is 5 rPool Points per kilometer, for a Sedan is 5
                rPool Points per kilometer, MUV/SUV is 5 rPool Points per
                kilometer, Premium vehicles is 5 rPool Points per kilometer for
                a given Trip.
              </p>
            </div>
            <div>
              <h5>When and how do I pay for my Trip?</h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                With every successful Trip, points are automatically transferred
                from Rider’s rPool Wallet to Driver’s rPool Wallet. We provide
                both the Driver and Rider with an electronic transaction copy of
                the Trip.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.Faq_head}>
              <span>3. PAYMENT</span>
              <span className={styles.Faq_add_icon}>
                <img src="./add.png" alt="" />
              </span>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setSafety(!safety);
        }}
      >
        {safety ? (
          <div>
            <div className={styles.Faq_head}>
              <span>4. SAFETY</span>
              <span className={styles.Faq_add_icon}>
                <img src="./minus.png" alt="" />
              </span>
            </div>
            <div>
              <h5> How secure is the system? </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                All users are required to verify their phone number and official
                email id for registering with rPool. Aside from this, users can
                configure their social network profiles, so other users can make
                informed decisions before connecting. We carry out regular
                checks on users and invite other users to report any false
                information by users.
              </p>
            </div>
            <div>
              <h5>
                What if do not wish to travel with someone from the past?{" "}
              </h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                You are in control of every Trip. If you choose to not ride with
                a Driver, you can simply choose to not send an invitation to
                that Driver. Similarly Driver will have an option of rejecting
                the invitation of a Rider, if Driver chose not to travel with a
                particular Rider. Should you feel concerned beyond the
                rejection, kindly reach out to us at rpool@redbus.in
              </p>
            </div>
            <div>
              <h5>Will my phone number be seen during the calls?</h5>
            </div>
            <div className={styles.Faq_inner_text}>
              <p>
                No, your contact number is hidden through call masking and will
                not be visible to anyone.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.Faq_head}>
              <span>4. SAFETY</span>
              <span className={styles.Faq_add_icon}>
                <img src="./add.png" alt="" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
