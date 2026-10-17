import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#0a0f1e] p-6">
          <div className="max-w-2xl rounded-2xl border border-red-500/30 bg-red-500/10 p-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-red-400">
              Something went wrong
            </h1>
            <p className="mb-4 text-gray-300">
              {this.state.error?.message || 'Unknown error occurred'}
            </p>
            <details className="mt-4 rounded-lg bg-black/40 p-4 text-left">
              <summary className="cursor-pointer text-sm font-semibold text-gray-400">
                Error Details
              </summary>
              <pre className="mt-2 overflow-auto text-xs text-gray-500">
                {this.state.error?.stack}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
