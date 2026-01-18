/**
 * Simple markdown to HTML converter for blog posts
 * Handles basic markdown syntax without external dependencies
 */
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Convert bold text
  html = html.replace(/\*\*\*([^\*]+)\*\*\*/gim, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*([^\*]+)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*([^\*]+)\*/gim, '<em>$1</em>');

  // Convert lists
  html = html.replace(/^\- (.*)$/gim, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.*)$/gim, '<li>$2</li>');

  // Wrap consecutive <li> items in <ul> or <ol>
  html = html.replace(/(<li>.*<\/li>(\n|$))+/gim, (match) => {
    return '<ul>' + match + '</ul>';
  });

  // Convert links
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Convert line breaks (but not inside HTML tags)
  html = html.split('\n\n').map(para => {
    if (para.trim() && !para.startsWith('<h') && !para.startsWith('<ul') && !para.startsWith('<ol') && !para.startsWith('<li')) {
      return '<p>' + para.replace(/\n/g, '<br/>') + '</p>';
    }
    return para;
  }).join('\n\n');

  return html;
}
