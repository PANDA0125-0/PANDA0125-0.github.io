
function ShowNumberWithAnimation(i, j, randNumber) {
    // 获取当前的数字格
    var numberCell = $("#number-cell-" + i + "-" + j);
    var numberText = $("#number-cell-" + i + "-" + j + " .number-text");

    // 设置当前数字格的背景图片
    numberCell.css("background-image", "url('images/" + randNumber + ".jpg')");
    numberCell.css("background-size", "cover"); // 确保图片覆盖整个格子
    numberCell.css("background-position", "center");
    numberCell.css("background-repeat", "no-repeat");

    // 设置文字颜色和内容
    numberText.css("color", getNumberColor(randNumber));
    numberText.css("line-height", "30px"); // 设置行高，使数字靠下显示
    numberText.css("font-size", "20px"); // 设置字体大小
    numberText.css("text-align", "center"); // 文字居中
    numberText.text(randNumber); // 显示数字值

    // 设置当前数字格的显示动画
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 50);
}



function showMoveAnimation(fromx, fromy, tox, toy){
    //获取到当前数字格的元素
    var numberCell = $("#number-cell-" + fromx + "-" + fromy);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200);
}

function updateScore(score) {
    $("#score").text(score);
}