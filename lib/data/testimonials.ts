export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  text: string;
  rating: number;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Julian Gilbert',
    text: 'I have bought a fully verified Cash App account from here. I have used it for business transactions and have found it to be reliable and convenient. I have never had any problems with the Cash App and would recommend it to anyone looking for a quick and easy way to send or receive money.',
    rating: 5,
    imageUrl: '/images/testimonials/julian-gilbert.jpg'
  },
  {
    id: '2',
    name: 'Carlton Bowman',
    title: 'WordPress Dev.',
    text: 'It was a good quality facebook ad account. I had been using it for about more than 9 months, and it had been working well for me. I had a good number of followers, and I was able to get a lot of engagement on my posts. Still now Its working without any problem.',
    rating: 5,
    imageUrl: '/images/testimonials/carlton-bowman.jpg'
  },
  {
    id: '3',
    name: 'Elizabeth Howard',
    text: 'I had a great experience using PayPal account which I bought from this website. The had delivered account within 24 hours. I was able to send and receive money quickly and easily. Overall, I was very pleased with my experience and would recommend PayPal to others.',
    rating: 5,
    imageUrl: '/images/testimonials/elizabeth-howard.jpg'
  }
];
