# Generative AI QA Platform

A comprehensive quality assurance and testing platform for Large Language Model (LLM) applications. This dashboard provides real-time monitoring, performance analytics, and testing capabilities to ensure the reliability and quality of your AI-powered applications.

## 🚀 Features

### 📊 Dashboard & Metrics
- **Real-time Metrics Overview**: Monitor total tests, pass rates, failed tests, and average response times
- **System Health Monitoring**: Track the health status of your LLM services
- **Performance Charts**: Visualize performance trends and identify bottlenecks
- **Quick Actions**: Fast access to common tasks and operations

### 🧪 Test Management
- **Test Suite Management**: Create, organize, and execute comprehensive test suites
- **Test Filtering**: Advanced filtering capabilities to focus on specific test scenarios
- **Recent Test History**: Track and review recent test executions
- **Automated Testing**: Run tests automatically to catch issues early

### 🔍 RAG & Embeddings
- **Document Upload**: Upload and process documents for embeddings
- **Vector Search**: Test and validate retrieval quality
- **Embeddings Management**: Monitor and manage your vector database
- **Index Rebuilding**: Refresh and optimize your vector indices

### 📈 Performance Analytics
- **Detailed Metrics**: In-depth performance and cost analysis
- **Latency Tracking**: Monitor response times and identify slow operations
- **Cost Analysis**: Track API costs and optimize spending
- **Custom Charts**: Visualize metrics with interactive charts

### 📝 Observability & Logs
- **Real-time Log Viewer**: Monitor application logs in real-time
- **Log Filtering**: Advanced search and filtering capabilities
- **Log Statistics**: Aggregate and analyze log data
- **Debugging Insights**: Quickly identify and troubleshoot issues

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.2.4**: React framework with App Router
- **React 19**: Latest React with modern features
- **TypeScript 5**: Type-safe development

### UI & Styling
- **Tailwind CSS 4.1.9**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Beautifully designed components
- **Lucide React**: Icon library
- **next-themes**: Dark mode support

### UI Components
- Forms: `react-hook-form` with `zod` validation
- Charts: `recharts` for data visualization
- Date Picker: `react-day-picker` with `date-fns`
- Carousel: `embla-carousel-react`
- Notifications: `sonner` for toast notifications
- Command Palette: `cmdk` for command menu
- Drawers: `vaul` for drawer components

### Development Tools
- **PostCSS**: CSS transformations
- **ESLint**: Code linting
- **Vercel Analytics**: Performance monitoring

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **pnpm** (pnpm recommended)

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/johaankjis/Generative-AI-QA-Platform.git
cd Generative-AI-QA-Platform
```

### 2. Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

### 3. Run the Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 4. Build for Production

```bash
pnpm build
# or
npm run build
```

### 5. Start Production Server

```bash
pnpm start
# or
npm start
```

## 📁 Project Structure

```
Generative-AI-QA-Platform/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard homepage
│   ├── tests/             # Test suite management
│   ├── rag/               # RAG & embeddings interface
│   ├── metrics/           # Performance metrics
│   ├── logs/              # Observability & logs
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── dashboard-header.tsx
│   ├── metrics-overview.tsx
│   ├── test-suite-list.tsx
│   ├── embeddings-manager.tsx
│   ├── log-viewer.tsx
│   └── ...               # Other feature components
├── lib/                   # Utility libraries
│   └── utils.ts          # Helper functions
├── hooks/                 # Custom React hooks
├── public/               # Static assets
├── styles/               # Additional styles
├── next.config.mjs       # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── components.json       # shadcn/ui configuration
└── package.json          # Project dependencies
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint to check code quality |

## 🎨 Key Pages

### Dashboard (`/`)
The main dashboard providing an overview of:
- Key metrics and KPIs
- System health status
- Recent test results
- Performance trends
- Quick action buttons

### Test Suites (`/tests`)
Manage and execute your LLM test suites:
- Create new test suites
- View test results
- Filter tests by status
- Execute test runs

### RAG & Embeddings (`/rag`)
Manage your RAG pipeline:
- Upload documents
- Test vector search
- Monitor embeddings
- Rebuild indices

### Performance Metrics (`/metrics`)
Analyze detailed performance data:
- Response time metrics
- Cost analysis
- Usage statistics
- Performance trends

### Observability & Logs (`/logs`)
Debug and monitor your application:
- Real-time log streaming
- Log filtering and search
- Error tracking
- Performance insights

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful component and variable names
- Write clean, readable code
- Ensure all types are properly defined
- Test your changes thoroughly
- Follow the existing code style and structure

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configuration:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
# Add other configuration as needed
```

### Tailwind Configuration

The project uses Tailwind CSS 4.x with custom configuration. Modify `postcss.config.mjs` and Tailwind settings as needed.

### TypeScript Configuration

TypeScript is configured with strict mode enabled. See `tsconfig.json` for compiler options.

## 📦 Deployment

The application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

Alternatively, you can deploy to any platform that supports Next.js applications.

## 📄 License

This project is available for use under the terms specified by the repository owner.

## 👥 Authors

- **johaankjis** - [GitHub Profile](https://github.com/johaankjis)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Note**: This is a quality assurance platform for LLM applications. It provides tools to test, monitor, and ensure the reliability of AI-powered systems.
