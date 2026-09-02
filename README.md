# Django Practice Submission

Repository with a static hub and three Django projects required by the practice assignment.

## Domains

- `https://learning-logs.int.yt` - submission hub
- `https://log.learning-logs.int.yt` - Learning Log
- `https://tasks.learning-logs.int.yt` - Task Manager
- `https://blog.learning-logs.int.yt` - Blog

## Projects

- `learning_log/` - Learning Log with private topics and entries.
- `task_manager/` - task manager with owners, due dates, priorities, safe deletion, status toggle, and tests.
- `blog/` - public blog with author-only editing and tests.

Each Django project contains `README.md`, `requirements.txt`, `Dockerfile`, `compose.yaml`, `.env.example`, source files, and migrations.

## Hub Development

```bash
npm install
npm run dev
npm run build
```

## Django Checks

```bash
cd learning_log && python manage.py check && python manage.py test
cd ../task_manager && python manage.py check && python manage.py test
cd ../blog && python manage.py check && python manage.py test
```
