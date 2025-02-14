export async function shortenLink(userLink: string) {
<<<<<<< HEAD
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
  
=======
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("https://api.tinyurl.com/create?api_token=ba1TrtWVt7nGAng8Ib8NHat5kfrqw4G80nijwTwkdc9V1UImj4KssvZ56Ppx", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            url: userLink,
            description: "string",
          }),
        redirect: "follow"
    });
    const result = await response.json();
    return result.data.tiny_url;
}
>>>>>>> e092045034a9cf6b49928d3c8aafec095ec3150a
