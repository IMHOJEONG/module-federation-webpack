import PiCurrencyCircleDollarFill from "react-icons/pi/PiCurrencyCircleDollarFill";
import PiShoppingCart from "react-icons/pi/PiShoppingCart";
import PiHeadset from "react-icons/pi/PiHeadset";
import PiPackage from "react-icons/pi/PiPackage";
import PiChartBar from "react-icons/pi/PiChartBar";
import PiCurrencyDollar from "react-icons/pi/PiCurrencyDollar";
import PiSquaresFour from "react-icons/pi/PiSquaresFour";
import PiGridFour from "react-icons/pi/PiGridFour";
import PiFeather from "react-icons/pi/PiFeather";
import PiChartLineUp from "react-icons/pi/PiChartLineUp";
import PiMapPinLine from "react-icons/pi/PiMapPinLine";
import PiUserGear from "react-icons/pi/PiUserGear";
import PiBellSimpleRinging from "react-icons/pi/PiBellSimpleRinging";
import PiUser from "react-icons/pi/PiUser";
import PiEnvelopeSimpleOpen from "react-icons/pi/PiEnvelopeSimpleOpen";
import PiSteps from "react-icons/pi/PiSteps";
import PiCreditCard from "react-icons/pi/PiCreditCard";
import PiTable from "react-icons/pi/PiTable";
import PiBrowser from "react-icons/pi/PiBrowser";
import PiHourglassSimple from "react-icons/pi/PiHourglassSimple";
import PiUserCircle from "react-icons/pi/PiUserCircle";
import PiShootingStar from "react-icons/pi/PiShootingStar";
import PiRocketLaunch from "react-icons/pi/PiRocketLaunch";
import PiFolderLock from "react-icons/pi/PiFolderLock";
import PiBinoculars from "react-icons/pi/PiBinoculars";
import PiHammer from "react-icons/pi/PiHammer";
import PiNoteBlank from "react-icons/pi/PiNoteBlank";
import PiUserPlus from "react-icons/pi/PiUserPlus";
import PiShieldCheck from "react-icons/pi/PiShieldCheck";
import PiLockKey from "react-icons/pi/PiLockKey";
import PiChatCenteredDots from "react-icons/pi/PiChatCenteredDots";
import PiCalendarPlus from "react-icons/pi/PiCalendarPlus";
import PiHouseLine from "react-icons/pi/PiHouseLine";
import PiAirplaneTilt from "react-icons/pi/PiAirplaneTilt";
import PiPokerChip from "react-icons/pi/PiPokerChip";
import PiFolder from "react-icons/pi/PiFolder";
import PiListNumbers from "react-icons/pi/PiListNumbers";
import PiCaretCircleUpDown from "react-icons/pi/PiCaretCircleUpDown";
import PiBriefcase from "react-icons/pi/PiBriefcase";
import PiCalendarDuotone from "react-icons/pi/PiCalendarDuotone";
import PiShapes from "react-icons/pi/PiShapes";
import PiNewspaperClippingDuotone from "react-icons/pi/PiNewspaperClippingDuotone";
import PiTableDuotone from "react-icons/pi/PiTableDuotone";
import PiShapesDuotone from "react-icons/pi/PiShapesDuotone";

import { DUMMY_ID } from "@/config/constants";
import { routes } from "@/config/routes";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: "Overview",
  },
  // label end
  {
    name: "File Manager",
    href: "/",
    icon: <PiFolder />,
  },
  {
    name: "Appointment",
    href: routes.appointment.dashboard,
    icon: <PiCalendarDuotone />,
  },
  {
    name: "Executive",
    href: routes.executive.dashboard,
    icon: <PiBriefcase />,
  },
  {
    name: "Job Board",
    href: routes.jobBoard.dashboard,
    icon: <PiShapes />,
    badge: "NEW",
  },
  {
    name: "Financial",
    href: routes.financial.dashboard,
    icon: <PiCurrencyCircleDollarFill />,
  },
  {
    name: "Logistics",
    href: routes.logistics.dashboard,
    icon: <PiPackage />,
  },
  {
    name: "E-Commerce",
    href: routes.eCommerce.dashboard,
    icon: <PiShoppingCart />,
  },
  {
    name: "Analytics",
    href: routes.analytics,
    icon: <PiChartBar />,
  },
  {
    name: "Support",
    href: routes.support.dashboard,
    icon: <PiHeadset />,
  },

  // label start
  {
    name: "Apps Kit",
  },
  // label end
  {
    name: "E-Commerce",
    href: "#",
    icon: <PiShoppingCart />,
    dropdownItems: [
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
      {
        name: "Product Details",
        href: routes.eCommerce.productDetails(DUMMY_ID),
      },
      {
        name: "Create Product",
        href: routes.eCommerce.createProduct,
      },
      {
        name: "Edit Product",
        href: routes.eCommerce.ediProduct(DUMMY_ID),
      },
      {
        name: "Categories",
        href: routes.eCommerce.categories,
      },
      {
        name: "Create Category",
        href: routes.eCommerce.createCategory,
      },
      {
        name: "Edit Category",
        href: routes.eCommerce.editCategory(DUMMY_ID),
      },
      {
        name: "Orders",
        href: routes.eCommerce.orders,
      },
      {
        name: "Order Details",
        href: routes.eCommerce.orderDetails(DUMMY_ID),
      },
      {
        name: "Create Order",
        href: routes.eCommerce.createOrder,
      },
      {
        name: "Edit Order",
        href: routes.eCommerce.editOrder(DUMMY_ID),
      },
      {
        name: "Reviews",
        href: routes.eCommerce.reviews,
      },
      {
        name: "Shop",
        href: routes.eCommerce.shop,
      },
      {
        name: "Cart",
        href: routes.eCommerce.cart,
      },
      {
        name: "Checkout & Payment",
        href: routes.eCommerce.checkout,
      },
    ],
  },
  {
    name: "Support",
    href: "#",
    icon: <PiHeadset />,
    dropdownItems: [
      {
        name: "Inbox",
        href: routes.support.inbox,
      },
      {
        name: "Snippets",
        href: routes.support.snippets,
      },
      {
        name: "Templates",
        href: routes.support.templates,
      },
    ],
  },
  {
    name: "Invoice",
    href: "#",
    icon: <PiCurrencyDollar />,
    dropdownItems: [
      {
        name: "List",
        href: routes.invoice.home,
      },
      {
        name: "Details",
        href: routes.invoice.details(DUMMY_ID),
      },
      {
        name: "Create",
        href: routes.invoice.create,
      },
      {
        name: "Edit",
        href: routes.invoice.edit(DUMMY_ID),
      },
    ],
  },
  {
    name: "Logistics",
    href: "#",
    icon: <PiPackage />,
    dropdownItems: [
      {
        name: "Shipment List",
        href: routes.logistics.shipmentList,
      },
      {
        name: "Shipment Details",
        href: routes.logistics.shipmentDetails(DUMMY_ID),
      },
      {
        name: "Create Shipment",
        href: routes.logistics.createShipment,
      },
      {
        name: "Edit Shipment",
        href: routes.logistics.editShipment(DUMMY_ID),
      },
      {
        name: "Customer Profile",
        href: routes.logistics.customerProfile,
      },
      {
        name: "Tracking",
        href: routes.logistics.tracking(DUMMY_ID),
      },
    ],
  },
  {
    name: "Job Feeds",
    href: routes.jobBoard.jobFeed,
    icon: <PiShapesDuotone />,
    badge: "NEW",
  },
  {
    name: "Appointment",
    href: routes.appointment.appointmentList,
    icon: <PiCalendarDuotone />,
  },
  {
    name: "File Manager",
    href: routes.file.manager,
    icon: <PiFolder />,
  },
  {
    name: "Event Calendar",
    href: routes.eventCalendar,
    icon: <PiCalendarPlus />,
  },
  {
    name: "Roles & Permissions",
    href: routes.rolesPermissions,
    icon: <PiFolderLock />,
  },
  {
    name: "Point of Sale",
    href: routes.pos.index,
    icon: <PiCreditCard />,
  },
  {
    name: "Invoice Builder",
    href: routes.invoice.builder,
    icon: <PiNewspaperClippingDuotone />,
    badge: "NEW",
  },
  // label start
  {
    name: "Search & Filters",
  },
  {
    name: "Real Estate",
    href: routes.searchAndFilter.realEstate,
    icon: <PiHouseLine />,
  },
  {
    name: "Flight Booking",
    href: routes.searchAndFilter.flight,
    icon: <PiAirplaneTilt />,
  },
  {
    name: "NFT",
    href: routes.searchAndFilter.nft,
    icon: <PiPokerChip />,
  },
  // label end
  // label start
  {
    name: "Widgets",
  },
  // label end
  {
    name: "Cards",
    href: routes.widgets.cards,
    icon: <PiSquaresFour />,
  },
  {
    name: "Icons",
    href: routes.widgets.icons,
    icon: <PiFeather />,
  },
  {
    name: "Charts",
    href: routes.widgets.charts,
    icon: <PiChartLineUp />,
  },
  // {
  //   name: 'Banners',
  //   href: routes.widgets.banners,
  //   icon: <PiImage />,
  // },
  {
    name: "Maps",
    href: routes.widgets.maps,
    icon: <PiMapPinLine />,
  },
  // label start
  {
    name: "Forms",
  },
  // label end
  {
    name: "Account Settings",
    href: routes.forms.profileSettings,
    icon: <PiUserGear />,
  },
  {
    name: "Notification Preference",
    href: routes.forms.notificationPreference,
    icon: <PiBellSimpleRinging />,
  },
  {
    name: "Personal Information",
    href: routes.forms.personalInformation,
    icon: <PiUser />,
  },
  {
    name: "Newsletter",
    href: routes.forms.newsletter,
    icon: <PiEnvelopeSimpleOpen />,
  },
  {
    name: "Multi Step",
    href: routes.multiStep,
    icon: <PiSteps />,
  },
  {
    name: "Payment Checkout",
    href: routes.eCommerce.checkout,
    icon: <PiCreditCard />,
  },
  // label start
  {
    name: "Tables",
  },
  // label end
  {
    name: "Basic",
    href: routes.tables.basic,
    icon: <PiGridFour />,
  },
  {
    name: "Collapsible",
    href: routes.tables.collapsible,
    icon: <PiCaretCircleUpDown />,
  },
  {
    name: "Enhanced",
    href: routes.tables.enhanced,
    icon: <PiTable />,
  },
  {
    name: "Sticky Header",
    href: routes.tables.stickyHeader,
    icon: <PiBrowser />,
  },
  {
    name: "Pagination",
    href: routes.tables.pagination,
    icon: <PiListNumbers />,
  },
  {
    name: "Search",
    href: routes.tables.search,
    icon: <PiHourglassSimple />,
  },
  {
    name: "TanStack Table",
    href: "#",
    icon: <PiTableDuotone />,
    dropdownItems: [
      {
        name: "Basic",
        href: routes.tables.tanTable,
      },
      {
        name: "Resizable",
        href: routes.tables.tanTableResizable,
      },
      {
        name: "Collapsible",
        href: routes.tables.tanTableCollapsible,
      },
      {
        name: "Drag & Drop",
        href: routes.tables.tanTableDnD,
      },
      {
        name: "Pinning",
        href: routes.tables.tanTablePinning,
      },
      {
        name: "Enhanced",
        href: routes.tables.tanTableEnhanced,
      },
    ],
  },
  // label start
  {
    name: "Pages",
  },
  {
    name: "Profile",
    href: routes.profile,
    icon: <PiUserCircle />,
  },
  {
    name: "Welcome",
    href: routes.welcome,
    icon: <PiShootingStar />,
  },
  {
    name: "Coming soon",
    href: routes.comingSoon,
    icon: <PiRocketLaunch />,
  },
  {
    name: "Access Denied",
    href: routes.accessDenied,
    icon: <PiFolderLock />,
  },
  {
    name: "Not Found",
    href: routes.notFound,
    icon: <PiBinoculars />,
  },
  {
    name: "Maintenance",
    href: routes.maintenance,
    icon: <PiHammer />,
  },
  {
    name: "Blank",
    href: routes.blank,
    icon: <PiNoteBlank />,
  },

  // label start
  {
    name: "Authentication",
  },
  // label end
  {
    name: "Sign Up",
    href: "#",
    icon: <PiUserPlus />,
    dropdownItems: [
      {
        name: "Modern Sign up",
        href: routes.auth.signUp1,
      },
      {
        name: "Vintage Sign up",
        href: routes.auth.signUp2,
      },
      {
        name: "Trendy Sign up",
        href: routes.auth.signUp3,
      },
      {
        name: "Elegant Sign up",
        href: routes.auth.signUp4,
      },
      {
        name: "Classic Sign up",
        href: routes.auth.signUp5,
      },
    ],
  },
  {
    name: "Sign In",
    href: "#",
    icon: <PiShieldCheck />,
    dropdownItems: [
      {
        name: "Modern Sign in",
        href: routes.auth.signIn1,
      },
      {
        name: "Vintage Sign in",
        href: routes.auth.signIn2,
      },
      {
        name: "Trendy Sign in",
        href: routes.auth.signIn3,
      },
      {
        name: "Elegant Sign in",
        href: routes.auth.signIn4,
      },
      {
        name: "Classic Sign in",
        href: routes.auth.signIn5,
      },
    ],
  },
  {
    name: "Forgot Password",
    href: "#",
    icon: <PiLockKey />,
    dropdownItems: [
      {
        name: "Modern Forgot password",
        href: routes.auth.forgotPassword1,
      },
      {
        name: "Vintage Forgot password",
        href: routes.auth.forgotPassword2,
      },
      {
        name: "Trendy Forgot password",
        href: routes.auth.forgotPassword3,
      },
      {
        name: "Elegant Forgot password",
        href: routes.auth.forgotPassword4,
      },
      {
        name: "Classic Forgot password",
        href: routes.auth.forgotPassword5,
      },
    ],
  },
  {
    name: "OTP Pages",
    href: "#",
    icon: <PiChatCenteredDots />,
    dropdownItems: [
      {
        name: "Modern OTP page",
        href: routes.auth.otp1,
      },
      {
        name: "Vintage OTP page",
        href: routes.auth.otp2,
      },
      {
        name: "Trendy OTP page",
        href: routes.auth.otp3,
      },
      {
        name: "Elegant OTP page",
        href: routes.auth.otp4,
      },
      {
        name: "Classic OTP page",
        href: routes.auth.otp5,
      },
    ],
  },
];
