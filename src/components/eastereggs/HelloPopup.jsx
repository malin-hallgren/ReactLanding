import { useState, useEffect } from 'react';
import './HelloPopup.css';


export default function HelloPopup() {
    const secret = ['h', 'e', 'l', 'l', 'o'];
    const [input, setInput] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
                return;
            }

            setInput((prev) => {
                const next = [...prev, event.key.toLowerCase()].slice(-secret.length);

                if (next.join('') === secret.join('')) {
                    setShowPopup(true);
                    return [];
                }

                return next;
            });
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);



    return (
        <>
            <div id="hello-popup" className={showPopup ? 'show' : ''}>
                <div className="hello-content">
                    <p>Hello World!<br /><br />C:\Your\File\Path\Here\ConsoleApp1\bin\Debug\net8.0\ConsoleApp1.exe
                        (process 12488) exited with code 0 (0x0).<br />To automatically close the console when
                        debugging stops, enable Tools-&gt;Options-&gt;Debugging-&gt;Automatically close the console when
                        debugging stops.<br />Press the "x" in the top right corner to close this window...
                    </p>
                    <button id="close-hello" onClick={closeHello}>&times;</button>
                </div>
            </div>
        </>
    );


    function closeHello() {
        setShowPopup(false);
    }

}

