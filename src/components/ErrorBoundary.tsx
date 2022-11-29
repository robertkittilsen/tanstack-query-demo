import { Heading } from "@chakra-ui/react";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return <Heading>Oops! Noe gikk galt :(</Heading>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
