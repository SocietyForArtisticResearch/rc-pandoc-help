from bs4 import BeautifulSoup
import sys
import os

def find_broken_internal_links(html_file_path):
    if not os.path.exists(html_file_path):
        print(f"File not found: {html_file_path}")
        return

    with open(html_file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Collect all valid fragment targets (ids and named anchors)
    valid_targets = set()
    for tag in soup.find_all(attrs={"id": True}):
        valid_targets.add(tag['id'])
    for tag in soup.find_all("a", attrs={"name": True}):  # legacy anchor names
        valid_targets.add(tag['name'])

    # Find all internal links with href="#something"
    broken_links = []
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('#') and len(href) > 1:
            fragment = href[1:]
            if fragment not in valid_targets:
                broken_links.append((href, str(a)))

    if broken_links:
        print("⚠️ warning: broken internal links found:")
        for href, tag in broken_links:
            print(f"  {href} → Not found. Link tag: {tag}")
        sys.exit(1)  # Exit with error code if broken links found
    else:
        print("✅ No broken internal links found.")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python check_internal_links.py index.html")
        sys.exit(1)
    
    html_path = sys.argv[1]
    find_broken_internal_links(html_path)
