const container = document.querySelector(".container")
const rows = 3 //แสดงผลรูปภาพ 3 แถว
const cols = 3 //3คอลัม แล้วนำเอาไปกำหนดให้ i
//function สุ่ม
function randomNumber(){
    //Math.random จะทำการสุ่มแบบมีตัวเลขทศนิยม ดังนั้นต้องแปลงทศนิยม ->Math.floor
    return Math.floor(Math.random()*500) //จากการสุ่ม Math.random มันสุ่มเลขในทศนิยม 0.1-0.9 เราต้องการสุ่ม 0-499 (*500)
}
for(let i = 0; i < rows*cols; i++){ //ใช้ for loop ในการเรียกใช้ เพื่อเช็คว่าตัวเลขที่สุ่มนั้นอยู่ในช่วงที่เราต้องการรึป่าว
    //link
    const url = `https://source.unsplash.com/random/${randomNumber()}` //นำตัวเลขที่สุ่มได้มาเป็นไอดีของรูปภาพที่เราจะเอามาจาก API
    //พื้นที่แสดงภาพ
    const imageEl = document.createElement("img")
    imageEl.src = url //เก็บค่า url ใน imageEl
    container.appendChild(imageEl) //เอารูปไปเก็บที่ container
}

