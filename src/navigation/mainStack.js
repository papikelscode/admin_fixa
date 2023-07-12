import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Splash from "../components/splashScreen";


import Verification from "../components/Verify";
import Userdash from "../components/Userdash";
import Tracker from "../components/Track";
import Profile from "../components/Profile";
import Booking from "../components/Book";
import Userhistory from "../components/Userhistory";
import Receiver from "../components/Recieveitem";
import Orderitem from "../components/Orderitem";
import CustomerPayment from "../components/CustomerPayment";
//import Userhistory from "../components/Userhistory";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";
//import DashboardScreen from "../components/dashboard";





const screens = {
    AdminFixa: {
        screen: Splash
    },
   
    AdminLogin: {
        screen: LoginScreen
    },
    AdminSignup: {
        screen: SignupScreen
    },
    Verification: {
        screen: Verification
    },
    // Dashboard: {
    //     screen: DashboardScreen
    // },
    Track: {
        screen: Tracker
    },
    Profile: {
        screen: Profile
    },
    Order: {
        screen: Booking
    },
    History: {
        screen: Userhistory
    },
    receiveorder: {
        screen: Receiver
    },
    makeorder: {
        screen: Orderitem
    },
    payment: {
        screen: CustomerPayment
    },
    history: {
        screen: Userhistory
    }



}










const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack);