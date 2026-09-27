# Development

Notes for working on Scoutr locally.

## Requirements

- Node.js 22.x
- pnpm 10.x
- Docker (optional, for a local Postgres instance)

## Setup

```bash
pnpm install
```

## Running a local Postgres

Scoutr defaults to Postgres. The quickest way to get one running locally:

```bash
docker run --name postgres-scoutr -e POSTGRES_PASSWORD=postgres -d -p 127.0.0.1:5432:5432/tcp postgres:latest
```

Create the database:

```bash
PGPASSWORD=postgres docker exec -it postgres-scoutr /usr/bin/psql -h 127.0.0.1 -U postgres -c "CREATE DATABASE scoutr;"
```

Then point Scoutr at it via environment variables (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`).

To reset it:

```bash
PGPASSWORD=postgres docker exec -it postgres-scoutr /usr/bin/psql -h 127.0.0.1 -U postgres -c "DROP DATABASE IF EXISTS scoutr;"
PGPASSWORD=postgres docker exec -it postgres-scoutr /usr/bin/psql -h 127.0.0.1 -U postgres -c "CREATE DATABASE scoutr;"
```

To run against SQLite instead, set `DB_TYPE=sqlite`.

## Development server

```bash
pnpm dev
```

Runs at http://localhost:5055.

## Checks

```bash
pnpm lint         # eslint
pnpm build        # full production build (next + server)
pnpm test         # test suite
pnpm i18n:extract # regenerate en.json from source strings
```

If you change any user-facing string, run `pnpm i18n:extract` so the locale file stays in sync with the source.

## Database migrations

```bash
pnpm migration:generate server/migration/{postgres,sqlite}/MigrationName
pnpm migration:run
```

Migrations must be written for both Postgres and SQLite.
