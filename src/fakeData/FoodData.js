const foodData = [
    {
        id : '1',
        category : 'breakfast',
        foodImage : 'https://i.ibb.co/yXWR89c/breakfast1.png',
        price : '6.99',
        title : 'Bagel And Cream Cheese',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '2',
        category : 'breakfast',
        foodImage : 'https://i.ibb.co/hHm0NX2/breakfast2.png',
        price : '9.99',
        title : 'Breakfast Sandwich',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '3',
        category : 'breakfast',
        foodImage : 'https://i.ibb.co/8btS88w/breakfast3.png',
        price : '10.99',
        title : 'Baked Chicken',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '4',
        category : 'breakfast',
        foodImage : 'https://i.ibb.co/N7QF0Xb/breakfast4.png',
        price : '8.99',
        title : 'Eggs Benedict',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '5',
        category : 'breakfast',
        foodImage : 'https://i.ibb.co/jRQcpQR/breakfast5.png',
        price : '19.99',
        title : 'Toast Croissant Fried Eggs',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '6',
        category : 'breakfast',
        foodImage : 'https://i.ibb.co/2S4XwJm/breakfast6.png',
        price : '3.99',
        title : 'Full Breakfast Fried Eggs',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '7',
        category : 'lunch',
        foodImage : 'https://i.ibb.co/1TkDsKS/lunch1.png',
        price : '6.99',
        title : 'Healthy Meal Plan',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '8',
        category : 'lunch',
        foodImage : 'https://i.ibb.co/ZB5MN0B/lunch2.png',
        price : '9.99',
        title : 'Fried Chicken Bento',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '9',
        category : 'lunch',
        foodImage : 'https://i.ibb.co/0MVNpvG/lunch3.png',
        price : '6.99',
        title : 'Tarragon-Rubbed-Salmon',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '10',
        category : 'lunch',
        foodImage : 'https://i.ibb.co/KszZLZ7/lunch4.png',
        price : '8.99',
        title : 'Indian Lunch',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '11',
        category : 'lunch',
        foodImage : 'https://i.ibb.co/fDLZMCp/lunch5.png',
        price : '15.99',
        title : 'Beef Steak',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '12',
        category : 'lunch',
        foodImage : 'https://i.ibb.co/X79DnSx/lunch6.png',
        price : '7.99',
        title : 'Honey-Soy-Glazed Salmon',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '13',
        category : 'dinner',
        foodImage : 'https://i.ibb.co/Q8J5kWV/dinner1.png',
        price : '9.99',
        title : 'Salmon With Grapefruit & Salad',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '14',
        category : 'dinner',
        foodImage : 'https://i.ibb.co/n6WZt7v/dinner2.png',
        price : '10.99',
        title : 'Lemony Salmon Piccata',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '15',
        category : 'dinner',
        foodImage : 'https://i.ibb.co/SrZphyB/dinner3.png',
        price : '12.99',
        title : 'Pork Tenderloin With Quinoa',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '16',
        category : 'dinner',
        foodImage : 'https://i.ibb.co/gzK7WpG/dinner4.png',
        price : '8.99',
        title : 'French Fries With Cheese',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '17',
        category : 'dinner',
        foodImage : 'https://i.ibb.co/SRDyQ6c/dinner5.png',
        price : '6.99',
        title : 'Garlic Butter Baked Salmon',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    },
    {
        id : '18',
        category : 'dinner',
        foodImage : 'https://i.ibb.co/QfJGPx3/dinner6.png',
        price : '9.99',
        title : 'Baked Chicken',
        shortDescription : 'How We Dream About Our Future',
        description : 'Everything tastes good when you are hungry.Breakfast was only worth having when somebody else made it for you.All you need is love, but sometimes, a lunch break works, too.Dinner is better when we eat together'
    }  
];

export default foodData;