import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

function Home() {
  return (
    <div>
      <Suspense
        fallback={<p className="text-red-500">Loading the Todos....</p>}
      >
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <p className="text-blue-500">Loading the Shopping Trolley....</p>
        }
      >
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
