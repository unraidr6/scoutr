// Must stay import-free, entity decorators read this during datasource evaluation
// Scoutr defaults to Postgres. Set DB_TYPE=sqlite to opt back into SQLite.
// The test suite always runs on an in-memory SQLite datasource (see testConfig
// in datasource.ts), so it must never see the Postgres default here.
export const isPgsql =
  process.env.NODE_ENV === 'test'
    ? false
    : process.env.DB_TYPE
      ? process.env.DB_TYPE === 'postgres'
      : true;
