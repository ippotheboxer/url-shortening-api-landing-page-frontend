export async function shortenLink(userLink: string) {
    try {
        const response = await fetch("https://url-shortening-api-landing-page-server.onrender.com/shorten", {
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
