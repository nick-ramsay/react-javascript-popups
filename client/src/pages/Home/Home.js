import React, { useState, useEffect } from 'react';
import "./style.css";



const Home = () => {

    let [yourName, setYourName] = useState("");

    const renderName = (name) => {
        let currentName = localStorage.getItem("your_name");
        setYourName(yourName => currentName);

    }

    const initialNameCheck = () => {
        let currentName = localStorage.getItem("your_name");
        if (currentName === null || currentName === "" || currentName === "null") {
            localStorage.setItem("your_name", prompt("Please enter your preferred name"));
            renderName(currentName);
        } else {
            renderName(currentName);
        }

    }

    const deleteName = () => {
        localStorage.removeItem("your_name");
        renderName(localStorage.getItem("your_name"));
        alert("Your name has been deleted 👍");
    };

    const updateName = () => {
        let currentName = localStorage.getItem("your_name");
        let proceed = window.confirm("Are you sure you would like to change your name?");
        if (proceed) {
            let revisedName = window.prompt("Edit your name below", currentName);
            if (revisedName !== null) { localStorage.setItem("your_name", revisedName) };
            renderName(localStorage.getItem("your_name"));
        }
    };

    useEffect(() => {
        initialNameCheck();
    }, [])

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>React JavaScript Popups</h1>
                </header>
                <div className="mt-4">
                    <p>{yourName === "" || yourName === null || yourName === undefined ? "😞 Looks like you haven't entered a name 😞" : "😃 Welcome, " + yourName + "!😃"}</p>
                    {yourName === "" || yourName === null || yourName === undefined ?
                        <button type="button" id="enter-name-btn" className="m-1 btn btn-sm btn-success" onClick={initialNameCheck}>Enter Your Name</button> :
                        <div>
                            <button type="button" id="update-name-btn" className="m-1 btn btn-sm btn-success" onClick={updateName}>Update Your Name</button>
                            <button type="button" id="delete-name-btn" className="m-1 btn btn-sm btn-danger" onClick={deleteName}>Delete Your Name</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;