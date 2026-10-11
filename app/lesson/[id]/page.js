import { notFound } from "next/navigation";
import LessonContent from "@/components/LessonContent";
import { lessons } from "@/data/course";

export function generateStaticParams() {
  return lessons.filter((lesson) => lesson.id > 1).map((lesson) => ({ id: String(lesson.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = lessons.find((item) => item.id === Number(id));
  return { title: lesson ? `Lesson ${lesson.id}: ${lesson.title} | English 8` : "Lesson | English 8" };
}

export default async function LessonRoute({ params }) {
  const { id } = await params;
  const lesson = lessons.find((item) => item.id === Number(id) && item.id > 1);
  if (!lesson) notFound();
  return <LessonContent id={lesson.id} />;
}
