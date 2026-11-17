// ฟังก์ชันแสดงข้อความเมื่อกดปุ่ม
function showMessage() {

    // ค้นหาตำแหน่งข้อความใน HTML
    const message = document.getElementById("message");

    // กำหนดข้อความที่ต้องการแสดง
    message.textContent =
        "สวัสดีค่ะ! ขอบคุณที่เข้ามาเยี่ยมชมเว็บไซต์ของฉัน 😊";

}
