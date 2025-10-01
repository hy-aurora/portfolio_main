import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => {
              const lower = skill.toLowerCase();
              const imageMap: Record<string, string> = {
                python: "/skills/python.png",
                typescript: "/skills/typescript.png",
                "next.js": "/skills/nextjs.png",
                nextjs: "/skills/nextjs.png",
                react: "/skills/react.png",
                fastapi: "/skills/fastapi.png",
                django: "/skills/django.png",
                "spring boot": "/skills/springboot.png",
                "node.js": "/skills/nodejs.png",
                node: "/skills/nodejs.png",
                express: "/skills/express.png",
                sql: "/skills/sql.png",
                "google cloud": "/skills/googlecloud.png",
                firebase: "/skills/firebase.png",
                "resend api": "/skills/resend.png",
                resend: "/skills/resend.png",
                convex: "/skills/convex.png",
                docker: "/skills/docker.png",
                "nextui":"/skills/nextui.png",
                "shadcn/ui":"/skills/shadcnui.png",
                "google gemini":"/skills/gemini.png",
                "gemini":"/skills/gemini.png",
                figma:"/skills/figma.png",
              };
              const key = Object.keys(imageMap).find(k => lower === k);
              const imgSrc = key ? imageMap[key] : undefined;
              const SkillIcon = (() => {
                if (imgSrc) return null; // We'll use an <Image>
                if (lower.includes("python")) return Icons.python;
                if (lower === "typescript") return Icons.typescript;
                if (lower === "next.js" || lower === "nextjs") return Icons.nextjs;
                if (lower === "react") return Icons.react;
                if (lower === "fastapi") return Icons.fastapi;
                if (lower === "django") return Icons.django;
                if (lower.includes("spring")) return Icons.spring;
                if (lower === "node.js" || lower === "node") return Icons.node;
                if (lower === "express") return Icons.express;
                if (lower === "sql") return Icons.database;
                if (lower.includes("google cloud")) return Icons.googleCloud;
                if (lower === "firebase") return Icons.firebase;
                if (lower === "convex") return Icons.convex ?? Icons.box;
                if (lower === "docker") return Icons.docker;
                if (lower.startsWith("git")) return Icons.git;
                if (lower === "figma") return Icons.figma;
                if (lower.includes("tailwind")) return Icons.tailwind;
                if (lower === "mongodb") return Icons.mongodb;
                if (lower === "socket.io" || lower === "socket-io") return Icons.socketio ?? Icons.cloud;
                if (lower === "stripe") return Icons.stripe ?? Icons.creditCard;
                if (lower.startsWith("ethers")) return Icons.ethers ?? Icons.ethereum;
                if (lower === "rainbowkit") return Icons.rainbow ?? Icons.palette;
                if (lower === "shadcn/ui" || lower === "shadcn") return Icons.shadcn ?? Icons.layout;
                if (lower === "resend api" || lower === "resend") return Icons.server;
                if (lower === "google gemini" || lower.includes("gemini")) return Icons.gemini ?? Icons.sparkle;
                if (lower === "react hook form") return Icons.form ?? Icons.react;
                if (lower === "zod") return Icons.shield;
                if (lower === "react hot toast") return Icons.fire ?? Icons.react;
                if (lower === "vite") return Icons.vite ?? Icons.bolt;
                if (lower === "framer motion") return Icons.framer ?? Icons.motion;
                if (lower === "jwt") return Icons.lock;
                if (lower === "nextui") return Icons.nextui ?? Icons.box;
                if (lower === "clerk") return Icons.clerk ?? Icons.user;
                if (lower === "redis") return Icons.redis ?? Icons.database;
                return Icons.code;
              })();
              return (
                <BlurFade
                  key={skill}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  className="flex"
                >
                  <Badge className="flex items-center gap-1">
                    {imgSrc ? (
                      <Image src={imgSrc} alt={skill} width={14} height={14} className="rounded-sm" />
                    ) : SkillIcon ? (
                      <SkillIcon className="size-3" />
                    ) : null}
                    {skill}
                  </Badge>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons & Certifications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Highlights that earned recognition
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From national hackathons to industry simulations, here are the
                  credentials and competitions that validate my product impact.
                  Each milestone links to the supporting artifact or
                  certificate.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
