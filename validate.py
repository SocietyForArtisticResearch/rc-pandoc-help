from bs4 import BeautifulSoup
import sys
import os

def find_broken_internal_links(html_file_path):
    base_dir = os.path.dirname(os.path.abspath(html_file_path))

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

    # Find all images with missing src files
    missing_images = []
    for img in soup.find_all('img', src=True):
        src = img['src']
        if src.startswith('http://') or src.startswith('https://') or src.startswith('data:'):
            continue
        img_path = os.path.join(base_dir, src)
        if not os.path.exists(img_path):
            missing_images.append(src)

    errors = False

    if broken_links:
        print("⚠️  broken internal links found:")
        for href, tag in broken_links:
            print(f"  {href} → Not found. Link tag: {tag}")
        errors = True
    else:
        print("✅ No broken internal links found.")

    if missing_images:
        print("⚠️  missing images found:")
        for src in missing_images:
            print(f"  {src}")
        errors = True
    else:
        print("✅ No missing images found.")

    if errors:
        sys.exit(1)

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python check_internal_links.py index.html")
        sys.exit(1)
    
    html_path = sys.argv[1]
    find_broken_internal_links(html_path)
