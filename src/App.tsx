import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetUsers,  } from "./tetsu/tetsuComponents";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

function Users() {
  const { data, error, isLoading, refetch } = useGetUsers(
    {
      queryParams: {
        is_enabled: false
      }
    },
    {
      enabled: true,
    }
  );

  if (error) {
    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  const handleClick = () => {
    refetch()
  }

  return (
    <div>
      <button onClick={handleClick}>refatch!!!</button>
      {isLoading ? (
        <div>Loading…</div>
      ) : (
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
