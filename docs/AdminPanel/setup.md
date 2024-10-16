---
sidebar_position: 11
---

# How to run Admin Panel?

## Prerequisites:

- Python 3.6+
- Node.js and npm (or yarn)

## Running the Frontend:

1. **Navigate to project directory:**

   - `cd path/to/your/project`

2. **Install dependencies:**

   - `npm install`

3. **Start the React development server:**

   - `npm run start`

Frontend should now be running at http://localhost:5173/

## Running the Backend(Local Machine):

1. **Navigate to project directory:**

   - `cd path/to/your/project`

2. **Create a virtual environment and activate it:**

   - `python3 -m venv venv`
   - `source venv/bin/activate`
   - On Windows use `venv\Scripts\activate`

3. **Install dependencies:**

   - `pip install -r requirements.txt`

4. **Run migrations:**

   - `python manage.py migrate`

5. **Create a superuser (accessing Django admin):**

   - `python manage.py createsuperuser`

6. **Create a .eVar\.env file in Django project root directory.Add the following environment variables to the .env file.**

   - SECRET_KEY=your-secret-key-here
   - DEBUG=True
   - ALLOWED_HOSTS=localhost,127.0.0.1
   - PROJECT_ID=firebase-project-id
   - FCM_BASE_URL=https://fcm.googleapis.com
   - GOOGLE_APPLICATION_CREDENTIALS=service-account.json

7. **Place the service-account.json file in the root directory Django project.**

8. **Run the Django development server:**

   - `python manage.py runserver`

Your Django backend should now be running at http://127.0.0.1:8000/.
