export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };

  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  

  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  

      export const categories = [
        {
          name: 'work',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29yayUyMGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'vacations',
          image: 'https://images.unsplash.com/photo-1518516513666-49f0cb7ab30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHZhY2F0aW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'gardening',
          image: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'cars',
          image: 'https://images.unsplash.com/photo-1666235904183-b52c0e1753f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=60',
        },
   
        {
          name: 'food',
          image: 'https://plus.unsplash.com/premium_photo-1664007755658-5ded239af5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'people',
          image: 'https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'quotes',
          image: 'https://images.unsplash.com/photo-1567219934540-9f75f7b87552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVvdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'art',
          image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
        }, {
          name: 'dogs',
          image: 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'music',
          image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
        }, {
          name: 'cats',
          image: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
        }, {
          name: 'memes',
          image: 'https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
          name: 'random',
          image: 'https://images.unsplash.com/photo-1666118704505-068a65b5283f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1600&q=60',
        },
      ];

      export const pinDetailQuery = (pinId) => {
        const query = `*[_type == "pin" && _id == '${pinId}']{
          image{
            asset->{
              url
            }
          },
          _id,
          title, 
          about,
          category,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
         save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
          comments[]{
            comment,
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          }
        }`;
        return query;
      };
      
      export const pinDetailMorePinQuery = (pin) => {
        const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };
      
      export const userCreatedPinsQuery = (userId) => {
        const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };
      
      export const userSavedPinsQuery = (userId) => {
        const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };