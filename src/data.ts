import { Cause, Testimonial, BlogPost } from './types';

export const causesData: Cause[] = [
  {
    id: 'project-akshara',
    title: 'Project Akshara: Digital Literacy for All',
    description: 'Bridging the digital divide for 5,000 students in tribal regions of Maharashtra by equipping rural schools with tablets and digital curriculum.',
    category: 'education',
    raisedAmount: 1875000,
    targetAmount: 2500000,
    raisedPercent: 75,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZSoxuLxK-ZdOoONArCqPTfwzbsafV2R71KfljimH9oCxZqWwOE4ZmqNRK9CsXrj68MZCT-KWhKmfbHkKriPGooFPzqRaAFf3WiTuA0sG13lR8K9vnSn5Ufc5qoB1yqJxf8X_nyb5VF6AYbH3DZ81mRVVsz5jy6hYGrwsJ7hOxx1i__dA4qAcX38tu_MgD50io-j5ux6CUIkhLsSZ6c-WbPGSi8E2ICT6Yx2t35es8T2tB7bFR0xDDovy0g24si-zHsFDvx4zd4DVZ',
    isUrgent: false
  },
  {
    id: 'mobile-clinics',
    title: 'Mobile Clinics: Remote Care',
    description: 'Providing essential health services, life-saving medical equipment, and specialist doctors to 20 remote districts in Rajasthan and Odisha.',
    category: 'healthcare',
    raisedAmount: 1680000,
    targetAmount: 4000000,
    raisedPercent: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjL95-r6u4rY43emWdY6cMelWl0M0v05oRF8cz6DkwlhPO2ZouThJ5g6OoL9YrkomPFAyy6DilNYnp7c0j7vJasjAo5RG60k8i8rwiF9FVD9jcsnltkIV1NXfSNK8ocDfjZGNEc_tfkvWfsZY_94MQ5_dcFob3CvNt_lofb4mByAwVSQQ_B3eHRaKP8IPIdgLHhmYm_KbuU9BYJ79iC7U3H8RG6B4mktlQq0cmYdKZT3MMlO-T32ibE2NciJFhYoA42ZiXvUzhKJXI',
    isUrgent: true
  },
  {
    id: 'shakti-shg',
    title: 'Shakti: Self-Help Groups',
    description: 'Empowering women artisans with financial literacy, skill-building, micro-loans, and access to global markets for their traditional crafts.',
    category: 'women-empowerment',
    raisedAmount: 600000,
    targetAmount: 1000000,
    raisedPercent: 60,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugcBGGfqudsbdvGLBbIQ78CQZoNInKfZU_l_2LkqiVNaURziW7IXxNq6da4pRxIegREHmqx6GzlSGbVgLNHjlykmVMUYe864zMOhLE-b10bGBR6dOktNN9j6b3lzSSd4tV7r06faYKgFug74uovdczyKx9SMcS4VWb8DXt3KXLtfDj67Wh9In81vGXktck6LLJ-BN5NWGd1-FeuKtEADdlgaH6VRSxuejw74hWfXwKXYtoQFOGMAj5DgknG',
    isUrgent: false
  },
  {
    id: 'green-roots',
    title: 'Green Roots: Reforestation',
    description: 'Planting 50,000 native tree species across degraded forest lands in the Western Ghats ecosystem, restoring vital biodiversity and protecting natural heritage.',
    category: 'environment',
    raisedAmount: 425000,
    targetAmount: 500000,
    raisedPercent: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTDSBQ_0BJlYwHybu2DuJaWfbJhMhK6KOyrTuTGZKXxnPQp1p1cJf5WWTqyAtkoyLKbWQsY9bLgFDOTYRBNbn8QzAGrez8Kj_EFZ71RM43qFduLKA19vN8gxrBJV1BbCki0czlax4U9UjXxkR8N8-6kRwqsVVdle-c3ap1Uf4RV98Csr_hrR2F_TMCbxpv2R-BiUOZehbaIn5JLkC9cHUuGFYGN5822ZiNBTIzto3KlMof29CL3VkX6TkE49ITkb6RxqNAk29AtuAX',
    isUrgent: false
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'Ananya Sharma',
    role: 'COMMUNITY LEADER, BIHAR',
    quote: 'HopeBridge didn\'t just give us resources; they gave us the training to sustain ourselves. Our village now has 100% literacy among girls.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5B-eoLz05gQQxKPPYcgxDHmRseiMdxj2_0kpQ6wJQt6CnWGDCKws3248yqWGBdK9nYmJ1_-Wz6n4Sexd6zt-jWNm55p9K0TXakznGzvBtakp-p48tzwjpXiZqNljH2qb96jZipoRnitgUqKg7oxCO_zT_4IdVcC1qMZyXZjDg6gKVurjcKV9xT7vu2HrhhFCd6bCne2CGh6l1H3KqEUrkkzYr4sfZhRKDFsA9La0yROUREBpCt5ngKFQP3eDPGwYuikRYGyVxphIs',
    featured: false
  },
  {
    name: 'Rahul Verma',
    role: 'VOCATIONAL STUDENT, UP',
    quote: 'The vocational scholarship changed my life. I am now the first person in my family to hold a technical degree and support my parents.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB4pgKWl24dRN6F4nqvLE7idvvXRpfJ1qdOosaT0buIGkazSMZQu2yBLb8VJFho4rqivMKkEj1pam0RpxBdDoS04L0l8nGaJ_czJuIJVmJcz9hGkCD1pE64axUuxwF1hT1PtiPJJbApzRBda3zAq30XWQ3Wd1s1LKVwNDMHm5sqXW04vs57X7aN7AtnIHx4hQU49-3xgRnfxTIMwRHoCGJGiuCNZGVxIZfAYStJzhX994Eb6M8VLisKEJ6AZ0VbpR5P-nP7vI4vesb',
    featured: true
  },
  {
    name: 'K. Rao',
    role: 'FARMER, ANDHRA PRADESH',
    quote: 'The water conservation project saved our crops during the last drought. HopeBridge stands with us when the weather doesn\'t.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqRDUoORL5q2NP40wE5p5XnvpY8R3Untxt8QOk7jWAO7uoz-_rV0JrBlC2AMz_MErIbnNi-lErV3MxwO6TRyOz6ZlK4SQG0jfYDr6xTP-8A7VkOxnj_QV5pkZNyJVxnS5SrplXFfyRHALbvt74wcr1BSJGYc0kAWTOugpxrdvHnKdDo7s2iANnDZaqJu6KfdIr--LiTDQwf-MRJS3PSXK0WXbaewofZs7j12vnfRLEdxKThvnNwaWOJ-IXyS2fx_pJRwJ3PXHOlzgP',
    featured: false
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-akshara',
    title: 'Project Akshara: A Year of Digital Literacy in Tribal Regions',
    excerpt: 'In just twelve months, we have bridged the digital divide for over 5,000 students across 20 rural villages, opening doors to a world of global knowledge and creating a sustainable community model.',
    content: 'Our digital education journey began with a simple question: How can we give rural children the same opportunities as metropolitan students? Project Akshara was born from this dream. By implementing digital curriculum and distributing customized, rugged tablets loaded with locally translated learning modules, we have transformed the classroom experience. Over 5,000 students in Maharashtra tribal blocks are now learning interactive mathematics, science, and english, demonstrating a remarkable 45% improvement in conceptual retention over traditional blackboard teaching. Our next milestone is establishing dedicated digital labs staffed by trained local community facilitators, ensuring that literacy becomes self-sustaining and durable.',
    category: 'education',
    date: 'Oct 24, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZSoxuLxK-ZdOoONArCqPTfwzbsafV2R71KfljimH9oCxZqWwOE4ZmqNRK9CsXrj68MZCT-KWhKmfbHkKriPGooFPzqRaAFf3WiTuA0sG13lR8K9vnSn5Ufc5qoB1yqJxf8X_nyb5VF6AYbH3DZ81mRVVsz5jy6hYGrwsJ7hOxx1i__dA4qAcX38tu_MgD50io-j5ux6CUIkhLsSZ6c-WbPGSi8E2ICT6Yx2t35es8T2tB7bFR0xDDovy0g24si-zHsFDvx4zd4DVZ'
  },
  {
    id: 'blog-clinic',
    title: 'The Mobile Clinic reaching tribal Odisha',
    excerpt: 'Navigating dense forests to provide primary healthcare and essential medicines to remote communities that had never seen a doctor before, saving critical lives during seasonal out-breaks.',
    content: 'There are villages in eastern Odisha nestled deep within the Eastern Ghats where the nearest motorable road is a three-hour hike away. For these communities, healthcare was an unattainable luxury. HopeBridge\'s custom-fabricated four-wheel-drive Mobile Health Clinics have changed this dynamic. Outfitted with diagnostic gear, refrigerated vaccine storage, and staffed by an emergency doctor, nurse, and pharmacist, these vans navigate grueling forest tracks on a weekly schedule. Our clinics treat acute respiratory infections, carry out maternal health screenings, distribute clean nutritional supplements, and manage chronic conditions like hypertension. Over 12,000 unique patients have received quality, cost-free clinical guidance this year alone.',
    category: 'healthcare',
    date: 'October 12, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjL95-r6u4rY43emWdY6cMelWl0M0v05oRF8cz6DkwlhPO2ZouThJ5g6OoL9YrkomPFAyy6DilNYnp7c0j7vJasjAo5RG60k8i8rwiF9FVD9jcsnltkIV1NXfSNK8ocDfjZGNEc_tfkvWfsZY_94MQ5_dcFob3CvNt_lofb4mByAwVSQQ_B3eHRaKP8IPIdgLHhmYm_KbuU9BYJ79iC7U3H8RG6B4mktlQq0cmYdKZT3MMlO-T32ibE2NciJFhYoA42ZiXvUzhKJXI'
  },
  {
    id: 'blog-shakti',
    title: 'Empowering rural entrepreneurs in Rajasthan',
    excerpt: 'Our micro-loan and skill-building initiatives have helped local women establish a thriving handloom collective, lifting dozens of marginalized families out of generational poverty.',
    content: 'Crafting native block-prints is an ancient, beautiful lineage passed down through generations of families in rural Jaipur districts. However, small artisans often remain dependent on predatory middle-men who buy their wares for fractions of their true value. Under our Shakti Self-Help Collective banner, we organized 180 local women weavers and printing artisans into self-managed credit associations. We conducted intensive accounting tutorials, established collective inventory yards, and distributed interest-free equipment capital. The collective now directly supplies eco-friendly furnishings to domestic retailers and online portals, boosting household incomes by 180% and allowing young mothers to fund their daughters higher-education.',
    category: 'women-empowerment',
    date: 'September 28, 2024',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugcBGGfqudsbdvGLBbIQ78CQZoNInKfZU_l_2LkqiVNaURziW7IXxNq6da4pRxIegREHmqx6GzlSGbVgLNHjlykmVMUYe864zMOhLE-b10bGBR6dOktNN9j6b3lzSSd4tV7r06faYKgFug74uovdczyKx9SMcS4VWb8DXt3KXLtfDj67Wh9In81vGXktck6LLJ-BN5NWGd1-FeuKtEADdlgaH6VRSxuejw74hWfXwKXYtoQFOGMAj5DgknG'
  },
  {
    id: 'blog-roots',
    title: 'Restoring native forests in the Western Ghats',
    excerpt: 'Partnering with local communities to plant 50,000 indigenous trees, restoring critical biodiversity corridors and protecting endangered forest ecosystems from degradation.',
    content: 'The Western Ghats are a global biodiversity hotspot, home to hundreds of rare animal and plant forms that exist nowhere else on the planet. Decades of uncoordinated land clearances for timber and plantation farming have fragmented these vital biosphere reserves. Our Green Roots project engages native forest dwellers in community seed collection, nursery cultivation, and sapling stewardship. Planting native evergreen flora species such as Rosewood, Jamun, and Jackfruit ensures the re-establishment of robust jungle canopies. These trees protect mountain top soils from monsoon erosion, secure clean drinking water streams in valleys below, and act as highly secure migration pathways for wildlife herds.',
    category: 'environment',
    date: 'September 15, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTDSBQ_0BJlYwHybu2DuJaWfbJhMhK6KOyrTuTGZKXxnPQp1p1cJf5WWTqyAtkoyLKbWQsY9bLgFDOTYRBNbn8QzAGrez8Kj_EFZ71RM43qFduLKA19vN8gxrBJV1BbCki0czlax4U9UjXxkR8N8-6kRwqsVVdle-c3ap1Uf4RV98Csr_hrR2F_TMCbxpv2R-BiUOZehbaIn5JLkC9cHUuGFYGN5822ZiNBTIzto3KlMof29CL3VkX6TkE49ITkb6RxqNAk29AtuAX'
  }
];
