import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import './SuprisePlannerHome.css';

// Import images
import balloonDecorationImg from '../../assets/category-1.jpg';
import carBootDecorationImg from '../../assets/category-2.jpeg';
import ringDecorationImg from '../../assets/category-3.jpeg';
import balloonBouquetImg from '../../assets/category-4.jpg';
import candlelightDinnersImg from '../../assets/category-5.jpeg'; 
import homeSurprisesImg from '../../assets/category-6.jpeg'; 
import housePartyImg from '../../assets/category-7.jpeg'; 
import proposalSetupImg from '../../assets/category-8.jpeg';
import romanticStayImg from '../../assets/category-9.jpeg';
import roomDecorationImg from '../../assets/category-10.jpeg';
import birthdayPartyImg from '../../assets/category-11.jpeg';
import honeyMoonImg from '../../assets/category-12.jpeg';
import FirstNightDecorationImg from '../../assets/category-13.jpeg';
import WeddingPlannerImg from '../../assets/category-14.jpeg';

import happyBirthdayRingImg from '../../assets/happy-birthday-ring.jpeg';
import valentineHomeDecorImg from '../../assets/valentine-home-decor.jpeg';
import romanticRoomStayImg from '../../assets/romantic-room-stay.jpeg';
import ledBalloonsDecorImg from '../../assets/led-balloons-decor.jpeg';
import transparentHeliumLedImg from '../../assets/transparent-helium-led.jpeg';
import welcomeBabyImg from '../../assets/welcome-baby.jpeg';
import babyShowerHomeImg from '../../assets/baby-shower-home.jpeg';
import premiumBirthdayRingImg from '../../assets/premium-birthday-ring.jpeg';

import charmingBirthdayImg from '../../assets/charming-birthday.jpeg';
import birthdayCarBootImg from '../../assets/birthday-car-boot.jpeg';
import pastelCarBootImg from '../../assets/pastel-car-boot.jpeg';
import iLoveYouCarBootImg from '../../assets/i-love-you-car-boot.jpeg';
import simpleCarBootImg from '../../assets/simple-car-boot.jpeg';

import babyShowerRingImg from '../../assets/baby-shower-ring.jpeg';
import mixColorBirthdayImg from '../../assets/mix-color-birthday.jpeg';
import simpleBalloonsRingImg from '../../assets/simple-balloons-ring.jpeg';
import proposalBalloonRingImg from '../../assets/proposal-balloon-ring.jpeg';
import heartCanopySetupImg from '../../assets/heart-canopy-setup.jpeg';
import floralMarryMeImg from '../../assets/floral-marry-me.jpeg';

import anniversaryPremiumBalloonImg from '../../assets/anniversary-premium-balloon.jpeg';
import valentinesDayBalloonImg from '../../assets/valentines-day-balloon.jpeg';
import iLoveYouBouquetImg from '../../assets/i-love-you-bouquet.jpeg';
import ringBalloonBouquetImg from '../../assets/ring-balloon-bouquet.jpeg';
import simpleAnniversaryBalloonImg from '../../assets/simple-anniversary-balloon.jpeg';
import anniversary25thBalloonImg from '../../assets/25th-anniversary-balloon.jpeg';
import momAlphabetBouquetImg from '../../assets/mom-alphabet-bouquet.jpeg';
import mothersDayBalloonImg from '../../assets/mothers-day-balloon.jpeg';
import crimsonedHeartBalloonImg from '../../assets/crimsoned-heart-balloon.jpeg';
import dadBalloonImg from '../../assets/dad-balloon.jpeg';

import movieScreeningImg from '../../assets/movie-screening.jpeg'; 
import premiumLoveRoomImg from '../../assets/premium-love-room.jpeg'; 
import baliDreamsImg from '../../assets/bali-dreams-rooftop.jpeg'; 
import privateTableImg from '../../assets/private-table-for-two.jpeg'; 
import romanticHavenImg from '../../assets/room-with-romantic-haven.jpeg';
import sunsetDinnerImg from '../../assets/sunset-dinner.jpeg'; 
import royalCandlesImg from '../../assets/royal-candles-decorations.jpeg'; 
import privateRooftopImg from '../../assets/private-rooftop-cabana.jpeg'; 
import privateMovieImg from '../../assets/private-movie-surprise.jpeg';

import simpleBirthdayImg from '../../assets/simple-birthday-party.jpeg'; 
import mermaidBackdropImg from '../../assets/mermaid-backdrop.jpeg'; 
import brideToBeRingImg from '../../assets/bride-to-be-ring-decoration.jpeg'; 
import welcomeBabyDecorationImg from '../../assets/welcome-baby-decoration.jpeg'; 
import birthdayRingDecorationImg from '../../assets/birthday-ring-decoration.jpeg'; 
import romanticRoomImg from '../../assets/romantic-room-decoration.jpeg'; 
import loveThemeRoomImg from '../../assets/love-theme-room-decor.jpeg';
import marriageProposalImg from '../../assets/marriage-proposal-decor.jpeg'; 
import surprisePartnerImg from '../../assets/surprise-for-partner.jpeg'; 
import movieDateNightImg from '../../assets/movie-date-night.jpeg'; 
import romanticNightRoomImg from '../../assets/romantic-night-room-decor.jpeg';
import memoriesSpotlightImg from '../../assets/memories-in-spotlight.jpeg'; 
import liveMusicalDeliveryImg from '../../assets/live-musical-delivery.jpeg';

// Proposal Setup
import romanticPrivateRooftopImg from '../../assets/romantic-private-rooftop.jpeg';
import willYouMarryMeImg from '../../assets/will-you-marry-me.jpeg';
import dreamProposalDecorationImg from '../../assets/dream-proposal-decoration.jpeg';
import marriageProposalDecorImg from '../../assets/marriage-proposal-decorr.jpeg';
import cabanaDateAtHomeImg from '../../assets/cabana-date-at-home.jpeg';
import romanticPrivateMarriageProposalImg from '../../assets/romantic-private-marriage-proposal.jpeg';
import anniversarySurpriseDecorationImg from '../../assets/anniversary-surprise-decoration.jpeg';
import miniFlashMobSurpriseImg from '../../assets/mini-flash-mob-surprise.jpeg';

// House Party
import housePartyBabyShowerImg from '../../assets/house-party-baby-shower.jpeg'; 
import housePartyBrideToBeRingImg from '../../assets/house-party-bride-to-be-ring.jpeg';
import housePartyWelcomeBabyImg from '../../assets/house-party-welcome-baby.jpeg';
import housePartyBirthdayRingImg from '../../assets/house-party-birthday-ring.jpeg';
import housePartyHappyBirthdayRingImg from '../../assets/house-party-happy-birthday-ring.jpeg';
import housePartyRomanticThemeImg from '../../assets/house-party-romantic-theme.jpeg';
import housePartyTransparentHeliumLedImg from '../../assets/house-party-transparent-helium-led.jpeg';
import housePartyPaperLanternImg from '../../assets/house-party-paper-lantern.jpeg';
import housePartyRomanticRooftopImg from '../../assets/house-party-romantic-rooftop.jpeg';
import housePartyLiveMusicalDeliveryImg from '../../assets/house-party-live-musical-delivery.jpeg'; 

//Romantic Stay
import bohemianCanopyHeavenImg from'../../assets/bohemianCanopyHeaven.jpeg';
import roomWithARomanticHavenImg from'../../assets/roomWithARomanticHaven.jpeg';
import  indoorRomanticBohemianImg from'../../assets/indoorRomanticBohemian.jpeg';
import  staycationWithBreakfastImg  from'../../assets/staycationWithBreakfast.jpeg';
import  romanticRoomDecorationImg from'../../assets/romanticRoomDecoration.jpeg';
import  romanticThemeDecoraionImg from'../../assets/romanticThemeDecoraion.jpeg';
import privateStayInHotelImg from'../../assets/privateStayInHotel.jpeg';
import  hotelRoomDecorationImg from'../../assets/hotelRoomDecoration.jpeg';
import  firstNightRomanticFlowerImg from'../../assets/firstNightRomanticFlower.jpeg';
import  romanticPoolSideCandleigImg from'../../assets/romanticPoolSideCandleig.jpeg';

//Room Decoration
import welcomeBabyChromeBalloonImg from'../../assets/welcomeBabyChromeBalloon.jpeg';
import simpleBirthdayPartyDecorationImg from'../../assets/simpleBirthdayPartyDecoration.jpeg';
import  mixColorBalloonsBirthdayImg from'../../assets/mixColorBalloonsBirthday.jpeg';
import  happyAnniversayBalloonImg  from'../../assets/happyAnniversayBalloon.jpeg';
import  mixBalloonsBirthdayRingImg from'../../assets/mixBalloonsBirthdayRing.jpeg';
import premiumBirthdayRingDecorationImg from'../../assets/premiumBirthdayRingDecoration.jpeg';
import  brideToBeRingDecorationAtHomeImg from'../../assets/brideToBeRingDecorationAtHome.jpeg';
import  valentineDayHomeDecorImg from'../../assets/valentineDayHomeDecor.jpeg';
import  transparentHeliumLEDBalloonImg from'../../assets/transparentHeliumLEDBalloon.jpeg';

//Birthday Party
import welcomeBabyChromeBalloonnImg from'../../assets/welcomeBabyChromeBalloonn.jpeg';
import simpleBirthdayPartyDecorationnImg from'../../assets/simpleBirthdayPartyDecorationn.jpeg';
import  simpleWelcomeBabyDecorationImg from'../../assets/simpleWelcomeBabyDecorationn.jpeg';
import  welcomeBabyDecorationAtHomeeImg  from'../../assets/welcomeBabyDecorationAtHomee.jpeg';
import birthdayRingDecorationnImg from'../../assets/birthdayRingDecorationn.jpeg';
import  transparentHeliumLEDBalloonnImg from'../../assets/transparentHeliumLEDBalloonn.jpeg';

//Honeymoon
import baliDreamsRooftopPoolsideImg from'../../assets/baliDreamsRooftopPoolside.jpeg';
import romanticCanopyDecorationImg from'../../assets/romanticCanopyDecoration.jpeg';
import  firstNightRoomDecoratorsImg from'../../assets/firstNightRoomDecorators.jpeg';
import  decorationwithRomanticRoomImg  from'../../assets/decorationwithRomanticRoom.jpeg';
import hotelRoomDecorationnnImg from'../../assets/hotelRoomDecorationnn.jpeg';
import  firstNightRomanticFlowerrImg from'../../assets/firstNightRomanticFlowerr.jpeg';

//First Night Decoration
import RomanticCanopyDecorationImg from'../../assets/romanticCanopyDecorationn.jpeg';
import  firstNighttRoomDecoratorsImg from'../../assets/firstNighttRoomDecorators.jpeg';
import  decorationwithRomanticRoommImg  from'../../assets/decorationwithRomanticRoomm.jpeg';
import  firstNightRomanticFlowersImg from'../../assets/firstNightRomanticFlowers.jpeg';

//Wedding Planner
import HaldiDecorationImg from'../../assets/HaldiDecoration.jpeg';
import  CarnivalDecorationImg from'../../assets/CarnivalDecoration.jpeg';


const SuprisePlannerHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const categories = [
    { name: 'Balloon Decoration', image: balloonDecorationImg },
    { name: 'Car Boot Decoration', image: carBootDecorationImg },
    { name: 'Ring Decoration', image: ringDecorationImg },
    { name: 'Balloon Bouquet', image: balloonBouquetImg },
    { name: 'Candlelight Dinners', image: candlelightDinnersImg },
    { name: 'Home Surprises', image: homeSurprisesImg },
    { name: 'House Party', image: housePartyImg },
    { name: 'Proposal Setup', image: proposalSetupImg },
    { name: 'Romantic Stay', image: romanticStayImg }, 
    { name: 'Room Decoration', image: roomDecorationImg }, 
    { name: 'Birthday party', image: birthdayPartyImg },
    { name: 'Honeymoon', image: honeyMoonImg }, 
    { name: 'First Night Decoration', image: FirstNightDecorationImg }, 
    { name: 'Wedding Planner', image: WeddingPlannerImg }, 

    
  ];

  const allProducts = [
    // Balloon Decoration Products
    { name: 'Happy Birthday Ring Decoration', price: 1800, oldPrice: 2100, category: 'Balloon Decoration', image: happyBirthdayRingImg },
    { name: 'Valentine Day Home Decor', price: 2200, oldPrice: 2500, category: 'Balloon Decoration', image: valentineHomeDecorImg },
    { name: 'Romantic Room Decoration With Stay', price: 3200, oldPrice: 3500, category: 'Balloon Decoration', image: romanticRoomStayImg },
    { name: 'LED Balloons Decor', price: 1500, oldPrice: 1800, category: 'Balloon Decoration', image: ledBalloonsDecorImg },
    { name: 'Transparent Helium LED Balloon', price: 1700, oldPrice: 2000, category: 'Balloon Decoration', image: transparentHeliumLedImg },
    { name: 'Simple Welcome Baby Decoration', price: 1400, oldPrice: 1700, category: 'Balloon Decoration', image: welcomeBabyImg },
    { name: 'Baby Shower Decoration at Home', price: 2500, oldPrice: 2800, category: 'Balloon Decoration', image: babyShowerHomeImg },
    { name: 'Premium Birthday Ring Decoration', price: 2000, oldPrice: 2300, category: 'Balloon Decoration', image: premiumBirthdayRingImg },

    // Car Boot Decoration Products
    { name: 'Charming Birthday Car Boot Decoration', price: 2000, oldPrice: 2500, category: 'Car Boot Decoration', image: charmingBirthdayImg },
    { name: 'Birthday Car Boot Decoration', price: 1700, oldPrice: 2000, category: 'Car Boot Decoration', image: birthdayCarBootImg },
    { name: 'Pastel Car Boot Decoration', price: 1500, oldPrice: 1800, category: 'Car Boot Decoration', image: pastelCarBootImg },
    { name: 'I Love You Car Boot Decoration', price: 1900, oldPrice: 2200, category: 'Car Boot Decoration', image: iLoveYouCarBootImg },
    { name: 'Simple Car Boot Decoration', price: 1300, oldPrice: 1600, category: 'Car Boot Decoration', image: simpleCarBootImg },
    

    // Ring Decoration Products
    { name: 'Baby Shower Ring Decoration', price: 1800, oldPrice: 2100, category: 'Ring Decoration', image: babyShowerRingImg },
    { name: 'Mix Color Balloons Birthday Decoration', price: 1600, oldPrice: 1900, category: 'Ring Decoration', image: mixColorBirthdayImg },
    { name: 'Simple Balloons Ring Decoration', price: 1200, oldPrice: 1500, category: 'Ring Decoration', image: simpleBalloonsRingImg },
    { name: 'Proposal Balloon Ring Setup', price: 2000, oldPrice: 2400, category: 'Ring Decoration', image: proposalBalloonRingImg },
    { name: 'Premium Heart & Canopy Setup', price: 2700, oldPrice: 3000, category: 'Ring Decoration', image: heartCanopySetupImg },
    { name: 'Floral Marry Me Ring Decoration', price: 2200, oldPrice: 2500, category: 'Ring Decoration', image: floralMarryMeImg },

    // Balloon Bouquet Products
    { name: 'Anniversary Premium Balloon Bouquet', price: 1900, oldPrice: 2300, category: 'Balloon Bouquet', image: anniversaryPremiumBalloonImg },
    { name: 'Valentine Day Balloon Bouquet', price: 2100, oldPrice: 2400, category: 'Balloon Bouquet', image: valentinesDayBalloonImg },
    { name: 'I Love You Balloon Bouquet', price: 1700, oldPrice: 2000, category: 'Balloon Bouquet', image: iLoveYouBouquetImg },
    { name: 'Ring Balloon Bouquet Decoration', price: 2000, oldPrice: 2300, category: 'Balloon Bouquet', image: ringBalloonBouquetImg },
    { name: 'Simple Anniversary Balloon Bouquet', price: 1400, oldPrice: 1700, category: 'Balloon Bouquet', image: simpleAnniversaryBalloonImg },
    { name: '25th Anniversary Balloon Bouquet', price: 2500, oldPrice: 2800, category: 'Balloon Bouquet', image: anniversary25thBalloonImg },
    { name: 'Mom Alphabet Balloon Bouquet', price: 1500, oldPrice: 1800, category: 'Balloon Bouquet', image: momAlphabetBouquetImg },
    { name: 'Mother’s Day Balloon Bouquet', price: 1800, oldPrice: 2100, category: 'Balloon Bouquet', image: mothersDayBalloonImg },
    { name: 'Crimsoned Heart Balloon Bouquet', price: 2000, oldPrice: 2300, category: 'Balloon Bouquet', image: crimsonedHeartBalloonImg },
    { name: 'Dad Balloon Bouquet', price: 1400, oldPrice: 1700, category: 'Balloon Bouquet', image: dadBalloonImg },

    // Candlelight Dinners Products
    { name: 'Movie Screening Experience', price: 3500, oldPrice: 4000, category: 'Candlelight Dinners', image: movieScreeningImg },
    { name: 'Premium Love Room Setup', price: 4500, oldPrice: 5000, category: 'Candlelight Dinners', image: premiumLoveRoomImg },
    { name: 'Bali Dreams Package', price: 5500, oldPrice: 6000, category: 'Candlelight Dinners', image: baliDreamsImg },
    { name: 'Private Table Setup', price: 3000, oldPrice: 3500, category: 'Candlelight Dinners', image: privateTableImg },
    { name: 'Romantic Haven', price: 4000, oldPrice: 4500, category: 'Candlelight Dinners', image: romanticHavenImg },
    { name: 'Sunset Dinner Experience', price: 3700, oldPrice: 4200, category: 'Candlelight Dinners', image: sunsetDinnerImg },
    { name: 'Royal Candles Setup', price: 3300, oldPrice: 3800, category: 'Candlelight Dinners', image: royalCandlesImg },
    { name: 'Private Rooftop Dinner', price: 5000, oldPrice: 5500, category: 'Candlelight Dinners', image: privateRooftopImg },
    { name: 'Private Movie Night Setup', price: 2800, oldPrice: 3200, category: 'Candlelight Dinners', image: privateMovieImg },

    // Home Surprises Products
    { name: 'Simple Birthday Surprise', price: 1600, oldPrice: 1900, category: 'Home Surprises', image: simpleBirthdayImg },
    { name: 'Mermaid Backdrop Setup', price: 1800, oldPrice: 2100, category: 'Home Surprises', image: mermaidBackdropImg },
    { name: 'Bride To Be Ring Setup', price: 2000, oldPrice: 2300, category: 'Home Surprises', image: brideToBeRingImg },
    { name: 'Welcome Baby Decoration', price: 1400, oldPrice: 1700, category: 'Home Surprises', image: welcomeBabyDecorationImg },
    { name: 'Birthday Ring Decoration', price: 1700, oldPrice: 2000, category: 'Home Surprises', image: birthdayRingDecorationImg },
    { name: 'Romantic Room Setup', price: 2200, oldPrice: 2500, category: 'Home Surprises', image: romanticRoomImg },
    { name: 'Love Theme Room Decoration', price: 2300, oldPrice: 2600, category: 'Home Surprises', image: loveThemeRoomImg },
    { name: 'Marriage Proposal Setup', price: 2700, oldPrice: 3000, category: 'Home Surprises', image: marriageProposalImg },
    { name: 'Surprise for Partner', price: 2500, oldPrice: 2800, category: 'Home Surprises', image: surprisePartnerImg },
    { name: 'Movie Date Night Package', price: 2100, oldPrice: 2400, category: 'Home Surprises', image: movieDateNightImg },
    { name: 'Romantic Night Room Setup', price: 2800, oldPrice: 3200, category: 'Home Surprises', image: romanticNightRoomImg },
    { name: 'Memories in Spotlight', price: 2400, oldPrice: 2700, category: 'Home Surprises', image: memoriesSpotlightImg },
    { name: 'Live Musical Delivery', price: 3500, oldPrice: 4000, category: 'Home Surprises', image: liveMusicalDeliveryImg },

    //Proposal Setup
    { name: 'Romantic Private Rooftop', price: 5500, oldPrice: 6000, category: 'Proposal Setup', image: romanticPrivateRooftopImg },
    { name: 'Proposal Balloon Ring Setup', price: 2000, oldPrice: 2400, category: 'Proposal Setup', image: proposalBalloonRingImg },
    { name: 'Premium Heart & Canopy Setup', price: 2700, oldPrice: 3000, category: 'Proposal Setup', image: heartCanopySetupImg },
    { name: 'Floral Marry Me Ring Decorate', price: 2200, oldPrice: 2500, category: 'Proposal Setup', image: floralMarryMeImg },
    { name: 'Will You Marry Me Setup', price: 2500, oldPrice: 2800, category: 'Proposal Setup', image: willYouMarryMeImg },
    { name: 'Sunset Dinner Under Open Sky', price: 3700, oldPrice: 4200, category: 'Proposal Setup', image: sunsetDinnerImg },
    { name: 'Dream Proposal Decoration', price: 3000, oldPrice: 3500, category: 'Proposal Setup', image: dreamProposalDecorationImg },
    { name: 'Marriage Proposal Decor', price: 2700, oldPrice: 3200, category: 'Proposal Setup', image: marriageProposalDecorImg },
    { name: 'Cabana Date at Home', price: 4000, oldPrice: 4500, category: 'Proposal Setup', image: cabanaDateAtHomeImg },
    { name: 'Romantic Private Marriage Proposal', price: 4500, oldPrice: 5000, category: 'Proposal Setup', image: romanticPrivateMarriageProposalImg },
    { name: 'Anniversary Surprise Decoration', price: 2300, oldPrice: 2600, category: 'Proposal Setup', image: anniversarySurpriseDecorationImg },
    { name: 'Mini Flash Mob Surprise', price: 3500, oldPrice: 4000, category: 'Proposal Setup', image: miniFlashMobSurpriseImg },

   //House Party
   { name: 'Baby Shower Decoration', price: 2000, oldPrice: 2300, category: 'House Party', image: housePartyBabyShowerImg },
   { name: 'Bride To Be Ring Setup', price: 2200, oldPrice: 2500, category: 'House Party', image: housePartyBrideToBeRingImg },
   { name: 'Welcome Baby Decoration At Home', price: 1800, oldPrice: 2100, category: 'House Party', image: housePartyWelcomeBabyImg },
   { name: 'Birthday Ring Decoration', price: 2400, oldPrice: 2700, category: 'House Party', image: housePartyBirthdayRingImg },
   { name: 'Happy Birthday Ring Decoration', price: 2500, oldPrice: 2800, category: 'House Party', image: housePartyHappyBirthdayRingImg },
   { name: 'Romantic Theme Decoration', price: 2600, oldPrice: 2900, category: 'House Party', image: housePartyRomanticThemeImg },
   { name: 'Transparent Helium LED Balloon', price: 1700, oldPrice: 2000, category: 'House Party', image: housePartyTransparentHeliumLedImg },
   { name: 'Paper Lantern Birthday Decor', price: 2000, oldPrice: 2300, category: 'House Party', image: housePartyPaperLanternImg },
   { name: 'Romantic Rooftop Date at Home', price: 3500, oldPrice: 4000, category: 'House Party', image: housePartyRomanticRooftopImg },
   { name: 'Live Musical Delivery Surprise', price: 3800, oldPrice: 4200, category: 'House Party', image: housePartyLiveMusicalDeliveryImg },

   //Romantic Stay
   { name: 'Bohemian Canopy Heaven', price: 2000, oldPrice: 2300, category: 'Romantic Stay', image: bohemianCanopyHeavenImg },
   { name: 'Room with a romantic haven', price: 2200, oldPrice: 2500, category: 'Romantic Stay', image: roomWithARomanticHavenImg },
   { name: 'Indoor romantic bohemian', price: 1800, oldPrice: 2100, category: 'Romantic Stay', image: indoorRomanticBohemianImg },
   { name: 'Staycation With Breakfast', price: 2400, oldPrice: 2700, category: 'Romantic Stay', image: staycationWithBreakfastImg },
   { name: 'Romantic Room Decoration', price: 2500, oldPrice: 2800, category: 'Romantic Stay', image: romanticRoomDecorationImg },
   { name: 'Romantic Theme Decoration', price: 2600, oldPrice: 2900, category: 'Romantic Stay', image: romanticThemeDecoraionImg },
   { name: 'Private stay in hotel', price: 1700, oldPrice: 2000, category: 'Romantic Stay', image: privateStayInHotelImg },
   { name: 'Hotel Room Decoration', price: 2000, oldPrice: 2300, category: 'Romantic Stay', image: hotelRoomDecorationImg },
   { name: 'First Night Romantic Flower', price: 3500, oldPrice: 4000, category: 'Romantic Stay', image: firstNightRomanticFlowerImg },
   { name: 'Romantic Pool Side Candlelig', price: 3800, oldPrice: 4200, category: 'Romantic Stay', image: romanticPoolSideCandleigImg },
  
   //Room Decoration
   { name: 'Welcome Baby Chrome Balloon', price: 2000, oldPrice: 2300, category: 'Room Decoration', image: welcomeBabyChromeBalloonImg },
   { name: 'Simple Birthday Party Decoration', price: 2200, oldPrice: 2500, category: 'Room Decoration', image: simpleBirthdayPartyDecorationImg },
   { name: 'Mix Color Balloons Birthday', price: 1800, oldPrice: 2100, category: 'Room Decoration', image: mixColorBalloonsBirthdayImg },
   { name: 'Happy Anniversary Balloon', price: 2400, oldPrice: 2700, category: 'Room Decoration', image: happyAnniversayBalloonImg },
   { name: 'Mix Balloons Birthday Ring', price: 2600, oldPrice: 2900, category: 'Room Decoration', image: mixBalloonsBirthdayRingImg },
   { name: 'Premium Birthday Ring Decoration', price: 1700, oldPrice: 2000, category: 'Room Decoration', image: premiumBirthdayRingDecorationImg },
   { name: 'Baby Shower Decoration at Home', price: 2000, oldPrice: 2300, category: 'Room Decoration', image: brideToBeRingDecorationAtHomeImg },
   { name: 'Valentine Day Home Decor', price: 3800, oldPrice: 4200, category: 'Room Decoration', image: valentineDayHomeDecorImg },
   { name: 'Transparent Helium LED Balloon', price: 3800, oldPrice: 4200, category: 'Room Decoration', image: transparentHeliumLEDBalloonImg },

   //Birthday Party
   { name: 'Welcome Baby Chrome Balloonn', price: 2000, oldPrice: 2300, category: 'Birthday party', image: welcomeBabyChromeBalloonnImg },
   { name: 'Simple Birthday Party Decorationn', price: 2200, oldPrice: 2500, category: 'Birthday party', image: simpleBirthdayPartyDecorationnImg },
   { name: 'Simple Welcome Baby Decoration', price: 1800, oldPrice: 2100, category: 'Birthday party', image: simpleWelcomeBabyDecorationImg },
   { name: 'Welcome Baby Decoration At Home', price: 2400, oldPrice: 2700, category: 'Birthday party', image: welcomeBabyDecorationAtHomeeImg },
   { name: 'Birthday Ring Decoration', price: 2500, oldPrice: 2800, category: 'Birthday party', image: birthdayRingDecorationnImg },
   { name: 'Transparent Helium LED Balloon', price: 3800, oldPrice: 4200, category: 'Birthday party', image: transparentHeliumLEDBalloonnImg },

   //Honeymoon
   { name: 'Bali Dreams Rooftop Pool side', price: 2000, oldPrice: 2300, category: 'Honeymoon', image: baliDreamsRooftopPoolsideImg },
   { name: 'Romantic Canopy Decoration', price: 2200, oldPrice: 2500, category: 'Honeymoon', image: romanticCanopyDecorationImg },
   { name: 'First Night Room Decorators', price: 1800, oldPrice: 2100, category: 'Honeymoon', image: firstNightRoomDecoratorsImg },
   { name: 'Decoration with Romantic Room', price: 2400, oldPrice: 2700, category: 'Honeymoon', image: decorationwithRomanticRoomImg },
   { name: 'Hotel Room Decoration', price: 2500, oldPrice: 2800, category: 'Honeymoon', image: hotelRoomDecorationnnImg },
   { name: 'First Night Romantic Flower', price: 3800, oldPrice: 4200, category: 'Honeymoon', image: firstNightRomanticFlowerrImg },

   //First Night Decorations
   { name: 'Romantic Canopy Decoration', price: 2000, oldPrice: 2300, category: 'First Night Decoration', image: RomanticCanopyDecorationImg },
   { name: 'First Night Room Decorators', price: 1800, oldPrice: 2100, category: 'First Night Decoration', image: firstNighttRoomDecoratorsImg },
   { name: 'Decoration with Romantic Room', price: 2400, oldPrice: 2700, category: 'First Night Decoration', image: decorationwithRomanticRoommImg },
   { name: 'First Night Romantic Flower', price: 3800, oldPrice: 4200, category: 'First Night Decoration', image: firstNightRomanticFlowersImg },

   //Wedding Planner
   { name: 'Haldi Decoration', price: 2000, oldPrice: 2300, category: 'Wedding Planner', image: HaldiDecorationImg },
   { name: 'Carnival Decoration', price: 1800, oldPrice: 2100, category: 'Wedding Planner', image: CarnivalDecorationImg },
  ];

  return (
    <div className="app-container">
    <Categories categories={categories} onSelectCategory={setSelectedCategory} />
    <Products products={allProducts.filter(product => selectedCategory === 'All' || product.category === selectedCategory)} />
  </div>
  );
};

export default SuprisePlannerHome;
