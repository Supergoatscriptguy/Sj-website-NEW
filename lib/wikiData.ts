// Wiki data structure - edit this file to update wiki content
export interface WikiArticle {
  id: string;
  title: string;
  content: string;
  image?: string; // Optional image path
}

export interface WikiCategory {
  id: string;
  title: string;
  articles: WikiArticle[];
}

export const wikiData: WikiCategory[] = [
  {
    id: 'locations',
    title: 'Locations',
    articles: [
      {
        id: 'sendai-village',
        title: 'Sendai Village',
        image: '/images/Sendai.png',
        content: `# Sendai Village

Sendai Village is the starting area for all new sorcerers in Sorcerer's Journey.

## Overview
A peaceful village nestled in the mountains, Sendai serves as the training ground for aspiring jujutsu sorcerers.

## Key Features
- Training grounds with practice dummies
- Quest givers and NPCs
- Safe zone for beginners
- Central village square

## Notable Areas

### Village Square
The central hub where players gather, find quest givers, and access important NPCs.

### Training Grounds
Practice your techniques on training dummies and improve your skills in a safe environment.

**Game in early development - More information will be added when available**`
      },
      {
        id: 'forest-of-elban',
        title: 'Forest of Elban',
        image: '/images/Elban1.png',
        content: `# Forest of Elban

A mysterious cursed forest shrouded in darkness and danger.

## Overview
The Forest of Elban is a mid-level combat zone filled with cursed spirits and hidden secrets.

## Environment
Dense forests with dark atmosphere, perfect for testing your combat skills against tougher enemies.

**Game in early development - Information will be added when available**`
      },
      {
        id: 'shibuya-district',
        title: 'Shibuya District',
        image: '/images/Shibuya1.png',
        content: `# Shibuya District

The chaotic urban battlefield where the strongest sorcerers clash.

## Overview
Shibuya District represents the endgame content, featuring the most challenging enemies and bosses.

## Atmosphere
An urban environment filled with danger at every corner. Only the strongest sorcerers dare to venture here.

**Game in early development - Information will be added when available**`
      }
    ]
  },
  {
    id: 'characters',
    title: 'Characters',
    articles: [
      {
        id: 'nanami',
        title: 'Kento Nanami',
        image: '/images/Charicter-nanami.png',
        content: `# Kento Nanami

Grade 1 Jujutsu Sorcerer with the powerful 7:3 technique.

## Overview
A former salaryman turned jujutsu sorcerer who uses the 7:3 technique to create weak points on any target.

## Abilities
- 7:3 Technique: Creates critical weak points
- Expert hand-to-hand combatant
- Tactical fighter with precise strikes

**Currently speculation - Nothing confirmed**

Game in early development - Information will be added when available`
      },
      {
        id: 'yuji',
        title: 'Yuji Itadori',
        image: '/images/Yuji-Boss.png',
        content: `# Yuji Itadori

A powerful boss character with incredible physical strength and cursed energy.

## Overview
The first major boss encounter featuring devastating physical attacks and cursed energy punches.

## Combat Style
- Incredible physical strength
- Cursed energy-infused attacks
- Fast and aggressive combat style

**Currently speculation - Nothing confirmed**

Game in early development - Information will be added when available`
      }
    ]
  },
  {
    id: 'techniques',
    title: 'Cursed Techniques',
    articles: [
      {
        id: 'basic-techniques',
        title: 'Basic Techniques',
        content: `# Basic Cursed Techniques

Fundamental techniques that all sorcerers can learn.

**Game in early development - Information will be added when available**`
      },
      {
        id: 'domain-expansion',
        title: 'Domain Expansion',
        content: `# Domain Expansion

The ultimate technique that creates a barrier infused with cursed energy.

**Game in early development - Information will be added when available**`
      }
    ]
  },
  {
    id: 'items',
    title: 'Items & Weapons',
    articles: [
      {
        id: 'cursed-tools',
        title: 'Cursed Tools',
        content: `# Cursed Tools

Weapons imbued with cursed energy.

**Game in early development - Information will be added when available**`
      },
      {
        id: 'inverted-spear',
        title: 'Inverted Spear of Heaven',
        image: '/images/Invertedspearofheaven.png',
        content: `# Inverted Spear of Heaven

A legendary cursed tool that can nullify cursed techniques.

## Overview
One of the most powerful cursed tools in existence, capable of canceling any cursed technique it touches.

## Properties
- Nullifies cursed techniques on contact
- Extremely rare and difficult to obtain
- Highly sought after by sorcerers

**Game in early development - Information will be added when available**`
      }
    ]
  },
  {
    id: 'quests',
    title: 'Quests',
    articles: [
      {
        id: 'main-story',
        title: 'Main Story',
        content: `# Main Story Quests

The primary storyline of Sorcerer's Journey.

**Game in early development - Information will be added when available**`
      },
      {
        id: 'side-quests',
        title: 'Side Quests',
        content: `# Side Quests

Optional missions that provide additional rewards and lore.

**Game in early development - Information will be added when available**`
      }
    ]
  }
];
