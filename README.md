# ⚡ Himu Electronics - Service Sharing Platform (Client)

A comprehensive full-stack service sharing web application built for electronic item repairing services. Users can browse available services, post their own repair services, book services from other providers, track booking statuses in real-time, and manage service requests through a dedicated provider dashboard.

---

## 🚀 Live Links & Repositories

* **Live Frontend Website:** [service-provider-20102.web.app](https://service-provider-20102.web.app/)
* **Server Repository:** [service-provider-server-by-himu](https://github.com/HIMU005/service-provider-server-by-himu)

---

## ✨ Key Features

1. **🔒 Secure User Authentication & JWT Integration**
   * Support for Email/Password registration & Login.
   * One-click **Google Sign-In** integration.
   * Secure JWT token issuance stored in HTTP-only cookies.

2. **🛠️ Service Management (CRUD Operations)**
   * **Add Service:** Logged-in users can post new repair services with details (image, title, price, area, description).
   * **Manage Services:** Service providers can edit or delete their posted services.
   * **All Services View:** Searchable and categorized list of all available repair services.

3. **📅 Service Booking & Status Tracking**
   * Users can book services with custom dates and instructions.
   * Prevents self-booking (service providers cannot book their own posted services).
   * Real-time status tracking for booked services (**Pending** -> **Working** -> **Completed**).

4. **📋 Service To-Do (Provider Dashboard)**
   * Service providers can view orders placed by clients for their services.
   * Providers can update order status dynamically.
   * Prevents modifying order statuses once marked as **Completed**.

5. **🎨 Dynamic UI & Customization**
   * **Dark / Light Mode Toggle** powered by DaisyUI and Tailwind CSS.
   * Interactive **Hero Carousel** (Swiper slider) and typewriter animation banner.
   * Embedded feedback form for user reviews and site feedback.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 18 (Vite)
* **Routing:** React Router v6
* **Styling:** Tailwind CSS, DaisyUI
* **Authentication:** Firebase Auth & JWT
* **HTTP Client:** Axios
* **UI Utilities:** React Toastify, React Helmet Async, Swiper, React Simple Typewriter, React Datepicker

---

## 💻 Local Machine Setup Guide

Follow these steps to run the client application locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/HIMU005/service-provider-client-by-himu.git
cd client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variable Configuration
Create a file named `.env.local` in the root of the `client` directory and populate it with your Firebase configuration and local backend API URL:

```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id

VITE_API_URL=http://localhost:5000
```

### 4. Run Development Server
```bash
npm run dev
```

The application will be accessible locally at `http://localhost:5173`.

---

## 🔗 Backend API Endpoints Reference

The client communicates with the Express backend server (`http://localhost:5000`):

* `POST /jwt` - Issue JWT auth cookie
* `GET /services` - Fetch all posted services
* `GET /service/:id` - Fetch single service details
* `POST /services` - Create a new service
* `PATCH /service/:id` - Update an existing service
* `DELETE /service/:id` - Delete a service
* `GET /bookedService/:email` - Fetch services booked by user
* `GET /bookedService-provider/:email` - Fetch orders received by service provider
* `PATCH /bookedService-updateStatus/:id` - Update status of a booked service
* `POST /feedback` - Submit user feedback
