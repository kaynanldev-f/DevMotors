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

export async function getPageSlug(slug: string) {
  const query = encodeURIComponent(
    JSON.stringify({
      type: "submenus",
      slug: slug,
    }),
  );

  const url = `https://api.cosmicjs.com/v3/buckets/${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects?query=${query}&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`;

  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar submenu no Cosmic");
  }

  const data = await response.json();

  return data.objects?.[0] ?? null;
}
