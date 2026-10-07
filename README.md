# JSW KOL Staff Portal

เว็บไซต์ Login และสมัครสมาชิก Staff พัฒนาด้วย React, TypeScript และ Vite รองรับภาษาไทย/อังกฤษ และหน้าจอ Desktop/Mobile

## ติดตั้งและรัน

ต้องติดตั้ง Node.js เวอร์ชัน 24 ขึ้นไป พร้อม npm

```sh
git clone https://github.com/NareeratW/Test_Swiftdynamics.git
cd Test_Swiftdynamics
npm ci
npm run dev
```

เปิดเว็บไซต์ที่ http://127.0.0.1:5173

- `/login` — เข้าสู่ระบบ
- `/register` — สมัครสมาชิก Staff
- `/forgot-password` — ลืมรหัสผ่าน

## ทดสอบและ Build

```sh
npm test
npm run build
npm run preview
```

เปิดลิงก์ที่แสดงใน Terminal เพื่อดูผล Build

**หมายเหตุ:** เป็น Frontend ตัวอย่าง ยังไม่ได้เชื่อม Backend จึงไม่สร้างบัญชี เข้าสู่ระบบ หรือส่งอีเมลจริง ข้อมูลฟอร์มไม่ถูกบันทึกหรือส่งออก

## แหล่งที่มาของ Asset

ภาพและ favicon เป็นไฟล์ที่ผู้ใช้ให้มา ใช้ Google Fonts และ Lucide สำหรับฟอนต์และไอคอน ฐานข้อมูลที่อยู่ไทยจาก [earthchie/jquery.Thailand.js](https://github.com/earthchie/jquery.Thailand.js) (WTFPL) โดยเก็บข้อมูลไว้ในโปรเจกต์
