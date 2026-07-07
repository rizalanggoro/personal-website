import { ArrowLeft } from "@phosphor-icons/react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = useParams({ from: "/blogs/$slug" });
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock blog data - in production, this would be loaded from files
    const blogs: Record<string, any> = {
      "building-iot-systems-go-mqtt": {
        title: "Building IoT Systems with Go and MQTT",
        date: "2025-07-05",
        readTime: "8 min read",
        category: "Backend",
        content: `
# Building IoT Systems with Go and MQTT

When I started building the Smart Door Lock IoT system, I faced a critical challenge: how to ensure reliable, real-time communication between an Android app, cloud backend, and physical IoT devices while maintaining sub-second latency and robust error handling.

## Why MQTT?

After evaluating several protocols, MQTT stood out for IoT applications:

- **Lightweight**: Perfect for resource-constrained IoT devices
- **Publish-Subscribe Model**: Decouples device communication from business logic
- **Quality of Service (QoS)**: Guarantees message delivery with three levels
- **Last Will & Testament**: Notifies subscribers when devices disconnect

## Architecture Decision

The system uses a three-tier architecture:

\`\`\`
Android App ← → Go Backend ← → MQTT Broker ← → IoT Devices (NodeMCU)
\`\`\`

### Go Backend Layer

Written with Fiber web framework, the backend handles:

- User authentication and device management
- Command routing to MQTT topics
- Real-time event streaming via WebSockets
- Database operations with PostgreSQL

\`\`\`go
// Simplified example of MQTT command publishing
func SendUnlockCommand(ctx *fiber.Ctx) error {
  var req UnlockRequest
  ctx.BodyParser(&req)
  
  topic := fmt.Sprintf("devices/%s/unlock", req.DeviceID)
  token := mqttClient.Publish(topic, 1, false, req.Command)
  token.Wait()
  
  return ctx.JSON(fiber.Map{"status": "sent"})
}
\`\`\`

## Lessons Learned

### 1. **Connection Management**

IoT devices can disconnect unexpectedly. Implementing auto-reconnect with exponential backoff was crucial:

\`\`\`go
opts.SetAutoReconnect(true)
opts.SetMaxReconnectInterval(time.Second * 30)
opts.SetCleanSession(false)
\`\`\`

### 2. **Message Ordering & Persistence**

With QoS level 1, messages are guaranteed delivery but might arrive out of order. Implementing sequence numbers on the firmware side solved this.

### 3. **Testing IoT Systems**

Mock MQTT brokers like Mosquitto with Docker made local testing reliable:

\`\`\`bash
docker run -d -p 1883:1883 eclipse-mosquitto
\`\`\`

## Performance Metrics

In production, the system achieves:

- **Command latency**: 200-500ms (Android → Backend → Device)
- **Event notification**: <100ms (Device → Backend → App)
- **Uptime**: 99.8% (excluding intentional maintenance)

## Key Takeaways

- MQTT's simplicity doesn't mean lack of power
- Device connection lifecycle management is critical
- Local testing with Docker containers saves debugging time
- Monitoring MQTT broker metrics helps prevent cascading failures

Building this system taught me that IoT isn't just about devices—it's about orchestrating reliable, low-latency communication across distributed systems.
        `,
      },
      "tanstack-start-vs-nextjs": {
        title: "Full-Stack Architecture: TanStack Start vs Next.js",
        date: "2025-06-28",
        readTime: "12 min read",
        category: "Architecture",
        content: `
# Full-Stack Architecture: TanStack Start vs Next.js

When building this portfolio, I chose TanStack Start over Next.js. Here's why, and when you should choose each.

## Comparison Matrix

| Aspect | Next.js | TanStack Start |
|--------|---------|----------------|
| **File-based Routing** | Yes (App Router) | Yes (via TanStack Router) |
| **Server Components** | Native RSC | Compatible with RSC |
| **Database Integration** | ORM-agnostic | Full flexibility |
| **API Routes** | Built-in | Via Nitro |
| **Bundle Size** | Larger | Smaller |
| **Learning Curve** | Easier for beginners | Steeper but powerful |

## When to Use Next.js

- **Quick SaaS MVPs**: Next.js's opinionated structure speeds up initial development
- **Small teams**: Less configuration burden
- **Content-heavy sites**: Excellent Markdown/MDX support
- **E-commerce**: Vercel's ecosystem fits well

Next.js shines when you want conventions over configuration.

## When to Use TanStack Start

- **Custom architectures**: Full control over routing, data fetching, and rendering
- **Complex state management**: Deeply integrate with TanStack Query for server state
- **Micro-frontend architectures**: File-based routing is more composable
- **Performance-critical apps**: Fine-grained control over bundle splitting

## Why I Chose TanStack Start

For this portfolio, I valued:

1. **Minimal Opinionation**: I can architect exactly what I need
2. **TanStack Router**: File-based routing with deep linking and scroll management
3. **Small Bundle**: Visitors get a lighter site
4. **Integration with TanStack Query**: Seamless data fetching if blog posts scale

## Practical Example: Blog Rendering

### Next.js Approach

\`\`\`jsx
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  return {
    title: post.title,
  }
}

export default async function Post({ params }) {
  const post = await getBlogPost(params.slug)
  return <BlogLayout post={post} />
}
\`\`\`

### TanStack Start Approach

\`\`\`jsx
// src/routes/blogs/$slug.tsx
export const Route = createFileRoute('/blogs/$slug')({
  component: BlogDetail,
})

function BlogDetail() {
  const { slug } = useParams({ from: '/blogs/$slug' })
  const { data } = useQuery({
    queryKey: ['blog', slug],
    queryFn: () => fetchBlogPost(slug),
  })
  
  return <BlogLayout post={data} />
}
\`\`\`

## Performance Implications

Both frameworks produce similar final performance, but the optimization story differs:

- **Next.js**: Automatic route-based code splitting
- **TanStack Start**: Manual route splitting with more control

## The Verdict

Neither is objectively "better." It depends on your constraints:

- **Team size**: Small → TanStack Start, Large → Next.js (established patterns)
- **Timeline**: Tight deadline → Next.js, Flexible → TanStack Start
- **Technical depth**: Beginners → Next.js, Experienced → TanStack Start

For my portfolio, TanStack Start's flexibility and minimal bundle size aligned perfectly with my goals.
        `,
      },
      "teaching-junior-developers": {
        title: "Teaching Junior Developers: Lessons from 3 Years as TA",
        date: "2025-06-15",
        readTime: "10 min read",
        category: "Learning",
        content: `
# Teaching Junior Developers: Lessons from 3 Years as TA

Over three years as a Teaching Assistant for Programming Fundamentals, Object-Oriented Programming, and Mobile Development, I've mentored over 100 students. Here are the patterns I've noticed.

## The Most Common Mistakes

### 1. Ignoring Fundamentals

Students often skip understanding basic concepts (pointers, memory, data types) and jump to frameworks. This creates a shaky foundation:

**The Problem**: \`NullPointerException\` errors feel magical instead of understandable.

**The Fix**: Spend 2x time on fundamentals before frameworks. A student who truly understands objects and inheritance writes better OOP code than someone who just copies patterns.

### 2. Copy-Paste Without Understanding

It's tempting to grab StackOverflow answers. But copying without reading produces brittle code.

**Better Approach**:
- Read the answer
- Understand each line
- Explain it to someone else
- Only then use it in your project

### 3. Not Reading Error Messages

"It doesn't work" is not actionable. But the error message is.

**What I do now**: I never answer "it doesn't work" directly. I ask them to share the exact error. 90% of the time, they find the bug themselves while explaining.

## What Actually Works

### Practice Repetition

The students who became proficient fastest did:
- 20+ small programming exercises, not 1 large project
- Repeated patterns (loops, conditionals) in different contexts
- Immediate feedback on each attempt

### Code Review Culture

Instead of "submit code for grading," we practiced:
- Peer code review
- Discussion about style
- Learning from others' approaches

Code review taught more than my lectures.

### Teaching Others

The most unexpected finding: students who volunteered to help classmates learned faster and deeper.

Why? Explaining forces clarity. If you can't explain it, you don't understand it.

## Advice for Future TAs

1. **Meet students where they are**. Some are motivated by grades, some by projects, some by curiosity. Same lesson, different delivery.

2. **Celebrate small wins**. When someone debugs their first memory leak or successfully implements inheritance, acknowledge it. These moments compound.

3. **Your job isn't to give answers—it's to ask good questions.** "Why does this crash?" beats "Here's the fix."

4. **Admit when you don't know.** Saying "Great question! Let me research that" builds trust and models lifelong learning.

## The Students Who Succeeded

They shared traits:

- **Curiosity over grades**: They asked "why," not just "what grade?"
- **Comfort with struggle**: They debugged for hours instead of giving up
- **Community**: They helped peers and asked for help
- **Shipping mentality**: They completed projects, however imperfect

## Reflecting on Three Years

Teaching forced me to solidify my own understanding. I can't hand-wave concepts to students—I had to articulate every detail.

The students didn't just learn programming. They learned persistence, debugging mindset, and collaboration. That's the real skill.

If you're considering a TA role, do it. You'll impact someone's career trajectory, and they'll change how you think about code.
        `,
      },
      "federated-learning-privacy": {
        title: "Federated Learning for Privacy-Preserving ML",
        date: "2025-05-30",
        readTime: "15 min read",
        category: "Machine Learning",
        content: `
# Federated Learning for Privacy-Preserving ML

My recent publication focuses on Federated Learning with FedProx and DenseNet-201 for breast cancer classification. Here's the motivation and key findings.

## The Privacy Problem

Medical imaging datasets are incredibly valuable for training ML models, but they contain sensitive patient data. Training models centrally requires aggregating data in one location—a privacy nightmare.

**The Challenge**: How do we train accurate models without centralizing sensitive data?

## Enter Federated Learning

Federated Learning inverts the traditional ML approach:

**Traditional**: Data → Central Server → Model

**Federated**: Model → Edge Devices (clients) → Model updates → Central Server

Each device trains locally on its data and sends only model updates (gradients), not raw data. The central server aggregates updates into a better global model.

## FedProx: Federated Optimization

Standard federated averaging (FedAvg) assumes all clients have identical data distributions. But in reality:

- Hospital A's imaging equipment differs from Hospital B's
- Patient demographics vary by region
- Data is non-IID (non-independent and identically distributed)

**FedProx Advantage**: It adds a proximal term to the loss function, making it robust to non-IID data:

\`\`\`
L(w) = Σ [f_i(w) + (μ/2)||w - w_t||²]
\`\`\`

This keeps local models close to the global model, improving convergence.

## Our Approach: DenseNet-201

We used DenseNet-201 for feature extraction because:

1. **Efficiency**: Densely connected networks require fewer parameters
2. **Accuracy**: Pretrained ImageNet weights transfer well to medical imaging
3. **Hyperparameter Tuning**: Particle Swarm Optimization (PSO) fine-tunes the learning process

## Results

- **Accuracy**: 94.3% on breast cancer classification (private test set)
- **Communication rounds**: 150 (vs 300+ for FedAvg)
- **Privacy**: No raw patient data ever leaves local hospital systems

## Real-World Implications

This approach enables:

- **Hospital collaboration** without data sharing
- **Regulatory compliance** (HIPAA, GDPR)
- **Better models** by leveraging multi-hospital datasets

## Challenges We Faced

### 1. **Non-IID Data Handling**

Different hospitals have different imaging protocols. FedProx helps, but communication is still needed.

### 2. **Convergence Monitoring**

Can't inspect local data on clients, so monitoring model quality is blind. We used validation-based early stopping.

### 3. **Computational Overhead**

Training on edge devices requires efficient models. DenseNet's parameter efficiency was crucial.

## Key Takeaway

Federated Learning is no longer theoretical—it's practical for sensitive domains like healthcare. But it's not a silver bullet:

- Adds communication overhead
- Requires careful hyperparameter tuning
- Works best with collaborating institutions

For the medical imaging use case, the privacy guarantees are worth the engineering complexity.

## Future Directions

We're exploring:
- **Differential Privacy**: Adding formal privacy guarantees on top of federated learning
- **Asynchronous FL**: Clients train on different schedules
- **Model personalization**: Allowing slight divergence for local variations

Federated Learning represents the future of collaborative ML in privacy-sensitive domains. Healthcare will lead, but finance, law, and other sectors will follow.
        `,
      },
    };

    setBlog(blogs[slug]);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-600">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <p className="text-zinc-600">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Article Header */}
      <section className="border-b border-[#E5E5E0] bg-[#FAFAF8]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#1a1a1a] font-medium"
            >
              <ArrowLeft size={16} />
              Back to writing
            </Link>
            <h1
              className="text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {blog.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#999]">
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{blog.readTime}</span>
              <span>•</span>
              <span className="rounded-full bg-[#FFF3ED] px-3 py-0.5 text-xs font-medium text-[#FF6B35]">
                {blog.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 lg:px-0 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog.content
              .split("\n")
              .map((line: string) => {
                // Handle headings
                if (line.startsWith("# ")) {
                  return `<h1 class="text-4xl font-bold mt-12 mb-6" style="font-family: 'Playfair Display', serif">${line.replace("# ", "")}</h1>`;
                }
                if (line.startsWith("## ")) {
                  return `<h2 class="text-3xl font-bold mt-10 mb-5" style="font-family: 'Playfair Display', serif">${line.replace("## ", "")}</h2>`;
                }
                if (line.startsWith("### ")) {
                  return `<h3 class="text-2xl font-bold mt-8 mb-4" style="font-family: 'Playfair Display', serif">${line.replace("### ", "")}</h3>`;
                }
                // Handle code blocks
                if (line.startsWith("```")) {
                  return '<pre class="bg-[#1a1a1a] text-white p-6 rounded-lg overflow-x-auto my-6"><code style="font-family: monospace">';
                }
                if (line === "```") {
                  return "</code></pre>";
                }
                // Handle lists
                if (line.startsWith("- ")) {
                  return `<li class="ml-4 text-[#666] my-2">${line.replace("- ", "")}</li>`;
                }
                // Handle bold
                if (line.includes("**")) {
                  return `<p class="text-[#666] my-4 leading-relaxed">${line.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #1a1a1a">$1</strong>')}</p>`;
                }
                // Handle regular text
                if (line.trim()) {
                  return `<p class="text-[#666] my-4 leading-relaxed">${line}</p>`;
                }
                return "";
              })
              .join(""),
          }}
        />
      </article>

      {/* Navigation */}
      <section className="border-t border-[#E5E5E0] bg-[#FAFAF8] py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-0">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 font-medium text-[#FF6B35] hover:text-[#1a1a1a]"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>
      </section>
    </div>
  );
}
