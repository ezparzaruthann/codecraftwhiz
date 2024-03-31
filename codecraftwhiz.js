// content_recommendation_engine.js

class Content {
    constructor(title, category) {
        this.title = title;
        this.category = category;
    }
}

class User {
    constructor(username, interests) {
        this.username = username;
        this.interests = interests;
    }

    recommendContent(contentList) {
        const recommendedContent = contentList.filter(content => this.interests.includes(content.category));
        return recommendedContent;
    }
}

// Example usage
const contentList = [
    new Content('Introduction to Machine Learning', 'Technology'),
    new Content('Healthy Eating Habits', 'Health'),
    new Content('Financial Planning 101', 'Finance'),
    new Content('Travel Destinations for Adventure Seekers', 'Travel')
];

const user1 = new User('Alice', ['Technology', 'Health']);
console.log(user1.recommendContent(contentList));

const user2 = new User('Bob', ['Finance', 'Travel']);
console.log(user2.recommendContent(contentList));
