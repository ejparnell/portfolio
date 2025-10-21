import Card from '@/ui/Card';
import styles from './page.module.css';

const PROJECTS = [
    {
        id: 1,
        name: 'Pokémon Combat Outcome Predictor',
        description:
            'Interactive web app and ML service that predicts one-on-one Pokémon battle outcomes with over 95 % accuracy by leveraging feature-engineered data and a Random Forest classifier. The front-end offers a clean UI, while the back-end pipeline handles data ingestion, modelling and API delivery.',
        links:
            [
                {
                    label: 'Frontend',
                    url: 'https://github.com/ejparnell/pokemon-combat-ml-frontend',
                },
                {
                    label: 'Microservice',
                    url: 'https://github.com/ejparnell/pokemon-combat-ml',
                }
            ],
        techUsed: [
            {
                name: 'Frontend',
                tech: ['React-19.1', 'Vite-7.0.4', 'TypeScript-4.5'],
            },
            {
                name: 'ML API & Pipeline',
                tech: [
                    'Python-3.8',
                    'Machine_Learning-RandomForest',
                    'FastAPI-0.100',
                    'Scikit-learn-1.3',
                    'Pandas-2.0',
                    'Numpy-1.24',
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'AI Powered Entertainment Web Application',
        description:
            'A sophisticated entertainment web application featuring AI-powered recommendations, multi-platform content discovery, and a modern responsive design.',
        links: [
            {
                label: 'Fullstack',
                url: 'https://github.com/ejparnell/entertainment-web-app',
            },
            {
                label: 'Microservice',
                url: 'https://github.com/ejparnell/ml-entertainment-web-app',
            }
        ],
        techUsed: [
            {
                name: 'Next.js Fullstack',
                tech: [
                    'Next-15.5.4',
                    'React-19.1.0',
                    'TypeScript-5.0',
                    'Node-20.0',
                    'Mongoose-8.19.1',
                    'MongoDB-6.0',
                    'Zod-4.1.12',
                    'JWT-9.0.2',
                    'BcryptJS-3.0.2',
                    'ESLint-9.0'
                ],
            },
            {
                name: 'ML API & Pipeline',
                tech: [
                    'Python-3.8',
                    'FastAPI-0.100.0',
                    'Uvicorn-0.23.0',
                    'Pydantic-2.4.0',
                    'Pandas-2.0.0',
                    'Numpy-1.21.0',
                    'Scikit_learn-1.2.0',
                    'Scipy-1.10.0',
                    'Python_Multipart-0.0.6',
                    'Requests-2.31.0',
                    'Pytest-7.0.0',
                    'HTTPX-0.24.0'
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Baldur\'s Gate Shop Sales Forecast',
        description: 'A comprehensive machine learning project for analyzing and forecasting shop sales in the fantasy world of Baldur\'s Gate',
        links: [
            {
                label: 'Backend',
                url: 'https://github.com/ejparnell/baldurs-gate-sales-forcast-ml',
            }
        ],
        techUsed: [
            {
                name: 'EDA Pipeline',
                tech: [
                    'Python-3.8',
                    'Scikit-learn-1.3',
                    'Pandas-2.0',
                    'Numpy-1.24',
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Titanic: Machine Learning from Disaster',
        description: 'A comprehensive machine learning project predicting passenger survival on the Titanic using the CRISP-DM methodology. This project demonstrates end-to-end data science workflow from business understanding to deployment, with professional documentation and reproducible results.',
        links: [
            {
                label: 'Backend',
                url: 'https://github.com/ejparnell/titanic-ml',
            }
        ],
        techUsed: [
            {
                name: 'ML Model & Pipeline',
                tech: [
                    'Python-3.8',
                    'Scikit-learn-1.3',
                    'Pandas-2.0',
                    'Numpy-1.24',
                ],
            }
        ]
    }
];

export default function ProjectsPage() {
    return (
        <div>
            <div>
                <div className={styles.squareOutline1} />
                <div className={styles.squareOutline2} />
                <div className={styles.squareOutline3} />
                <div className={styles.squareGhostCircle} />
                <div className={styles.squareCircleFilled} />
                <div className={styles.squareBoldLine} />
                <div className={styles.squareFineLine} />
            </div>
            <div className={styles.ghostDotsContainer}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className={styles.ghostDot} />
                ))}
            </div>
            <div className={styles.ghostSquare} />

            <div className={styles.projects}>
                {PROJECTS.map((project) => (
                    <Card 
                        key={project.id} 
                        title={project.name} 
                        description={project.description}
                        links={project.links}
                        techUsed={project.techUsed}
                    />
                ))}
            </div>
        </div>
    );
}
