// ==UserScript==
// @name         Anti-Social Bot
// @namespace    http://slither.io
// @version      0.1
// @description  try to take over the world!
// @author       Nisala & Micah
// @match        http://slither.io/
// ==/UserScript==

(function() {
    let lastFood = null;
    let counter = 0;
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

                if (lastFood != null && lastFood.xx == closestFood.xx) {
                    if (counter > 12) {
                        console.log("CIRCLE");
                        closestFood.xx += 20;
                        closestFood.yy += 20;
                        counter = 0;
                        lastFood = null;
                    } else {
                        counter++;
                    }
                } else {
                    lastFood = closestFood;
                    counter = 0;
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
                    for (let point of snake.pts) {
                        if (snake != null) {
                            let dist = Math.pow(Math.pow(point.xx - unsafeWindow.snake.xx, 2) + Math.pow(point.yy - unsafeWindow.snake.yy, 2), 0.5);
                            if (minCombinedDistance > dist) {
                                minCombinedDistance = dist;
                                closestFoe = point;
                            }
                        }
                    }
                }
            }

            unsafeWindow.xm = -(closestFoe.xx - Math.round(unsafeWindow.snake.xx));
            unsafeWindow.ym = -(closestFoe.yy - Math.round(unsafeWindow.snake.yy));
        }
    };*/
})();