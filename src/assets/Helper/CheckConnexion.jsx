import React, { useState, useEffect } from "react";
import './CheckConnexion.css';
import { ConnexionIcon, ResetConnexion } from "../../components/Icons/ConnexionEcon";
import Loading from "../../components/Loading/Loading";

function ConnectionCheck({ children, small }) {
    const [hasConnection, setHasConnection] = useState(navigator.onLine);
    const [loading, setLoading] = useState(false);
    // const FreeWifi = true

    // useEffect(() => {
    //     const handleOnline = () => {
    //         setHasConnection(true);
    //     };

    //     const handleOffline = () => {
    //         setHasConnection(false);
    //     };


    //     return () => {
    //         window.removeEventListener("offline", handleOffline);
    //     };
    // }, []);

    const handleCheckAgain = () => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
            setHasConnection(navigator.onLine);
        }, 800);
    };

    // if(FreeWifi) return <>{children}</>
    if (!hasConnection) {
        return (
            loading ? <Loading /> :
            <div style={small ? { maxWidth: '350px', margin: '0 auto', textAlign: 'center' } : null} className="Connexion">
                <div className="connexion__icon center">
                    <ConnexionIcon />
                </div>
                <span>Looks like you lost your connection. Please check it and try again.</span>
                <button onClick={handleCheckAgain}>
                    <ResetConnexion /> Retry
                </button>
            </div>
        );
    }

    return loading ? <Loading /> : <>{children}</>;
}

export default ConnectionCheck;
