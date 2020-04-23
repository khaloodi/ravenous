const apiKey =
  "AVwGi-Go_Kwp61zd22MVCiNuZQHEb5c3OA6OLGmKOfwaTgoqS0gXf312iaQbHDl8LiJvjXSZTWQLgLziOFrlqSJ6MlWihg0azUtg4-ASaCavMR2CCV_VpQjLi92gXnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=l${location}&sort_by=${sortBy}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(jsonResponse);
            return {
              id: business.id,
              imageSrc: business.image_url,
            };
          });
        }
      });
  },
};

export default Yelp;
