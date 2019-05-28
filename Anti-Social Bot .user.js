// ==UserScript==
// @name         Anti-Social Bot
// @namespace    http://slither.io
// @version      0.1
// @description  try to take over the world!
// @author       Nisala & Micah
// @match        http://slither.io/
// ==/UserScript==

(function() {
    document.onkeydown = function (e) {
        if (e.key === "w") {
            setInterval(() => {
                let minCombinedDistance = Infinity;
                let closestFood = null;
                for (let food of unsafeWindow.foods) {
                    if (food != null) {
                        let dist = Math.pow(Math.pow(food.xx - unsafeWindow.snake.xx, 2) + Math.pow(food.yy - unsafeWindow.snake.yy, 2), 0.5);
                        if (minCombinedDistance > dist) {
                            minCombinedDistance = dist;
                            closestFood = food;
                        }
                    }
                }

                unsafeWindow.xm = (closestFood.xx - Math.round(unsafeWindow.snake.xx));
                unsafeWindow.ym = (closestFood.yy - Math.round(unsafeWindow.snake.yy));
            }, 250);
        }
    };
})();