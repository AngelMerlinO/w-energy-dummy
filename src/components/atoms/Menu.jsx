import React, { useState, useContext, useRef, useEffect } from "react";
import Icon from "../../assets/img/mas.png";
import UserContext from "../../contexts/UserContext";

function Menu() {
    const { User, setUser } = useContext(UserContext);
    const dropdownMenuRef = useRef(null);

    const handlerMenu = (e) => {
        e.preventDefault();
        setUser((prevUser) => ({ ...prevUser, isDropdownVisibleMenu: !prevUser.isDropdownVisibleMenu }));
    };

    const handleClickOutsideMenu = (event) => {
        if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
            if (!event.target.closest("#dropdownMenu-button")) {
                setUser((prevUser) => ({ ...prevUser, isDropdownVisibleMenu: false }));
            }
        }
    };

    useEffect(() => {
        if (User.isDropdownVisibleMenu) {
            document.addEventListener("mousedown", handleClickOutsideMenu);
        } else {
            document.removeEventListener("mousedown", handleClickOutsideMenu);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMenu);
        };
    }, [User.isDropdownVisibleMenu]);

    return (
        <>
            <div className="flex justify-around w-[10%]  lg:w-[5%] z-10">

                <button onClick={handlerMenu} id="dropdownMenu-button" className=" hover:bg-gray-400 rounded-full flex items-center ">
                    <span className="material-symbols-outlined text-[--white]">
                        more_horiz
                    </span>
                </button>
                {User.leftColumn === true &&
                //  User.rightColumn ===true 
                  (

                    <button className="hover:bg-gray-400 rounded-full flex items-center" onClick={() => {
                        const updatedUser = User.leftColumn && !User.rightColumn
                            ? { ...User, leftColumn: false, rightColumn: true }
                            : { ...User, leftColumn: !User.leftColumn };

                        setUser(updatedUser);
                    }}>
                        <span className="material-symbols-outlined text-[--white]">arrow_back</span>
                    </button>

                )}
                {User.leftColumn === false && (
                    <button className=" hover:bg-gray-400 rounded-full flex items-center "
                        onClick={() => setUser(prevState => ({
                            ...prevState, leftColumn: true,
                        }))}>
                        <span className="material-symbols-outlined text-[--white]">restart_alt</span>
                    </button>

                )}
            </div>

            <div
                ref={dropdownMenuRef}
                id="dropdown"
                className={`sm:mt-9 md:mt-0 lg:mt-0 w-48 fixed text-red-900 bg-red border border-gray-200 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white Neumorphism ${User.isDropdownVisibleMenu ? "block" : "hidden"}`}
                style={{ top: "4%", zIndex: "2" }}
            >

                <button onClick={(e) => {
                    handlerMenu(e);
                    handlerMenu(e);
                    if (User.leftColumn && User.rightColumn) {
                        console.log("Both columns are true, changing leftColumn to false.");
                        setUser((prevUser) => ({ ...prevUser, leftColumn: false }));
                    } else if (!User.leftColumn && User.rightColumn) {
                        console.log("Changing leftColumn to true and rightColumn to false.");
                        setUser((prevUser) => ({ ...prevUser, leftColumn: true, rightColumn: false }));
                    } else if (User.leftColumn && !User.rightColumn) {
                        console.log("Both columns are true, ensuring at least one is true.");
                        setUser((prevUser) => ({ ...prevUser, rightColumn: true, leftColumn: false }));
                    }

                }}
                    type="button" className="relative sticky inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                    <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    Profile
                </button>

                <button onClick={(e) => {
                    handlerMenu(e);
                    if (User.leftColumn === false && User.rightColumn === true) {
                        console.log("Left column is false and right column is true. Setting left column to true.");
                        setUser((prevUser) => ({ ...prevUser, leftColumn: true }));
                    } else if (User.leftColumn === true && User.rightColumn === false) {
                        console.log("Left column is true and right column is false. Setting right column to true.");
                        setUser((prevUser) => ({ ...prevUser, rightColumn: true }));
                    } else if (User.leftColumn === true && User.rightColumn === true) {
                        console.log("Both columns are true. Setting right column to false.");
                        setUser((prevUser) => ({ ...prevUser, rightColumn: false }));
                    }

                }}
                    type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                    <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                    </svg>
                    Edit
                </button>
            </div>
        </>
    );
}

export default Menu;
