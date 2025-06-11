# CleanWEB

CleanWEB is a full-stack reporting platform that lets users report unsafe, inappropriate, or fraudulent websites. The app allows users to submit URLs along with optional images and categorization. Administrators can then review submitted reports through an internal dashboard.

---

## Features

- Report harmful content with a URL, description, and category
- Upload up to 3 image files as supporting evidence
- Categories include: Malware, Phishing, NSFW, Spam, Fraud, and Other
- Admin panel with report resolution controls
- Frontend built with **Next.js** and backend using **Django + MySQL**

---

## Folder Structure

```
CleanWEBSite/
├── backend/        # Django app (REST API, MySQL, Admin)
└── frontend/       # Next.js app (UI)
```

---

## Prerequisites

- Python 3.10+
- Node.js 18+
- MySQL (e.g. via XAMPP)

---

## Backend Setup (Django)

1. **Navigate to the backend directory:**

```bash
cd backend
```

2. **Create and activate a virtual environment:**

```bash
python -m venv venv
source venv/bin/activate
```

3. **Install dependencies:**

```bash
pip install -r requirements.txt
```

4. **Create MySQL database:**

   - Database name: `cleanweb_db`
   - User: `yourusername`
   - Password: `yourpassword`
   - Charset: `utf8mb4_unicode_ci`

5. **Configure database in **``**:**

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'cleanweb_db',
        'USER': 'yourusername',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

6. **Run migrations:**

```bash
python manage.py makemigrations
python manage.py migrate
```

7. **Create superuser (for admin access):**

```bash
python manage.py createsuperuser
```

8. **Run the backend server:**

```bash
python manage.py runserver
```

> The server will be available at: `http://localhost:8000`

---

## Frontend Setup (Next.js)

1. **Navigate to the frontend directory:**

```bash
cd ../frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the frontend server:**

```bash
npm run dev
```

> The frontend will run at: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| POST   | `/api/reports/`     | Submit new report          |
| GET    | `/api/reports/all/` | List all submitted reports |

---

## Admin Panel

Access Django admin at `http://localhost:8000/admin/` using your superuser credentials. You can view, resolve, and manage all submitted reports from the backend.

---

## Technologies Used

- **Frontend:** React (Next.js), Tailwind CSS, Lucide Icons
- **Backend:** Django, Django REST Framework, MySQL
- **Others:** Pillow for image uploads, CORS, Admin customization

---

## Deployment

You can host the backend separately (e.g., on PythonAnywhere or VPS) and deploy the frontend to Vercel or Netlify. Ensure you update the API URL in the frontend accordingly.

---

## Contact / Issues

If you find a bug or want to contribute, feel free to create an issue or pull request on GitHub.
