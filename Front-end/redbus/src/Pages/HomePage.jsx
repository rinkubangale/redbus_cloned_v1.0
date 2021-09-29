import React from 'react'
import Number from '../Components/numberPage/number'
import Travels from '../Components/Travels/Travels'
import { Coupon } from '../Components/HomePage/CardSection/Coupon';
import { Banner } from "../Components/HomePage/HeadBanner/Banner";
import { Convenience } from "../Components/HomePage/LastMinuteBookingSection/Convenience";
import { Safety } from "../Components/HomePage/SafetySection/Safety";

export const HomePage = () => {
    return (
      <div>
        <Banner />
        <Coupon />
        <Safety />
        <Convenience />

        <Number />
        <Travels />
      </div>
    );
}
