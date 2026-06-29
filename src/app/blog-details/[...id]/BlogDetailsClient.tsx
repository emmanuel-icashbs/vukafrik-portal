"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogDetailsArea from "@/components/pages/blogs/blog-details/BlogDetailsArea";
import blog_data from "@/data/MeetUpData";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import { notFound } from "next/navigation";

interface Props {
  blogId: string;
}

export default function BlogDetailsClient({ blogId }: Props) {
  const single_blog = blog_data.find((item) => String(item.id) === blogId);

  if (!single_blog) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breadcrumb
          title="Blog Details"
          sub_title="Designing For Gen Z: Expectations And UX Guidelines"
        />
        <BlogDetailsArea single_blog={single_blog} />
      </main>
      <FooterOne />
    </Wrapper>
  );
}
