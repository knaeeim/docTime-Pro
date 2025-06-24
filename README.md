# 🩺 docTime‑Pro

**A sleek, modern doctor booking platform** — built with React 19 and Tailwind CSS 4, offering a smooth experience to browse doctors, view profiles, and manage appointments.

![Header](https://raw.githubusercontent.com/knaeeim/knaeeim/main/Md%20Khairul%20Bashar%20github%20banner.png)

---

## 🚀 Tech Stack

- ⚛️ React 19
- 🎨 Tailwind CSS 4
- 🔢 React CountUp
- 📊 Recharts
- 🌐 React Router 7
- 🌈 Styled Components
- 🔔 React Hot Toast
- 📦 Vite for build & dev server

---

## 📋 Features

- 🔍 **Search by doctor name** directly from the homepage
- 👨‍⚕️ Displays doctor profiles (initially 6)
- 📈 **Patient counter** section with animation (React CountUp)
- 📄 Individual **doctor detail pages** with:
  - Full profile info
  - Appointment booking option
- 📅 **Appointment status page** includes:
  - Fees displayed via Recharts graph
  - History of appointments
  - Option to **cancel appointments**
- 🚫 Graceful 404 page for invalid URLs

> 🛑 No authentication is required in this version.

---

## 🖼️ Pages Overview

| Page                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `/` (Home)            | Hero banner, search box, doctor list, and counter                          |
| `/doctor/:id`         | Dynamic doctor details with booking option                                 |
| `/appointments`       | Shows current appointment status and charts                                |
| `*` (invalid route)   | Custom 404 page with a smooth user message                                 |

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/knaeeim/docTime-Pro.git
cd docTime-Pro

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

