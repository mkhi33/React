module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cevfb2irrk0a2jpu58u0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_opnf'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'U5TPi2oeAaF9dW0Amz1qxWNxZdT6Bwvp'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
