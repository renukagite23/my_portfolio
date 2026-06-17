export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedDate: string;
  readingTime: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;

}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-apis-power-everything-online",
    title: "How APIs Power Everything You Use Online",
    excerpt: "Discover the hidden backbone of the modern web: how Application Programming Interfaces connect systems, share data, and enable today's seamless digital experiences.",
    category: "Web Development",
    publishedDate: "June 12, 2026",
    readingTime: "5 min read",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-600",
    image: "/blog/API.png",

    content: `
### The Silent Fabric of the Web

Every time you book a ride, check the weather on your phone, or pay for an item online with a single click, you are interacting with APIs. **Application Programming Interfaces (APIs)** are the software intermediaries that allow two applications to talk to each other. Without them, the modern, interconnected internet simply wouldn't function.

### What Exactly is an API?

Imagine you are sitting at a table in a restaurant. The kitchen is the system that prepares your order. The crucial link missing is the messenger to deliver your order to the kitchen and bring the food back to your table. That's the waiter—or, in software terms, the API. 

The waiter takes your request (order), translates it to the kitchen (system), and returns the response (food) to you.

### How it Works in Practice

Let's break down a typical API request-response cycle:

1. **The Client Request**: Your browser or mobile app sends a request to a server (e.g., requesting the current weather in New York).
2. **The Endpoint**: The request lands on a specific URL designed to handle weather data.
3. **Authentication & Validation**: The API server checks if your app has the permission (an API key) to access this data.
4. **Data Retrieval**: The server fetches the latest weather information from a database.
5. **The Response**: The server sends a structured response (usually in JSON format) back to the client.

\`\`\`json
{
  "city": "New York",
  "temperature": "72°F",
  "condition": "Partly Cloudy",
  "humidity": "45%"
}
\`\`\`

### Types of APIs

- **REST (Representational State Transfer)**: The most common standard, using HTTP methods (GET, POST, PUT, DELETE) and light JSON format.
- **GraphQL**: A modern query language that lets clients request exactly the data they need, nothing more.
- **WebSockets**: Used for real-time, bi-directional communication, like chat apps or live sports scores.

### Why APIs Matter for Developers

APIs allow developers to build on top of existing technologies instead of starting from scratch. For example:
- Rather than building a global payment processor, you integrate **Stripe**.
- Rather than launching satellites to track location, you integrate **Google Maps**.
- Rather than building a messaging infrastructure, you integrate **Twilio**.

This abstraction allows developers to focus on the unique value proposition of their product, significantly reducing time-to-market and engineering overhead.
    `
  },
  {
    slug: "understanding-jwt-authentication-modern-applications",
    title: "Understanding JWT Authentication in Modern Applications",
    excerpt: "Learn how JSON Web Tokens work, why they are essential for stateless sessions, and how to implement them securely to protect your API endpoints.",
    category: "Security",
    publishedDate: "June 08, 2026",
    readingTime: "6 min read",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-600",
    image: "/blog/JWT 2.png",

    content: `
### Authentication in the Modern Era

As web applications moved from monolithic server-rendered structures to decoupled client-server models (like Single Page Applications communicating with REST APIs), traditional cookie-based session tracking became challenging to scale. Enter **JSON Web Tokens (JWT)**.

JWT provides a secure, compact, and stateless way to transmit information between parties as a JSON object.

### The Structure of a JWT

A JWT consists of three parts separated by dots (\`.\`):

1. **Header**: Typically contains the token type (JWT) and the signing algorithm (like HMAC SHA256 or RSA).
2. **Payload**: Contains the claims. Claims are statements about an entity (typically, the user) and additional data like expiration time.
3. **Signature**: Created by taking the encoded header, the encoded payload, a secret, and signing it using the specified algorithm.

A completed token looks like this:
\`\`\`text
xxxxx.yyyyy.zzzzz
\`\`\`

### How JWT Flow Works

1. **User Login**: The user sends their credentials (username and password) to the server.
2. **Token Generation**: The server verifies the credentials and creates a signed JWT.
3. **Token Response**: The server sends the JWT back to the client. No session is saved on the server database.
4. **Subsequent Requests**: For every request to protected routes, the client sends the JWT in the \`Authorization\` header:
   \`\`\`text
   Authorization: Bearer <token>
   \`\`\`
5. **Verification**: The server decodes the token and verifies the signature using its private secret. If valid, the request is processed.

### Key Benefits of JWT

- **Stateless/Sessionless**: The server doesn't need to keep a session store in memory or query a database to authenticate the user on every request, enabling effortless horizontal scaling.
- **Cross-Domain/CORS**: Because the token is sent in the header rather than using cookies, it is highly compatible with cross-domain API calls.
- **Compact Size**: JWTs are small enough to be sent via URL, POST parameter, or inside an HTTP header.

### Security Best Practices

While JWTs are extremely powerful, misconfigurations can lead to severe security vulnerabilities:
- **Never store sensitive data** (like passwords) in the payload, as it is only base64-encoded, not encrypted.
- **Always use HTTPS** to prevent token interception.
- **Keep expiration times short** to limit the window of opportunity for stolen tokens.
- **Implement refresh tokens** to seamlessly issue new access tokens without requiring the user to re-login.
    `
  },
  {
    slug: "building-scalable-backend-systems-nodejs",
    title: "Building Scalable Backend Systems with Node.js",
    excerpt: "Explore architectural patterns, asynchronous design, and caching strategies required to scale Node.js applications to support millions of concurrent users.",
    category: "Backend",
    publishedDate: "May 28, 2026",
    readingTime: "8 min read",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    image: "/blog/nodejs.png",

    content: `
### Node.js and High Concurrency

Node.js is renowned for its non-blocking, event-driven I/O model. It operates on a single thread, utilizing an event loop to delegate heavy operations to the operating system kernel or a thread pool. This design makes it incredibly efficient for I/O-intensive operations, but scaling it to support millions of requests requires deliberate architectural planning.

### Architectural Best Practices

#### 1. Horizontal Scaling with Clustering
Since Node.js runs on a single core, a single instance cannot leverage multi-core processors. You can use the native \`cluster\` module or process managers like **PM2** to spawn worker processes matching the number of CPU cores. PM2 will automatically load-balance incoming connections across these instances.

#### 2. Separation of Concerns
Avoid building a monolithic block. Transition to microservices or a clean modular architecture:
- **API Gateway**: Single entry point for routing, authentication, and rate limiting.
- **Worker Services**: Move CPU-heavy or background operations (like image processing, report generation) to dedicated microservices.

#### 3. Databases and Connection Pooling
Databases are often the primary bottleneck in backend applications. To avoid exhaustion:
- Implement connection pooling.
- Use read-replicas for read-heavy operations.
- Optimize database queries and build proper indexes.

### Leverage Caching with Redis

Database queries can be slow. Storing frequently accessed, slowly-changing data in memory using a cache like **Redis** speeds up response times significantly.

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

async function getUserProfile(userId) {
  // Try fetching from cache
  const cachedProfile = await client.get(\`user:\${userId}\`);
  if (cachedProfile) {
    return JSON.parse(cachedProfile);
  }

  // Fetch from database if not cached
  const profile = await db.fetchUserProfile(userId);
  
  // Save to cache with an expiration time (e.g. 1 hour)
  await client.set(\`user:\${userId}\`, JSON.stringify(profile), { EX: 3600 });
  
  return profile;
}
\`\`\`

### Asynchronous Message Queues

For tasks that do not need to block the client response (like sending a welcome email, processing a video, or updating analytics), offload them to a message broker like **BullMQ**, **RabbitMQ**, or **Apache Kafka**. This allows your API to respond instantly while workers process the queue asynchronously.
    `
  },
  {
    slug: "why-nextjs-is-my-preferred-react-framework",
    title: "Why Next.js Is My Preferred React Framework",
    excerpt: "An in-depth look at how Next.js enhances React by adding server-side rendering, routing, optimizations, and superb developer experience out of the box.",
    category: "Frontend",
    publishedDate: "May 15, 2026",
    readingTime: "5 min read",
    gradientFrom: "from-purple-500",
    gradientTo: "to-violet-600",
    image: "/blog/apis.png",

    content: `
### React is a Library, Next.js is the Engine

React revolutionized frontend development by introducing component-based UI construction. However, when building production-grade applications, developers quickly find themselves needing to solve routing, build configuration, search engine optimization (SEO), and data fetching strategies. 

**Next.js** solves these problems out of the box, combining React's flexibility with robust framework-level conventions.

### Key Advantages of Next.js

#### 1. Hybrid Rendering Modes
Next.js supports multiple rendering strategies per page:
- **Server-Side Rendering (SSR)**: Generates HTML on each request. Perfect for dynamic, personalized pages.
- **Static Site Generation (SSG)**: Pre-renders pages at build time. Ideal for marketing pages and blogs, providing blazing-fast load speeds.
- **Incremental Static Regeneration (ISR)**: Allows you to update static pages in the background without rebuilds.
- **Client-Side Rendering (CSR)**: Standard React rendering, useful for private user dashboards.

#### 2. The App Router (React Server Components)
Next.js introduced the App Router, leveraging React Server Components (RSC). RSCs render on the server by default, significantly reducing the JavaScript bundle size sent to the browser. This improves PageSpeed scores and enhances user experiences on slower devices.

#### 3. Automatic Optimizations
- **Image Optimization**: The \`<Image />\` component automatically resizes images, converts them to modern formats (like WebP/AVIF), and lazy loads them.
- **Font Optimization**: \`next/font\` self-hosts Google Fonts locally, preventing layout shifts (CLS) and optimizing load times.
- **Code Splitting**: Splitting code automatically, meaning users only load JavaScript required for the page they are viewing.

### Developer Experience (DX)

Next.js includes a zero-config setup for TypeScript, ESLint, Tailwind CSS, and absolute import paths. Fast Refresh ensures that changes to components are visible in the browser instantly without losing state.

For modern developers, Next.js makes building fast, SEO-friendly, and maintainable applications easier than ever.
    `
  },
  {
    slug: "mongodb-best-practices-modern-applications",
    title: "MongoDB Best Practices for Modern Applications",
    excerpt: "From schema design and referencing strategies to indexing and aggregation pipelines, here are the essential tips for high-performance MongoDB schemas.",
    category: "Database",
    publishedDate: "April 29, 2026",
    readingTime: "7 min read",
    gradientFrom: "from-teal-500",
    gradientTo: "to-emerald-600",
    image: "/blog/jwt.png",

    content: `
### Flexible yet Structured

MongoDB's document model is highly attractive due to its schema-less flexibility. However, "schema-less" does not mean "design-less." A poorly designed document model will lead to slow queries, high memory usage, and application-level bugs as your database grows.

Here are the essential best practices to keep in mind when designing and querying MongoDB.

### 1. Document Structure: Embed vs. Reference

The golden rule of MongoDB schema design is: **Data that is accessed together should be stored together.**

- **Embedding (Denormalization)**: Nesting documents is ideal for one-to-few or one-to-many relationships where the child data doesn't grow infinitely and is always queried with the parent (e.g., street addresses under a user profile).
- **Referencing (Normalization)**: Linking to another collection (using ObjectIds) is preferred for one-to-many relationships where the child data changes independently, grows rapidly, or is shared among multiple parents (e.g., comments on a blog post).

### 2. The Power of Indexing
Without indexes, MongoDB must perform a collection scan—scanning every document in the collection—to find matches.
- Always create indexes on fields that appear frequently in query filters (like \`email\`, \`status\`, or \`createdAt\`).
- Use **Compound Indexes** for queries that filter on multiple fields.
- Avoid over-indexing: each index consumes RAM and slows down write operations (inserts, updates, deletes).

\`\`\`javascript
// Creating an index on email field
db.users.createIndex({ email: 1 }, { unique: true });

// Creating a compound index for filtering by status and sorting by createdAt
db.orders.createIndex({ status: 1, createdAt: -1 });
\`\`\`

### 3. Use Projection to Limit Network Load
By default, queries return the entire document. If you only need a user's name and email, project those fields to reduce network bandwidth and CPU usage.

\`\`\`javascript
// Only return name and email, exclude _id
db.users.find({ status: "active" }, { name: 1, email: 1, _id: 0 });
\`\`\`

### 4. Optimize Aggregation Pipelines
When using aggregation, order your stages carefully:
- Always put \`$match\` and \`$sort\` stages at the very beginning of the pipeline. This allows MongoDB to utilize indexes and filter out unnecessary documents before executing memory-intensive operations like \`$group\` or \`$lookup\`.
    `
  },
  {
    slug: "optimizing-react-applications-performance",
    title: "Optimizing React Applications for Better Performance",
    excerpt: "Tackle slow load times, unnecessary re-renders, and bloated bundles. Learn practical profiling, caching, and state management optimization patterns.",
    category: "Frontend",
    publishedDate: "April 10, 2026",
    readingTime: "7 min read",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    image: "/blog/react.png",

    content: `
### Performance as a Feature

Users expect web applications to load instantly and respond smoothly to interactions. A sluggish UI leads to lower engagement, poor conversions, and frustrated users. In React, performance bottlenecks usually boil down to two core issues: **slow initial load times (large bundle size)** and **unnecessary/frequent component re-renders**.

### 1. Eliminating Redundant Re-renders

React components re-render whenever their state or props change. To optimize this behavior:

- **\`React.memo\`**: Wrap a functional component in \`React.memo\` to prevent it from re-rendering unless its props have changed.
- **\`useMemo\`**: Cache the result of expensive calculations between renders.
- **\`useCallback\`**: Cache callback functions between renders to prevent breaking prop reference checks on child components.

\`\`\`tsx
import React, { useState, useCallback, useMemo } from 'react';

const ExpensiveComponent = React.memo(({ onClick, data }) => {
  console.log("Rendered!");
  return <button onClick={onClick}>{data}</button>;
});

ExpensiveComponent.displayName = "ExpensiveComponent";

export function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Prevents function recreation on every render
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // Prevents recalculation unless text changes
  const computedData = useMemo(() => {
    return \`Calculated: \${text.toUpperCase()}\`;
  }, [text]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ExpensiveComponent onClick={handleClick} data={computedData} />
      <p>Count: {count}</p>
    </div>
  );
}
\`\`\`

### 2. Code Splitting and Lazy Loading
Don't make users download code they might never run. Use dynamic imports to load components only when they are needed.

\`\`\`tsx
import React, { Suspense, lazy } from 'react';

const ChartComponent = lazy(() => import('./ChartComponent'));

export function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>Load Chart</button>
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <ChartComponent />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

### 3. Windowing Long Lists
Rendering thousands of DOM nodes for lists can cause major scroll lag. Use libraries like **React Window** or **React Virtualized** to render only the visible items in the viewport, reusing elements as the user scrolls.
    `
  }
];
