const listener = Deno.listen({ port: 3000 });

console.log('Server is running on http://localhost:3000/');

for await (const connection of listener) {
  const httpConnection = Deno.serveHttp(connection);

  for await (const requestEvent of httpConnection) {
    requestEvent.respondWith(new Response('Hello, World!'));
  }
}

// deno run --allow-net app.ts
