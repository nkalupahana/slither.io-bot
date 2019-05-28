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

    /*document.onkeydown = function (e) {
        e = e || window.event;
        console.log(e);
        if (e.keyCode == 87) {
            let minCombinedDistance = Infinity;
            let snakeId = unsafeWindow.snake["id"];
            let closestFoe = null;
            for (let snake of unsafeWindow.snakes) {
                if (snakeId != snake["id"]) {
                    if (snake != null) {
                        let dist = Math.pow(Math.pow(snake.xx - unsafeWindow.snake.xx, 2) + Math.pow(snake.yy - unsafeWindow.snake.yy, 2), 0.5);
                        if (minCombinedDistance > dist) {
                            minCombinedDistance = dist;
                            closestFoe = snake;
                        }
                    }
                }
            }

            unsafeWindow.xm = -(closestFoe.xx - Math.round(unsafeWindow.snake.xx));
            unsafeWindow.ym = -(closestFoe.yy - Math.round(unsafeWindow.snake.yy));
        }
    };*/
})();