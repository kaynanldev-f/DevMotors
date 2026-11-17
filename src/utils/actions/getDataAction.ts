export async function getData() {
  try {
    const req = await fetch(
      `https://api.cosmicjs.com/v3/buckets/${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects/6ae3b99b1e644ce3ac72148a?pretty=true&read_key=${process.env.READ_KEY}`,
      { next: { revalidate: 60 } },
    );

    if (!req) {
      throw new Error("Failed to fetch");
    }

    return req.json();
  } catch {
    throw new Error("Failed to fetch");
  }
}

export async function getSubmenuData() {
  try {
    const req = await fetch(
      `https://api.cosmicjs.com/v3/buckets/${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects?pretty=true&query=%7B%22type%22:%22submenus%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`,
      { next: { revalidate: 60 } },
    );

    if (!req) {
      throw new Error("Failed to fetch");
    }

    return req.json();
  } catch {
    throw new Error("Failed to fetch");
  }
}
//https://api.cosmicjs.com/v3/buckets/dev-motors-production-2af4f070-d3db-11f1-9762-479443156150/objects?pretty=true&query=%7B%22type%22:%22submenus%22%7D&limit=10&skip=0&read_key=qt3T5waufxQkH9B4bxkWM65wFhXNxAZ8OCRvrI0rxDWAno5U8e&depth=1&props=slug,title,
