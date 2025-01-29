# HedgeAI JavaScript Coding Standards

## Table of Contents
- [Code Style](#code-style)
- [TypeScript Guidelines](#typescript-guidelines)
- [React Best Practices](#react-best-practices)
- [Documentation](#documentation)
- [Testing](#testing)
- [Performance](#performance)
- [Security](#security)

## Code Style

### General Principles
- Write clean, maintainable, and self-documenting code
- Use modern JavaScript features (ES6+)
- Follow functional programming principles where appropriate
- Keep functions small and focused
- Use meaningful variable and function names

### Naming Conventions
```javascript
// Variables: camelCase, descriptive names
const userPortfolio = new Portfolio();
let dailyReturns = calculateReturns(portfolio);

// Functions: camelCase, action verbs
function calculatePortfolioRisk() {}
function updatePositionSize() {}

// Classes: PascalCase
class PortfolioOptimizer {}
class RiskAnalyzer {}

// Constants: UPPER_CASE
const MAX_POSITION_SIZE = 0.1;
const RISK_FREE_RATE = 0.02;

// Private variables/methods: prefix with underscore
class Portfolio {
  _privateMethod() {}
  _privateVariable = 0;
}

// Boolean variables: prefix with is/has/should
const isActive = true;
const hasPermission = false;
const shouldUpdate = true;
```

### Code Formatting
- Use 2 spaces for indentation
- Maximum line length: 80 characters
- Use semicolons at the end of statements
- Use single quotes for strings
- Always use curly braces for blocks
- Add spaces around operators

```javascript
// Good
const result = calculate((value + offset) * multiplier);

// Bad
const result=calculate((value+offset)*multiplier)
```

## TypeScript Guidelines

### Type Definitions
```typescript
// Use interfaces for objects
interface PortfolioPosition {
  symbol: string;
  quantity: number;
  averagePrice: number;
  lastUpdated: Date;
}

// Use type aliases for unions/complex types
type TradeStatus = 'pending' | 'executed' | 'failed';
type PortfolioMap = Map<string, PortfolioPosition>;

// Use enums for fixed sets of values
enum RiskLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
```

### Type Usage
```typescript
// Function parameters and return types
function calculateReturns(
  positions: PortfolioPosition[],
  startDate: Date,
  endDate: Date
): number[] {
  // Implementation
}

// Generic types
interface ApiResponse<T> {
  data: T;
  status: number;
  timestamp: Date;
}

// Async functions
async function fetchPortfolio(userId: string): Promise<Portfolio> {
  // Implementation
}
```

## React Best Practices

### Component Structure
```typescript
// Functional components with TypeScript
interface ProfileProps {
  userId: string;
  onUpdate?: (data: UserData) => void;
}

const Profile: React.FC<ProfileProps> = ({ userId, onUpdate }) => {
  // Implementation
};

// Use proper prop types
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}
```

### Hooks Usage
```typescript
// Custom hooks
function usePortfolio(userId: string) {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Implementation
  }, [userId]);

  return { portfolio, loading };
}

// State management
function PortfolioManager() {
  const [positions, setPositions] = useState<PortfolioPosition[]>([]);
  const [filters, setFilters] = useState<PortfolioFilters>({
    sortBy: 'value',
    filterType: 'all',
  });
}
```

## Documentation

### JSDoc Comments
```javascript
/**
 * Calculates the Sharpe ratio for a given set of returns
 * @param {number[]} returns - Array of historical returns
 * @param {number} [riskFreeRate=0.02] - Annual risk-free rate
 * @returns {number} The Sharpe ratio of the returns
 * @throws {Error} If returns array is empty
 */
function calculateSharpeRatio(returns, riskFreeRate = 0.02) {
  // Implementation
}

/**
 * React component for displaying portfolio performance
 * @component
 * @param {Object} props
 * @param {string} props.portfolioId - Unique identifier for the portfolio
 * @param {TimeRange} props.timeRange - Time range for performance calculation
 * @returns {ReactElement}
 */
```

### Inline Comments
- Use them sparingly - code should be self-documenting
- Explain why, not what
- Use for complex algorithms or business logic

```javascript
// Calculate EMA to reduce noise in price data
const smoothedPrices = calculateEMA(prices, 20);

// Use historical simulation method for VaR calculation
// as required by regulatory compliance
const var = calculateHistoricalVaR(returns);

// TODO: Implement real-time updates when WebSocket API is ready
// FIXME: Current implementation might have performance issues with large datasets
```

## Testing

### Jest/React Testing Library
```javascript
describe('PortfolioOptimizer', () => {
  let optimizer;

  beforeEach(() => {
    optimizer = new PortfolioOptimizer();
  });

  test('should calculate correct portfolio weights', () => {
    const positions = mockPositions();
    const weights = optimizer.calculateWeights(positions);
    expect(weights).toMatchSnapshot();
  });
});

// Component testing
describe('PortfolioView', () => {
  it('renders loading state correctly', () => {
    render(<PortfolioView loading={true} />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
```

## Performance

### Optimization Guidelines
- Use memoization for expensive calculations
- Implement virtual scrolling for large lists
- Lazy load components and routes
- Use appropriate data structures
- Batch state updates
- Debounce frequent events

```javascript
// Memoization example
const memoizedCalculation = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// Debouncing example
const debouncedUpdate = debounce((value) => {
  updatePortfolio(value);
}, 300);
```

## Security

### Best Practices
- Sanitize all user inputs
- Use HTTPS for API calls
- Implement proper authentication
- Avoid storing sensitive data in localStorage
- Use environment variables for sensitive configuration
- Regularly update dependencies

```javascript
// Proper error handling
try {
  await api.executeTransaction(trade);
} catch (error) {
  // Log error safely without exposing sensitive details
  logger.error('Transaction failed', {
    errorType: error.name,
    tradeId: trade.id,
  });
}
```