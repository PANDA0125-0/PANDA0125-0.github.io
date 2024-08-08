//定义一个javascript数组
var board=new Array();
var hasConflicted = new Array();
var score = 0;

$(function(){
	newgame();
});

function newgame(){
	
	//初始化棋盘
	init();
	//把score重置为0
	updateScore(0);
	//在随机 两个格子生成数字
	generateOneNumber();
	generateOneNumber();
}

function restartgame() {
    $("#gameover").remove();
    $(".gameover").remove();
    updateScore(0);
    newgame();
}

function init(){
	for(var i=0;i<4;i++){
		//定义了一个二维数组
		board[i]=new Array();
		for(var j=0;j<4;j++){
			//初始化小格子的值为0
			board[i][j]=0;
			//通过双重遍历获取每个格子元素
			var gridCell =$("#grid-cell-"+i+"-"+j);
			//通过getPosTop()方法设置每个格子距顶端的距离
			gridCell.css("top",getPosTop(i,j));
			//通过getPosLeft()方法设置每个格子距左端的距离
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	
	for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        hasConflicted[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicted[i][j] = false;
        }
    }
	
	updateBoardView();
	 score = 0;
}


function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'><div class='number-text'></div></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);
            var numberText = $("#number-cell-" + i + "-" + j + " .number-text");

            // 如果棋盘格的值为0，设置数字格为高宽都为0
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 50);
                numberCell.css("left", getPosLeft(i, j) + 50);
            }
            // 如果棋盘格的值不为0，设置数字格为高宽为100并设置图片背景及数字值
            else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px"); // 设置为和格子一样的大小
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                // 设置背景图片
                numberCell.css("background-image", "url('images/" + board[i][j] + ".jpg')");
                numberCell.css("background-size", "cover"); // 让图片完全覆盖格子
                numberCell.css("background-repeat", "no-repeat");
                numberCell.css("background-position", "center");

                // 设置文字颜色和内容
                numberText.css("color", getNumberColor(board[i][j]));
                numberText.css("line-height", "30px"); // 设置行高
                numberText.css("font-size", "20px"); // 设置字体大小
                numberText.css("text-align", "center"); // 文字居中
                numberText.text(board[i][j]); // 在图片下方显示数字值
            }
            hasConflicted[i][j] = false;
        }
    }
}


function generateOneNumber(){
    if (nospace(board)) {
        return false;
    }
    // 生成一个随机位置
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));

    // 定义一个循环，找到一个空的格子
    while (true) {
        if (board[randx][randy] == 0) {
            break;
        }
        randx = parseInt(Math.floor(Math.random() * 4));
        randy = parseInt(Math.floor(Math.random() * 4));
    }

    // 生成一个随机数字
    var randNumber = Math.random() < 0.5 ? 2 : 4;

    // 在随机的位置上显示出随机的数字
    board[randx][randy] = randNumber;

    // 显示随机数字对应的图片
    ShowNumberWithAnimation(randx, randy, randNumber);

    return true;
}

