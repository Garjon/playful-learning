# Playful Learning

A simple web application that generates engaging educational games for children, focusing on reading, writing, and mathematics skills. Powered by AI to create personalised learning experiences.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [pnpm](https://pnpm.io/) (v9.5 or higher)
- [Docker](https://www.docker.com/) (for local Supabase development)
- An OpenAI API key with available credits

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/playful-learning.git
   cd playful-learning
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your configuration:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret

4. Initialize and start the Supabase local development environment:
   ```bash
   pnpm supabase:start
   pnpm supabase:db:migrate
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## Development

To run code formatting and linting:
```bash
pnpm format
pnpm lint
```

## Contributing

I welcome contributions to Playful Learning! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting to ensure code quality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Pull Request Guidelines

- Ensure your code follows the project's existing style
- Regenerate the Supabase client types: `pnpm supabase:db:types` if you make changes to the database schema
- Update documentation as needed
- Keep pull requests focused on a single feature or bug fix

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/yourusername/playful-learning/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide as much detail as possible when reporting issues
