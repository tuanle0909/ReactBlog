function PostDetailRichText({ content }: { content: string }) {
  return <div className="rte" dangerouslySetInnerHTML={{ __html: content }}></div>;
}

export default PostDetailRichText;
