import React, { useState, useEffect } from 'react';

const CoinFlip = (props) => {
    function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
    let streak = 0;
    let count = 0;

    const [totalFlips, setTotalFlips] = useState(null);

    useEffect(() => {
        const fiveHeads = new Promise((resolve, reject) => {
            while (streak < 5) {
                let flip = tossCoin();
                if (flip === "heads") {
                    streak++;
                } else {
                    streak = 0;
                }
                count++;
            }
            resolve(count);
        });

        fiveHeads
            .then(res => setTotalFlips(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {totalFlips !== null ? (
                <p>It took {totalFlips} times to get a streak of 5!</p>
            ) : (
                <p>Calculating...</p>
            )}
        </div>
    );
}

export default CoinFlip;
