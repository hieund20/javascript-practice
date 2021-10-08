// <1> Finding the largest digit of n (0 <= n < 1000 )
// Ex: 
// getMaxDigit(1) --> 1
// getMaxDigit(934) --> 9 

//Ý tưởng:
//1. Tách từng chữ số trong số từ cuối lên đầu và gán cho biến temp 
//  sử dụng đệ quy
//2. So sánh biến temp với biến maxDigit được gán bằng 0 ban đầu
// - Nếu maxDigit < temp thì temp sẽ được gán cho maxDigit

var input1Element = document.getElementById("input1");
var button1Element = document.getElementById("button1"); 
var maxDigit = 0;
var number1 = 0;

input1Element.onchange = function (e) {
    number1 = e.target.value;
    //reset value of maxDigit when input change
    maxDigit = 0;
    maxDigit = getMaxDigit(number1);
}

function getMaxDigit(pram) {
    var copiedNumber = pram;

    var temp = copiedNumber % 10;
    copiedNumber = Math.floor(copiedNumber / 10);

    if(maxDigit < temp)
        maxDigit = temp;

    if(copiedNumber === 0)
        return maxDigit;

    return getMaxDigit(copiedNumber);
}

button1Element.onclick = function () {
    document.getElementById("result1").textContent = maxDigit;
}

// <2> Checking symmetric number ( 0 <= n <= 999)
// Ex :
// isSymmetricNumber(1) --> true
// isSymmetricNumber(33) --> true
// isSymmetricNumber(393) --> true
// isSymmetricNumber(332) --> false

//**NOTE : Not use loop for <1> and <2>

//Ý tưởng:
//1. Tìm số đảo của số nhập vào
// - Tách từng chữ số trong dãy số từ cuối lên đầu sử dụng đệ quy
// - Cộng chữ số vừa tách vào chuỗi reverseNumber, ta được dãy số đảo ngược
//2. So sánh với số ban đầu
// - Thực hiện so sánh giá trị của biến number2 (được nhập vào ban đầu)
//   với biến reverseNumber bằng toán tử == (không so sánh kiểu dữ liệu)
// - Nếu hai giá trị bằng nhau thì là số đối xứng và ngược lại

var input2Element = document.getElementById("input2");
var button2Element = document.getElementById("button2"); 

var number2 = 0;
var reverseNumber = '';
var result2;


input2Element.onchange = function (e) {
    number2 = e.target.value;
    //reset value of reverseNumber when input change
    reverseNumber = '';
    if(isSymmetricNumber(number2) === true)
        result2 = true;
    else
        result2 = false;      
}

function isSymmetricNumber(pram) {
    var copiedNumber = pram;
    
    var temp = copiedNumber % 10;
    reverseNumber += temp;

    copiedNumber = Math.floor(copiedNumber / 10);

    if(copiedNumber === 0){
        console.log(number2);
        console.log(reverseNumber);
        if(reverseNumber == number2){
            return true;
        }
        else{
            return false; 
        }
    }

    return isSymmetricNumber(copiedNumber);
}

button2Element.onclick = function () {
    if (result2 === true)
        document.getElementById("result2").textContent = 'SymmetricNumber';
    else
        document.getElementById("result2").textContent = 'Not a SymmetricNumber';
}

// <3> Convert seconds to string with format as per hh:mm:ss
// (0 <= seconds <= 86400)
// Ex:
// formatTime(0) --> '00:00:00'
// formatTime(9) --> '00:00:09'
// formatTime(4256) --> '01:10:56'

//Ý tưởng:
//  - number3 là số giây được nhập từ bàn phím 
//  1. Tìm số giờ
//  - Vì 1h = 3600s nên biến hours = number3 / 3600
//  - Lấy phần dư của phép chia trên sẽ là phút và giây
//  2. Tìm số phút
//  - Vì 1ph = 60s nến biến minutes = phần dư / 60
//  - Phần dư của phép chia này sẽ là số giây

var input3Element = document.getElementById("input3");
var button3Element = document.getElementById("button3"); 

var number3 = 0;
var result3;

input3Element.onchange = function (e) {
    number3 = e.target.value;
    result3 = formatTime(number3);
}

function formatTime(pram) {
    var copiedNumber = pram;
    var hours = 0;
    var minutes = 0;
    var second = 0;

    hours = Math.floor(copiedNumber / 3600);
    copiedNumber = copiedNumber % 3600;
    minutes = Math.floor(copiedNumber / 60);
    copiedNumber = copiedNumber % 60;
    second = copiedNumber;

    //Template String (ES6)
    return `${hours}:${minutes}:${second}`;
}

console.log(formatTime(number3));

button3Element.onclick = function () {
    document.getElementById("result3").textContent = result3;
}

//<4> Finding secret
// Ex:
// findSecret('FSDFDSFS') --> ''
// findSecret('secretQREWTRcoRTde') -->'secret code'

//Ý tưởng:
//  1. Viết phương thức isUpperCase(pram) để kiểm tra
//  đối số truyền vào có phải ký tự hoa không
//  2. Thực hiện duyệt qua các ký tự trong chuỗi được nhập vào
//  từ bàn phím
//      - Gọi isUpperCase(ký tự tại vị trí index)
//      - Nếu isUpperCase trả về false(không phải ký tự hoa) thì
//        cộng vào chuỗi encryptionFinalCode

var input4Element = document.getElementById("input4");
var button4Element = document.getElementById("button4"); 

var encryptionCode = '';
var encryptionFinalCode = '';

input4Element.onchange = function (e) {
    encryptionCode = e.target.value;
    //reset value of  encryptionFinalCode when input change
    encryptionFinalCode = '';
    findSecret(encryptionCode);
}

function isUpperCase(pram){
    return pram == pram.toUpperCase() && pram != pram.toLowerCase();
}

function findSecret(pram){
    var copiedString = pram;
    
    for(var i = 0; i < copiedString.length; i++){
        if(!isUpperCase(copiedString[i])) //not a upperCase letter
            encryptionFinalCode += copiedString[i];
    }
}   

button4Element.onclick = function () {
    document.getElementById("result4").textContent = encryptionFinalCode;
}

// <5> Input firstName and lastName return fullName with format :
// - firstName and lastName are optional
// - fullName with no spaces at the start or end
// - firstName and lastName must be capitalized at the first letter
// Ex:
// getFullName('Alice') --> 'Alice'
// getFullName('Alice', '') --> 'Alice'
// getFullName('Bod', 'Le') --> 'Bod Le'
// getFullName('john', 'pHAm') --> 'John Pham'

//Ý tưởng:
//  1. Viết phương thức stringHandling(pram) để xử lý chuỗi
//  được truyền vào:
//      - Thực hiện chuyển toàn bộ ký tự về kiểu in thường
//      - Tách các cụm từ trong chuỗi thành các phần tử trong mảng
//        để xử lý trường hợp tên được nhập vào có gồm tên đệm
//      - Thực hiện duyệt từng phần tử trong mảng, kiểm tra nếu
//        ký tự đầu của phần tử là in thường thì in hoa ký tự này lên bằng
//        toUpperCase() và cộng phần còn lại của chuỗi với chuỗi còn lại đã được tách 
//        bằng slice(1)
//      - Cuối cùng, join(' ') các phần tử trong mảng lại với nhau, cách nhau bằng
//        một khoảng trắng và gọi trim() để loại bỏ khoảng trắng ở đầu và cuối
//  2. Trong phương thức getFullName()
//      - Gọi stringHandling(pram), truyền vào hai giá trị firstName và lastName
//        được nhập vào bàn phím để xử lý
//      - Sau khi xử lý xong hai chuỗi trên thì chuỗi fullName = firstName + lastName

var inputFnElement = document.getElementById("firstName");
var inputLnElement = document.getElementById("lastName");

var button5Element = document.getElementById("button5");

var firstName = '';
var lastName = '';
var fullName = '';

inputFnElement.onchange = function (e) {
    firstName = e.target.value;
    console.log(firstName);
    //reset value of full name when input change
    fullName = '';
    getFullName(firstName, lastName);
}

inputLnElement.onchange = function (e) {
    lastName = e.target.value;
    //reset value of full name when input change
    fullName = '';
    getFullName(firstName, lastName);
}

function stringHandling(pram){
    //Convert to lower case all letter of string
    var copiedName = pram.toLowerCase();
    //Split name (case: name include middle name)
    copiedName = copiedName.split(' ');
    //The result will be array

    for (var i = 0; i < copiedName.length; i++) {
        //Capitalize the first letter
        if (!isUpperCase(copiedName[i].charAt(0))) {
            copiedName[i] = copiedName[i].charAt(0).toUpperCase() +
            copiedName[i].slice(1);
        }
    }
    //Join elements in array to string and remove space at start or end
    return copiedName.join(' ').trim();
}

function getFullName(){
    var copiedFirstName;
    var copiedLastName;

    //parameter include both first name and last name
    copiedFirstName = stringHandling(arguments[0]);
    copiedLastName = stringHandling(arguments[1]);
    console.log('hello');

    fullName = `${copiedFirstName} ${copiedLastName}`;
}

console.log(getFullName(firstName, lastName));

button5Element.onclick = function () {
    document.getElementById("result5").textContent = fullName;
}