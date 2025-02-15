export async function shortenLink(userLink: string) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/shorten`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: userLink }),
        });
        const data = await response.json();
        return data.result_url;
      } catch (error) {
        console.error("Error shortening URL:", error);
      }
}
