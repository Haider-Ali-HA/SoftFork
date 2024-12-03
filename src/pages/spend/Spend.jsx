import React from 'react'
import Navbar3 from '../../components/common/Navbar3'
import { Tooltip } from '@mui/material'
import SubHeading from '../../components/common/SubHeading'
import MainHeading from '../../components/common/MainHeading'
import searchIcon from "/icons/Search.png"
import filterIcon from "/icons/Filter.png"
import amazon from "../../assets/rewardImages/amazon.png"
import amc from "../../assets/rewardImages/amc.png"
import etsy from "../../assets/rewardImages/etsy.png"
import jordan from "../../assets/rewardImages/jordan.png"
import starbucks from "../../assets/rewardImages/starbucks.png"
import steam from "../../assets/rewardImages/steam.png"
import nike from "../../assets/rewardImages/nike.png"
import RewardCard from '../../components/spend/RewardCard'

const Spend = () => {
    const rewardCards=[
        {
            image: amazon,
        },
        {
            image: starbucks,
        },
        {
            image: etsy,
        },
        {
            image: steam,
        },
        {
            image: nike
        },
        {
            image: starbucks,
        },
        {
            image: jordan,
        },
        {
            image: amc,
        },
    ]    


  return (
    <>
    <Navbar3/>
    <div className="w-full px-4">
    <div className="mt-5"></div>
        <MainHeading text={"Redeem Your Rewards"} />
        <SubHeading
          text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`}
        />
        <div className="mb-10 mt-8">
          <div className="">
            <div className="flex gap-5 w-full justify-end">
              <Tooltip title="Filter list">
                <button
                  className="border px-6 h-11 text-base rounded-lg flex gap-2 items-center justify-center border-gray-500"
                >
                  <img src={filterIcon} alt="filter icon" />
                  Filter
                </button>
              </Tooltip>
              <Tooltip title="Search">
                <div className="relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src={searchIcon} alt="search icon" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search…"
                    aria-label="search"
                    className="pl-10 pr-3 py-2 w-40 border border-gray-400 rounded-md outline-none"
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {
                rewardCards.map((card, index) => (
                   <RewardCard key={index} image={card.image}/>
                ))
            }
        </div>
        
    </div>
    </>
  )
}

export default Spend
