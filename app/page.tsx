import {
  ArrowUpRight,
  BookOpenText,
  CheckCircle2,
  ClipboardList,
  GitBranch,
  Globe2,
  Newspaper,
  Server,
} from 'lucide-react';

const projects = [
  {
    title: 'Learning Log',
    description:
      'Журнал изучаемых тем с регистрацией, личными темами и записями.',
    domain: 'log.trans-platform.com',
    repo: 'github.com/BeesKnight/learning_logs',
    repoUrl: 'https://github.com/BeesKnight/learning_logs',
    status: 'Развёрнуто',
    icon: BookOpenText,
    accent: 'text-teal-700',
  },
  {
    title: 'Task Manager',
    description:
      'Система задач с дедлайнами, приоритетами, владельцами и тестами доступа.',
    domain: 'tasks.trans-platform.com',
    repo: 'github.com/BeesKnight/task_manager',
    repoUrl: 'https://github.com/BeesKnight/task_manager',
    status: 'Развёрнуто',
    icon: ClipboardList,
    accent: 'text-indigo-700',
  },
  {
    title: 'Blog',
    description:
      'Публичный блог, где авторизованные пользователи управляют своими публикациями.',
    domain: 'blog.trans-platform.com',
    repo: 'github.com/BeesKnight/blog',
    repoUrl: 'https://github.com/BeesKnight/blog',
    status: 'Развёрнуто',
    icon: Newspaper,
    accent: 'text-rose-700',
  },
];

const checks = [
  'Публичные репозитории GitHub',
  'HTTPS-домены для каждого проекта',
  'Docker Compose запуск',
  'README, зависимости и миграции',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--muted))_52%,hsl(174_45%_91%)_100%)]">
        <div className="mx-auto flex min-h-[44vh] w-full max-w-6xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4">
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold"
              href="/"
              aria-label="Learning Logs hub"
            >
              <span className="grid size-9 place-items-center rounded-md bg-foreground text-background">
                <Server className="size-4" aria-hidden="true" />
              </span>
              hub.trans-platform.com
            </a>
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-medium shadow-sm transition hover:bg-accent"
              href="https://github.com/BeesKnight"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch className="size-4" aria-hidden="true" />
              GitHub
            </a>
          </nav>

          <div className="grid gap-8 pb-4 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-900">
                <Globe2 className="size-4" aria-hidden="true" />
                Хаб для сдачи Django-практики
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
                Три проекта в одном месте для быстрой проверки
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Корневой домен ведёт на эту страницу, а карточки ниже отправляют
                к развёрнутым приложениям и их репозиториям.
              </p>
            </div>

            <div className="grid gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
              {checks.map((check) => (
                <div key={check} className="flex items-center gap-3 text-sm">
                  <CheckCircle2
                    className="size-4 shrink-0 text-teal-700"
                    aria-hidden="true"
                  />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal">
              Проекты
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Ссылки будут обновлены на реальные GitHub-репозитории перед сдачей.
            </p>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            DNS: active
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="flex min-h-[320px] flex-col rounded-lg border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-md bg-muted">
                    <Icon className={`size-5 ${project.accent}`} aria-hidden="true" />
                  </span>
                  <span className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-normal">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    className="flex min-h-11 items-center justify-between rounded-md border border-border px-3 text-sm font-medium transition hover:bg-accent"
                    href={`https://${project.domain}`}
                  >
                    <span className="truncate">{project.domain}</span>
                    <ArrowUpRight className="ml-3 size-4 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    className="flex min-h-11 items-center justify-between rounded-md border border-border px-3 text-sm font-medium transition hover:bg-accent"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{project.repo}</span>
                    <GitBranch className="ml-3 size-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
