import { TOGGLE_FAVORITE } from "../actions";

/* 
  src/reducers/posts.js
*/
const initialState = {
    posts: { 
        // this data object being an object will make lookups faster if there were a lot of posts
        // on the other hand, looping over it will require it to be an array but this could be cached for faster looping
        // this is not the best example of this but if the data was enormous (like thousands of entries, the look up on an object would be O(1) vs O(n))
        // if there was a backend, this could be pushed onto the server but then you would need to make requests to the server each time, which could/would be pretty slow since, ideally, HTTP requests should be reduced
        '001': {
            id: '001',
            title: "Beautiful mountain landscapes",
            timeToRead: 5,
            created: 1553486400,
            videoId: "iDlLCKnOB2M",
            thumbnail: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            favorite: false,
            body: '<p>Climbing tall mountains is difficult.  It can take a long time.  You need to bring equipment. Climbing tall mountains is difficult.  It can take a long time.  You need to bring equipment. Climbing tall mountains is difficult.  It can take a long time.  You need to bring equipment. Climbing tall mountains is difficult.  It can take a long time.  You need to bring equipment.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '002': {
            id: '002',
            title: "Mountains and more great mountains",
            timeToRead: 15,
            created: 925963200,
            videoId: "5yvHqXhMPss",
            thumbnail: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
            favorite: false,
            body: '<p>Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo. Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo. Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo. Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '003': {
            id: '003',
            title: "Great mountains",
            timeToRead: 10,
            created: 1554523200,
            videoId: "NhBzhi9jPFs",
            thumbnail: "https://images.unsplash.com/photo-1483197452165-7abc4b248905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
            favorite: false,
            body: '<p>Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward. Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward. Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward. Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '004': {
            id: '004',
            title: "Climbing mountains",
            timeToRead: 25,
            created: 1526097600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1472060650787-9726edbd6bd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
            favorite: false,
            body: '<p>When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness. When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness. When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness. When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '005': {
            id: '005',
            title: "River delta",
            timeToRead: 3,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1483639033054-d6b9cf0eb19c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
            favorite: false,
            body: '<p>Flowing rivers of glacial water can be very cold.  Always check the water before jumping in. Flowing rivers of glacial water can be very cold.  Always check the water before jumping in. Flowing rivers of glacial water can be very cold.  Always check the water before jumping in. Flowing rivers of glacial water can be very cold.  Always check the water before jumping in.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '006': {
            id: '006',
            title: "Canyon River",
            timeToRead: 3,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506355683710-bd071c0a5828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            favorite: false,
            body: '<p>Rivers that wind around canyons can be especially beautiful, as they carve out the landscape. Rivers that wind around canyons can be especially beautiful, as they carve out the landscape. Rivers that wind around canyons can be especially beautiful, as they carve out the landscape. Rivers that wind around canyons can be especially beautiful, as they carve out the landscape.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '007': {
            id: '007',
            title: "River and Mountains",
            timeToRead: 3,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1494783329112-4a6795291178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            favorite: false,
            body: '<p>When rivers are next to mountains you have the luxury of seeing a very nice vista. When rivers are next to mountains you have the luxury of seeing a very nice vista. When rivers are next to mountains you have the luxury of seeing a very nice vista. When rivers are next to mountains you have the luxury of seeing a very nice vista.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '008': {
            id: '008',
            title: "Beach palm trees",
            timeToRead: 6,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
            favorite: false,
            body: '<p>Palm trees love warm climates and water.  Beaches are a perfect habitat for them to grow. Palm trees love warm climates and water.  Beaches are a perfect habitat for them to grow. Palm trees love warm climates and water.  Beaches are a perfect habitat for them to grow. Palm trees love warm climates and water.  Beaches are a perfect habitat for them to grow.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '009': {
            id: '009',
            title: "Blue beach with island",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
            favorite: false,
            body: '<p>Islands are surrounded by water and therefore have beaches.  They can be isolated and difficult to get to in some cases. Islands are surrounded by water and therefore have beaches.  They can be isolated and difficult to get to in some cases. Islands are surrounded by water and therefore have beaches.  They can be isolated and difficult to get to in some cases. Islands are surrounded by water and therefore have beaches.  They can be isolated and difficult to get to in some cases.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '010': {
            id: '010',
            title: "Boats near the beach",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80",
            favorite: false,
            body: '<p>Boating to an island is a unique experience.  Always make sure to anchor your boat and let down the ladder so you can get back in. Boating to an island is a unique experience.  Always make sure to anchor your boat and let down the ladder so you can get back in. Boating to an island is a unique experience.  Always make sure to anchor your boat and let down the ladder so you can get back in. Boating to an island is a unique experience.  Always make sure to anchor your boat and let down the ladder so you can get back in.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '011': {
            id: '011',
            title: "Walking in the desert",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506773090264-ac0b07293a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
            favorite: false,
            body: '<p>Deserts are dry and inhospitable places but none the less they are majestic. Deserts are dry and inhospitable places but none the less they are majestic. Deserts are dry and inhospitable places but none the less they are majestic. Deserts are dry and inhospitable places but none the less they are majestic.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '012': {
            id: '012',
            title: "Desert camels",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1505925119181-3537e71dbc72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
            favorite: false,
            body: '<p>Camels are a great source of transportation in the desert. Camels are a great source of transportation in the desert. Camels are a great source of transportation in the desert. Camels are a great source of transportation in the desert.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },        
    },
}
export default (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FAVORITE:
            return {
                ...state,
                posts: { ...state.posts, [action.id]: { ...state.posts[action.id], favorite: !state.posts[action.id].favorite }},
            }


        default:
            return state
    }
}
