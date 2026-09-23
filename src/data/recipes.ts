export interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  difficulty: string;
  rating: number;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 1, name: "Primi Piatti", icon: "🍝", color: "#FFD700" },
  { id: 2, name: "Secondi Piatti", icon: "🥩", color: "#FF6B6B" },
  { id: 3, name: "Dolci", icon: "🍰", color: "#FF69B4" },
  { id: 4, name: "Antipasti", icon: "🥗", color: "#4ECDC4" },
  { id: 5, name: "Contorni", icon: "🥦", color: "#45B7D1" },
  { id: 6, name: "Pane e Pizza", icon: "🍕", color: "#F7DC6F" },
  { id: 7, name: "Pesce", icon: "🐟", color: "#5DADE2" },
  { id: 8, name: "Verdure", icon: "🥬", color: "#82E0AA" },
];

export const featuredRecipes: Recipe[] = [
  {
    id: 1,
    title: "Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop",
    category: "Primi Piatti",
    time: "30 min",
    difficulty: "Facile",
    rating: 4.8,
    description: "La classica pasta alla carbonara con guanciale, uova e pecorino romano"
  },
  {
    id: 2,
    title: "Tiramisù",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
    category: "Dolci",
    time: "40 min",
    difficulty: "Media",
    rating: 4.9,
    description: "Il dolce italiano per eccellenza con mascarpone, savoiardi e caffè"
  },
  {
    id: 3,
    title: "Lasagne alla Bolognese",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&h=400&fit=crop",
    category: "Primi Piatti",
    time: "90 min",
    difficulty: "Media",
    rating: 4.7,
    description: "Le tradizionali lasagne con ragù alla bolognese e besciamella"
  },
  {
    id: 4,
    title: "Pizza Margherita",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    category: "Pane e Pizza",
    time: "120 min",
    difficulty: "Media",
    rating: 4.6,
    description: "La pizza napoletana con pomodoro San Marzano, mozzarella e basilico"
  },
  {
    id: 5,
    title: "Risotto ai Funghi Porcini",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop",
    category: "Primi Piatti",
    time: "45 min",
    difficulty: "Media",
    rating: 4.5,
    description: "Risotto cremoso con funghi porcini freschi e parmigiano"
  },
  {
    id: 6,
    title: "Cotoletta alla Milanese",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255a1d197?w=600&h=400&fit=crop",
    category: "Secondi Piatti",
    time: "25 min",
    difficulty: "Facile",
    rating: 4.4,
    description: "La cotoletta di vitello impanata e fritta nel burro"
  },
];

export const latestRecipes: Recipe[] = [
  {
    id: 7,
    title: "Pasta al Pesto",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop",
    category: "Primi Piatti",
    time: "15 min",
    difficulty: "Facile",
    rating: 4.6,
    description: "Pesto genovese fresco con basilico, pinoli e parmigiano"
  },
  {
    id: 8,
    title: "Panna Cotta",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    category: "Dolci",
    time: "20 min",
    difficulty: "Facile",
    rating: 4.7,
    description: "Dolce al cucchiaio cremoso con coulis di frutti di bosco"
  },
  {
    id: 9,
    title: "Branzino al Forno",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&h=400&fit=crop",
    category: "Pesce",
    time: "40 min",
    difficulty: "Facile",
    rating: 4.3,
    description: "Branzino al forno con patate, olive e pomodorini"
  },
  {
    id: 10,
    title: "Parmigiana di Melanzane",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&h=400&fit=crop",
    category: "Contorni",
    time: "60 min",
    difficulty: "Media",
    rating: 4.8,
    description: "Melanzane fritte con pomodoro, mozzarella e parmigiano"
  },
  {
    id: 11,
    title: "Focaccia Genovese",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&h=400&fit=crop",
    category: "Pane e Pizza",
    time: "180 min",
    difficulty: "Media",
    rating: 4.5,
    description: "Focaccia soffice con olio extravergine e rosmarino"
  },
  {
    id: 12,
    title: "Insalata Caprese",
    image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d49?w=600&h=400&fit=crop",
    category: "Antipasti",
    time: "10 min",
    difficulty: "Facile",
    rating: 4.4,
    description: "Mozzarella di bufala, pomodoro e basilico fresco"
  },
];

export const quickRecipes: Recipe[] = [
  {
    id: 13,
    title: "Spaghetti Aglio e Olio",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop",
    category: "Primi Piatti",
    time: "15 min",
    difficulty: "Facile",
    rating: 4.3,
    description: "Pasta veloce con aglio, olio e peperoncino"
  },
  {
    id: 14,
    title: "Bruschetta",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&h=400&fit=crop",
    category: "Antipasti",
    time: "10 min",
    difficulty: "Facile",
    rating: 4.5,
    description: "Pane tostato con pomodorini freschi, basilico e olio EVO"
  },
  {
    id: 15,
    title: "Frittata di Zucchine",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&h=400&fit=crop",
    category: "Secondi Piatti",
    time: "20 min",
    difficulty: "Facile",
    rating: 4.2,
    description: "Frittata leggera con zucchine grattugiate e menta"
  },
  {
    id: 16,
    title: "Torta al Cioccolato",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    category: "Dolci",
    time: "50 min",
    difficulty: "Facile",
    rating: 4.9,
    description: "Torta morbida al cioccolato fondente, perfetta per la merenda"
  },
];
