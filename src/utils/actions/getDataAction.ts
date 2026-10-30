export async function getData() {
  try {
    const req = await fetch(
      `${process.env.NEXT_API_URL}${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
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
