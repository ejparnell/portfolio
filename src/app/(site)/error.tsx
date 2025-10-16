'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div>
      Something went wrong: {error.message}
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
