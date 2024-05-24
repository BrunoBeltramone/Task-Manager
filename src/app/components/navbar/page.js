"use client";
// src/components/Navbar.js
import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function NavbarComponent() {
  const { data: session, status } = useSession();

  return (
    <Navbar fluid className="bg-darkGray text-white">
      <Link href="/">
        <div style={{ transform: "scale(1)" }}>
          <svg
            width="160"
            height="40"
            viewBox="0 0 369.89473684210526 92.10526315789474"
            className="looka-1j8o68f"
          >
            <defs id="SvgjsDefs1750">
              <linearGradient id="SvgjsLinearGradient1755">
                <stop id="SvgjsStop1756" stopColor="#b98947" offset="0"></stop>
                <stop id="SvgjsStop1757" stopColor="#faf0a1" offset="1"></stop>
              </linearGradient>
              <linearGradient id="SvgjsLinearGradient1758">
                <stop id="SvgjsStop1759" stopColor="#b98947" offset="0"></stop>
                <stop id="SvgjsStop1760" stopColor="#faf0a1" offset="1"></stop>
              </linearGradient>
            </defs>
            <g
              id="SvgjsG1751"
              featurekey="symbolFeature-0"
              transform="matrix(1.023391812865497,0,0,1.023391812865497,-5.116959064327485,-5.270467933855559)"
              fill="url(#SvgjsLinearGradient1755)"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M50,8.75c22.827,0,41.4,18.573,41.4,41.4c0,22.829-18.573,41.4-41.4,41.4S8.6,72.979,8.6,50.15  C8.6,27.323,27.173,8.75,50,8.75 M50,5.15c-24.852,0-45,20.148-45,45c0,24.854,20.148,45,45,45s45-20.146,45-45  C95,25.298,74.852,5.15,50,5.15"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M44.907,45.062L33.452,61.604l-11.454,16.55l33.093-22.913L78,22.148L44.907,45.062z M36.414,63.654l11.083-16.006  l5.006,5.008L36.229,63.921L36.414,63.654z"
              ></path>
            </g>
            <g
              id="SvgjsG1752"
              featurekey="nameFeature-0"
              transform="matrix(1.6439506736369836,0,0,1.6439506736369836,109.75271847591978,3.6704257970077485)"
              fill="url(#SvgjsLinearGradient1758)"
            >
              <path d="M1.3672 12.050999999999998 l0 4.2383 l5.918 0 l0 23.711 l4.2578 0 l0 -23.711 l5.918 0 l0 -4.2383 l-16.094 0 z M33.16421875 12.050999999999998 l-17.676 27.949 l5.0195 0 l4.1211 -6.5234 l9.4922 0 l0 6.5234 l4.2578 0 l0 -27.949 l-5.2148 0 z M34.12121875 18.477 l0 10.762 l-6.8164 0 z M50.58598125 40.25391 c-1.849 -0.078125 -3.5547 -0.57291 -5.1172 -1.4844 c-1.7708 -1.0287 -2.9752 -2.4088 -3.6133 -4.1406 l3.9844 -1.4648 c0.32553 0.85938 0.99609 1.556 2.0117 2.0898 c0.89844 0.45572 1.875 0.70963 2.9297 0.76172 c1.6276 0.065098 2.9752 -0.33203 4.043 -1.1914 c0.89844 -0.72916 1.3737 -1.5625 1.4258 -2.5 c0.078125 -1.7838 -1.7904 -3.2096 -5.6055 -4.2773 c-5.9766 -1.6797 -8.8736 -4.5248 -8.6914 -8.5352 c0.11719 -2.8125 1.3216 -4.9154 3.6133 -6.3086 c1.7448 -1.0677 3.8412 -1.543 6.2891 -1.4258 c2.9688 0.13021 5.3516 1.1654 7.1484 3.1055 l-3.1055 2.8906 c-1.0156 -1.0938 -2.4283 -1.6797 -4.2383 -1.7578 c-1.276 -0.05209 -2.3633 0.11066 -3.2617 0.48826 c-1.4063 0.59896 -2.142 1.6667 -2.207 3.2031 c-0.078125 1.7578 1.7904 3.1705 5.6055 4.2383 c3.4375 0.96354 5.8725 2.3828 7.3047 4.2578 c0.98959 1.3021 1.4518 2.7408 1.3867 4.3164 c-0.10416 2.2135 -1.1068 4.0885 -3.0078 5.625 c-1.7708 1.4193 -3.8932 2.1289 -6.3672 2.1289 c-0.18229 0 -0.35807 -0.0065041 -0.52734 -0.019531 z M78.0664375 12.050999999999998 l-9.7656 12.129 l0 -12.129 l-4.2383 0 l0 27.949 l4.2383 0 l0 -9.043 l1.3086 -1.6211 l8.7695 10.664 l5.5078 0 l-11.563 -14.043 l11.172 -13.906 l-5.4297 0 z M91.5234125 23.984 l6.0742 0.000019073 c1.0547 0 1.9596 -0.3776 2.7148 -1.1328 c0.74219 -0.74219 1.1133 -1.6406 1.1133 -2.6953 c0 -1.0677 -0.37109 -1.9791 -1.1133 -2.7344 c-0.75521 -0.75521 -1.6602 -1.1328 -2.7148 -1.1328 l-6.0742 0 l0 7.6953 z M91.5234125 40.000019073 l-4.2383 -0.000019073 l0 -27.949 l10.313 0 c2.2266 0 4.1275 0.79428 5.7031 2.3828 c1.5885 1.5755 2.3828 3.483 2.3828 5.7227 c0 2.2266 -0.79428 4.1275 -2.3828 5.7031 c-1.5755 1.5755 -3.4766 2.3633 -5.7031 2.3633 l-6.0742 0 l0 11.777 z M113.1250125 23.984 l0 -7.6953 l6.0742 0 c1.0547 0 1.9596 0.3776 2.7148 1.1328 c0.74219 0.75521 1.1133 1.6667 1.1133 2.7344 c0 1.0547 -0.37109 1.9531 -1.1133 2.6953 c-0.75521 0.75521 -1.6602 1.1328 -2.7148 1.1328 l-6.0742 0 z M122.3628125 27.578 c1.4583 -0.625 2.6367 -1.6015 3.5352 -2.9297 c0.92447 -1.3542 1.3867 -2.8516 1.3867 -4.4922 c0 -2.2396 -0.79428 -4.1471 -2.3828 -5.7227 c-1.5755 -1.5885 -3.4766 -2.3828 -5.7031 -2.3828 l-10.313 0 l0 27.949 l4.2383 0 l0 -11.777 l4.7852 0 l6.1133 11.777 l4.7852 0 z M136.9140875 18.945 c-1.9531 1.9531 -2.9297 4.31 -2.9297 7.0703 s0.97656 5.1172 2.9297 7.0703 s4.31 2.9297 7.0703 2.9297 s5.1172 -0.97656 7.0703 -2.9297 s2.9297 -4.31 2.9297 -7.0703 s-0.97656 -5.1172 -2.9297 -7.0703 s-4.31 -2.9297 -7.0703 -2.9297 s-5.1172 0.97656 -7.0703 2.9297 z M133.9062875 36.0937 c-2.7865 -2.7865 -4.1797 -6.1459 -4.1797 -10.078 s1.3932 -7.2916 4.1797 -10.078 s6.1459 -4.1797 10.078 -4.1797 s7.2916 1.3932 10.078 4.1797 s4.1797 6.1459 4.1797 10.078 s-1.3932 7.2916 -4.1797 10.078 s-6.1459 4.1797 -10.078 4.1797 s-7.2916 -1.3932 -10.078 -4.1797 z"></path>
            </g>
          </svg>
        </div>
      </Link>
      {session?.user ? (
        <div className="flex md:order-2 space-x-3 items-center">
          <p>{session.user.email}</p>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                {session.user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex md:order-2 space-x-3 items-center">
          <div
            href="#"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium  focus:ring-4 "
          >
            Login
          </div>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-200 hover:from-yellow-200 hover:to-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-xl text-sm">
            Sing In
          </button>
        </div>
      )}
      <Navbar.Collapse>
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="#" className="text-white">
          Services
        </Link>
        <Link href="#" className="text-white">
          Pricing
        </Link>
        <Link href="/profile" className="text-white">
          Profile
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
